import { getTeamMembers } from '~/server/utils/directus';

export default defineEventHandler(async () => {
  try {
    const teamMembers = await getTeamMembers('research');
    return teamMembers;
  } catch (error) {
    console.error('Error fetching research team members:', error);
    // Return mock data as fallback
    return [];
  }
});
