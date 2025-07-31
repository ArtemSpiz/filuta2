import { getCaseStudies } from '../../utils/directus';

export default defineEventHandler(async () => {
  try {
    const caseStudies = await getCaseStudies();
    return caseStudies;
  } catch (error) {
    console.error('Error fetching case studies:', error);
    return [];
  }
});
