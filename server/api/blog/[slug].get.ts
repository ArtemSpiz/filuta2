import { getBlogPost } from '~/server/utils/directus';

export default defineEventHandler(async event => {
  try {
    const slug = getRouterParam(event, 'slug');

    if (!slug) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Slug is required',
      });
    }

    const post = await getBlogPost(slug);

    if (!post) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Blog post not found',
      });
    }

    return post;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch blog post',
    });
  }
});
