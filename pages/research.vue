<template>
  <div>
    <!-- Page Sections -->
    <ResearchHero />
    <Team :team-cards="TeamCardsRes" />
    <Highlights />
    <Talents />
  </div>
</template>

<script setup>
import TeamCardsRes from '@/content/ResTeamData';
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

// Fetch team data from CMS or use static data
// const { data: teamCardsRes } = useFetch('/api/team/research');
</script>
