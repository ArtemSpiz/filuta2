import { getBlogPost } from '../../utils/directus';

export default defineEventHandler(async event => {
  try {
    const slug = getRouterParam(event, 'slug');

    if (!slug) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Slug is required',
      });
    }

    // URL decode the slug to handle special characters
    const decodedSlug = decodeURIComponent(slug);
    console.log('Looking for slug:', decodedSlug);

    const post = await getBlogPost(decodedSlug);

    if (!post) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Blog post not found',
      });
    }

    // Transform the post for the frontend
    const transformedPost = {
      id: post.id,
      title: post.title,
      slug: post.slug,
      subtitle: post.subtitle,
      content: post.content,
      category: post.category?.title || 'Uncategorized',
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
      related:
        post.related?.map((relatedPost: any) => ({
          id: relatedPost.id,
          title: relatedPost.title,
          slug: relatedPost.slug,
          subtitle: relatedPost.subtitle,
          content: relatedPost.content,
          category:
            typeof relatedPost.category === 'object' ? relatedPost.category.title : 'Uncategorized',
          featured_image: relatedPost.featured_image
            ? {
                id: relatedPost.featured_image.id,
                filename_download: relatedPost.featured_image.filename_download,
                width: relatedPost.featured_image.width,
                height: relatedPost.featured_image.height,
              }
            : '/img/blogImage1.png',
          published_at: relatedPost.published_at,
          meta_title: relatedPost.meta_title,
          meta_description: relatedPost.meta_description,
          seo_keywords: relatedPost.seo_keywords,
        })) || [],
    };

    return transformedPost;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch blog post',
    });
  }
});
