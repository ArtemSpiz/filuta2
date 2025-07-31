<template>
  <div>
    <!-- Page Sections -->
    <AboutHero />
    <Composite />
    <Team :team-cards="aboutTeamData || []" />
    <Values />
    <Build
      title="Build Better Games, With Less QA Stress"
      subtitle="Let Filuta handle the grunt work so your team can focus on great gameplay."
    />
  </div>
</template>

<script setup>
import AboutHero from '@/components/AboutUs/AboutHero.vue';
import Composite from '@/components/AboutUs/Composite.vue';
import Team from '@/components/Research/Team.vue';
import Values from '@/components/AboutUs/Values.vue';
import Build from '@/components/Home/Build/Build.vue';

// SEO
definePageMeta({
  title: 'About Us',
  description:
    "Learn about Filuta's mission to revolutionize compliance through AI-powered solutions. Meet our team of experts dedicated to transforming government and education sectors.",
});

// Use SEO composable
import { setupPageSEO, pageSEOConfigs } from '~/composables/usePageSEO';
setupPageSEO(pageSEOConfigs.about);

// Fetch team data from Directus
const { data: aboutTeamData } = useFetch('/api/team/about');
</script>
