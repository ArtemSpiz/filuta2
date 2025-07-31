<template>
  <BlogIndexContent />
</template>

<script setup lang="ts">
// SEO
definePageMeta({
  title: 'Blog',
  description:
    'Discover the latest trends in AI-powered compliance solutions, government regulations, and educational technology from our expert team.',
});

// Use SEO composable
import { setupPageSEO, pageSEOConfigs } from '~/composables/usePageSEO';
setupPageSEO(pageSEOConfigs.blog);

// Import components
import BlogIndexContent from '@/components/Blog/index/BlogIndexContent.vue';
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.categories {
  scrollbar-width: none;
}
</style>
