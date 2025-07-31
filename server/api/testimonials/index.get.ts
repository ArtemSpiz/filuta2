import { getTestimonials } from '../../utils/directus';

export default defineEventHandler(async () => {
  try {
    const testimonials = await getTestimonials();
    return testimonials;
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }
});
