import { getBlogPosts, getCategories } from '../../utils/directus';

export default defineEventHandler(async event => {
  try {
    const query = getQuery(event);
    const category = (query.category as string) || 'all';
    const page = parseInt(query.page as string) || 1;
    const limit = parseInt(query.limit as string) || 12;

    let postsResponse, categoriesResponse;

    try {
      [postsResponse, categoriesResponse] = await Promise.all([
        getBlogPosts({
          category: category === 'all' ? undefined : category,
          page,
          limit,
        }),
        getCategories(),
      ]);
    } catch (apiError) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Failed to fetch blog posts',
      });
    }

    const posts = postsResponse.data || [];
    const pagination = postsResponse.pagination;
    const categories = categoriesResponse.data || [];

    const transformedPosts = posts.map((post: any) => ({
      id: post.id,
      title: post.title,
      slug: post.slug,
      subtitle: post.subtitle,
      content: post.content,
      category: post.category?.title || post.category || 'Uncategorized',
      featured_image: post.featured_image
        ? {
            id: post.featured_image.id,
            filename_download: post.featured_image.filename_download,
            width: post.featured_image.width,
            height: post.featured_image.height,
          }
        : '/img/blogImage1.png',
      published_at: post.published_at,
      meta_title: post.meta_title,
      meta_description: post.meta_description,
      seo_keywords: post.seo_keywords,
      status: post.status,
    }));

    const transformedCategories = [
      { value: 'all', label: 'All' },
      ...categories.map((cat: any) => ({
        value: cat.id,
        label: cat.title,
      })),
    ];

    return {
      posts: transformedPosts,
      pagination: {
        current: page,
        total: Math.ceil((pagination?.total || 0) / limit),
        totalPosts: pagination?.total || 0,
        limit,
        hasNext: page * limit < (pagination?.total || 0),
        hasPrev: page > 1,
      },
      categories: transformedCategories,
    };
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch blog posts',
    });
  }
});
