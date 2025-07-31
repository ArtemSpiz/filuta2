import { getCaseStudy } from '../../utils/directus';

export default defineEventHandler(async event => {
  try {
    const slug = getRouterParam(event, 'slug');
    if (!slug) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Slug parameter is required',
      });
    }

    const decodedSlug = decodeURIComponent(slug);
    const caseStudy = await getCaseStudy(decodedSlug);

    if (!caseStudy) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Case study not found',
      });
    }

    return caseStudy;
  } catch (error) {
    console.error('Error fetching case study:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch case study',
    });
  }
});
