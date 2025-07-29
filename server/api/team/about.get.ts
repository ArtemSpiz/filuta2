import { getTeamMembers } from '~/server/utils/directus';

export default defineEventHandler(async () => {
  try {
    const teamMembers = await getTeamMembers('about');
    return teamMembers;
  } catch (error) {
    console.error('Error fetching about team members:', error);
    // Return mock data as fallback
    return [];
  }
});
