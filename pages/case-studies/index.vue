<template>
  <div>
    <!-- Loading State -->
    <div v-if="pending" class="min-h-screen flex items-center justify-center">
      <LoadingState message="Loading case studies..." />
    </div>

    <!-- Case Studies Content -->
    <div v-else-if="caseStudies && caseStudies.length > 0" class="min-h-screen">
      <!-- Hero Section -->
      <Section padding="xl" text-wrap-class="" text-subtitle="">
        <div class="text-center">
          <h1 class="text-4xl font-bold text-white mb-4">Case Studies</h1>
          <p class="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore real-world case studies showcasing how Filuta AI transforms compliance processes
            in government and education sectors.
          </p>
        </div>
      </Section>

      <!-- Case Studies Grid -->
      <Section padding="lg" text-wrap-class="" text-subtitle="">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BlogCard
            v-for="caseStudy in caseStudies"
            :key="caseStudy.id"
            :post="caseStudy"
            type="case-study"
            variant="default"
          />
        </div>
      </Section>
    </div>

    <!-- Empty State -->
    <div v-else class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <h2 class="text-2xl font-bold text-white mb-4">No Case Studies Found</h2>
        <p class="text-gray-300">Check back later for our latest case studies.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Section from '@/components/ui/Section/Section.vue';
import LoadingState from '@/components/Blog/shared/LoadingState.vue';
import BlogCard from '@/components/Blog/shared/BlogCard.vue';

// SEO
definePageMeta({
  title: 'Case Studies',
  description:
    'Explore real-world case studies showcasing how Filuta AI transforms compliance processes in government and education sectors.',
});

// Use SEO composable
import { setupPageSEO, pageSEOConfigs } from '~/composables/usePageSEO';
setupPageSEO(pageSEOConfigs.caseStudies);

// Fetch case studies from Directus
const { data: caseStudies, pending } = useFetch('/api/case-studies');
</script>
