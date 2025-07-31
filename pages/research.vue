<template>
  <div>
    <!-- Page Sections -->
    <ResearchHero />
    <Team
      title="Research Team"
      subtitle="Our research is led by a world-class team of AI scientists, engineers, and academic collaborators. We combine deep theoretical expertise with a product-first mindset."
      :team-members="researchTeam"
    />
    <Highlights />
    <Talents />
  </div>
</template>

<script setup lang="ts">
import ResearchHero from '@/components/Research/ResearchHero.vue';
import Team from '@/components/shared/Team.vue';
import Highlights from '@/components/Research/Highlights.vue';
import Talents from '@/components/Research/Talents.vue';

// SEO
definePageMeta({
  title: 'Research',
  description:
    "Explore Filuta's research in AI-powered compliance solutions. Discover our latest innovations and breakthroughs in government and education technology.",
});

// Use SEO composable
import { setupPageSEO, pageSEOConfigs } from '../composables/usePageSEO';
setupPageSEO(pageSEOConfigs.research);

// Fetch team data from Directus
const { data: teamData } = useFetch('/api/team/research');

// Filter for research team members
const researchTeam = computed(() => {
  if (!teamData.value) return [];
  return teamData.value.filter((member: any) => member.department === 'research');
});
</script>
