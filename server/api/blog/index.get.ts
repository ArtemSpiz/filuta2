import { getBlogPosts, getCategories } from '../../utils/directus';

// Fallback data for when API is not available
const fallbackPosts = [
  {
    id: '1',
    title: 'GDC & PGC San Francisco 2025',
    slug: 'GDC&PGCSanFrancisco2025',
    subtitle: 'A quick look back at our time in San Francisco during GDC and PGC.',
    content:
      '<p>We recently attended both the Game Developers Conference (GDC) and Pocket Gamer Connects (PGC) in San Francisco, and it was an incredible experience connecting with the gaming community.</p>',
    category: 'News',
    featured_image: '/img/blogImage1.png',
    published_at: '2025-01-15T10:00:00Z',
    meta_title: 'GDC & PGC San Francisco 2025 - Filuta Blog',
    meta_description: 'A quick look back at our time in San Francisco during GDC and PGC.',
    seo_keywords: ['GDC', 'PGC', 'San Francisco', 'Gaming', 'AI Testing', 'Game Development'],
    status: 'published',
  },
  {
    id: '2',
    title: 'Why Manual Compliance No Longer Works',
    slug: 'WhyManualComplianceNoLongerWorks',
    subtitle:
      'Manual processes are slow, error-prone, and risky. Discover the hidden costs of outdated workflows — and how automation changes the game.',
    content:
      "<p>In today's fast-paced regulatory environment, manual compliance processes are becoming increasingly unsustainable.</p>",
    category: 'Government & Education',
    featured_image: '/img/blogImage1.png',
    published_at: '2025-05-05T09:00:00Z',
    meta_title: 'Why Manual Compliance No Longer Works - Filuta',
    meta_description:
      'Manual processes are slow, error-prone, and risky. Discover the hidden costs of outdated workflows — and how automation changes the game.',
    seo_keywords: [
      'Compliance',
      'Automation',
      'Manual Processes',
      'Risk Management',
      'Regulatory Compliance',
    ],
    status: 'published',
  },
];

const fallbackCategories = [
  { value: 'all', label: 'All' },
  { value: 'news', label: 'News' },
  { value: 'government-education', label: 'Government & Education' },
  { value: 'research', label: 'Research' },
];

export default defineEventHandler(async event => {
  try {
    const query = getQuery(event);
    const category = (query.category as string) || 'all';
    const page = parseInt(query.page as string) || 1;
    const limit = parseInt(query.limit as string) || 12;

    console.log('API Request - Category:', category, 'Page:', page, 'Limit:', limit);

    // Try to fetch data from Directus
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

      console.log(
        'Directus API Response - Posts:',
        postsResponse.data?.length || 0,
        'Categories:',
        categoriesResponse.data?.length || 0
      );
    } catch (apiError) {
      console.warn('Directus API not available, using fallback data:', apiError);
      // Use fallback data
      const filteredPosts =
        category === 'all'
          ? fallbackPosts
          : fallbackPosts.filter(post => {
              const postCategory = post.category.toLowerCase().replace(/\s+/g, '-');
              console.log(
                'Filtering post:',
                post.title,
                'Category:',
                postCategory,
                'Requested:',
                category
              );
              return postCategory === category;
            });

      console.log('Fallback data - Filtered posts:', filteredPosts.length);

      return {
        posts: filteredPosts,
        pagination: {
          current: page,
          total: 1,
          totalPosts: filteredPosts.length,
          limit,
          hasNext: false,
          hasPrev: false,
        },
        categories: fallbackCategories,
      };
    }

    const posts = postsResponse.data || [];
    const pagination = postsResponse.pagination;
    const categories = categoriesResponse.data || [];

    // Transform posts with proper category and image handling
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
        : '/img/blogImage1.png', // Return a local image path for testing
      published_at: post.published_at,
      meta_title: post.meta_title,
      meta_description: post.meta_description,
      seo_keywords: post.seo_keywords,
      status: post.status,
    }));

    // Transform categories to use slugs or IDs for filtering
    const transformedCategories = [
      { value: 'all', label: 'All' },
      ...categories.map((cat: any) => ({
        value: cat.id, // Use the category ID directly
        label: cat.title,
      })),
    ];

    console.log('Transformed categories:', transformedCategories);

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
