<template>
  <div>
    <Hero />
    <Problems />
    <!-- <Transform /> -->
    <Everything />
    <!-- <Powered /> -->
    <Intelligent />
    <Trusted />
    <Security />
    <Build
      title="Build Better Games, With Less QA Stress"
      subtitle="Let Filuta handle the grunt work so your team can focus on great gameplay."
    />
  </div>
</template>

<script setup>
import Hero from '@/components/Home/Hero/Hero';
import Problems from '@/components/Home/Problems/Problems';
import Transform from '@/components/Home/Transform/Transform.vue';
import Everything from '@/components/Home/Everything/Everything';
import Powered from '@/components/Home/Powered/Powered.vue';
import Intelligent from '@/components/Home/Intelligent/Intelligent.vue';
import Trusted from '@/components/Home/Trusted/Trusted.vue';
import Security from '@/components/Home/Security/Security.vue';
import Build from '@/components/Home/Build/Build.vue';

// SEO
definePageMeta({
  title: 'Home',
  description:
    'Filuta provides AI-powered compliance solutions for government and education sectors. Automate manual processes and reduce risks with intelligent workflows.',
});

// Use SEO composable
import { setupPageSEO, pageSEOConfigs } from '~/composables/usePageSEO';
setupPageSEO(pageSEOConfigs.home);
</script>

<style scoped>
/* Custom animations */
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.delay-1000 {
  animation-delay: 1s;
}

/* Gradient text */
.text-gradient {
  background: linear-gradient(135deg, #57c1ca 0%, #9e92f5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
