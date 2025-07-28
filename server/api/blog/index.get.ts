import { BlogCards, categories as mockCategories, filteredCards } from '../../data/blog';

export default defineEventHandler(async event => {
  try {
    const query = getQuery(event);
    const category = (query.category as string) || 'all';
    const page = parseInt(query.page as string) || 1;
    const limit = parseInt(query.limit as string) || 12;

    // Filter posts by category
    const filteredPosts = filteredCards(category === 'all' ? 'All' : category);

    // Calculate pagination
    const totalPosts = filteredPosts.length;
    const totalPages = Math.ceil(totalPosts / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

    return {
      posts: paginatedPosts,
      pagination: {
        current: page,
        total: totalPages,
        totalPosts,
        limit,
        hasNext: endIndex < totalPosts,
        hasPrev: page > 1,
      },
      categories: mockCategories.map((cat: any) => ({
        value: cat.title.toLowerCase(),
        label: cat.title,
      })),
    };
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch blog posts',
    });
  }
});
