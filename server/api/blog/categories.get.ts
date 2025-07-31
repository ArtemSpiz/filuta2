import { getCategories } from '../../utils/directus';

export default defineEventHandler(async event => {
  try {
    console.log('Fetching categories from Directus...');
    const categoriesResponse = await getCategories();
    console.log('Categories response:', categoriesResponse);

    return {
      categories: categoriesResponse.data || [],
      message: 'Categories fetched successfully',
    };
  } catch (error) {
    console.error('Error fetching categories:', error);
    return {
      categories: [],
      message: 'Error fetching categories',
      error: error.message,
    };
  }
});
