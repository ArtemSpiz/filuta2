import { getBlogPosts } from '~/server/utils/directus';

export default defineEventHandler(async event => {
  try {
    const query = getQuery(event);
    const category = query.category as string;
    const page = parseInt(query.page as string) || 1;
    const limit = parseInt(query.limit as string) || 10;

    const posts = await getBlogPosts(category);

    // Calculate pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedPosts = posts.slice(startIndex, endIndex);

    return {
      posts: paginatedPosts,
      pagination: {
        current: page,
        total: Math.ceil(posts.length / limit),
        totalPosts: posts.length,
        hasNext: endIndex < posts.length,
        hasPrev: page > 1,
      },
    };
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch blog posts',
    });
  }
});
