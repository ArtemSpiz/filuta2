<template>
  <div>
    <!-- Page Sections -->
    <GovernmentHero />
    <Smarter />
    <Help />
    <Case />
    <Featured />
    <Build
      title-class="max-w-[750px]"
      subtitle-class="w-[400px]"
      title="The Future of Automotive Testing is Here"
      subtitle="Let Filuta AI enhance your infotainment validation so your team can focus on building the next generation of in-vehicle experiences."
    />
  </div>
</template>

<script setup>
import GovernmentHero from '@/components/Government/GovernmentHero.vue';
import Smarter from '@/components/Government/Smarter.vue';
import Help from '@/components/Government/Help.vue';
import Case from '@/components/Government/Case.vue';
import Featured from '@/components/Government/Featured.vue';
import Build from '@/components/Home/Build/Build.vue';

// SEO
definePageMeta({
  title: 'Government & Education',
  description:
    'AI-powered compliance solutions for government and education sectors. Streamline processes and reduce risks with intelligent automation.',
});

// Use SEO composable
import { setupPageSEO, pageSEOConfigs } from '~/composables/usePageSEO';
setupPageSEO(pageSEOConfigs.governmentEducation);
</script>
