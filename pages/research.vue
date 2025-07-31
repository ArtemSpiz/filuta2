<template>
  <div>
    <!-- Page Sections -->
    <ResearchHero />
    <Team :team-cards="researchTeamData || []" />
    <Highlights />
    <Talents />
  </div>
</template>

<script setup>
import ResearchHero from '@/components/Research/ResearchHero.vue';
import Team from '@/components/Research/Team.vue';
import Highlights from '@/components/Research/Highlights.vue';
import Talents from '@/components/Research/Talents.vue';

// SEO
definePageMeta({
  title: 'Research',
  description:
    "Explore Filuta's research in AI-powered compliance solutions. Discover our latest innovations and breakthroughs in government and education technology.",
});

// Use SEO composable
import { setupPageSEO, pageSEOConfigs } from '~/composables/usePageSEO';
setupPageSEO(pageSEOConfigs.research);

// Fetch team data from Directus
const { data: researchTeamData } = useFetch('/api/team/research');
</script>
