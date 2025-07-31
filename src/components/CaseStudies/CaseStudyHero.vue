<template>
  <div class="relative bg-gradient-to-br from-dark-900 to-dark-950 py-20">
    <div class="absolute inset-0 bg-black/50"></div>
    <div class="relative container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <!-- Breadcrumb -->
        <Breadcrumb :current-page="caseStudy.title" />

        <!-- Case Study Header -->
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
            {{ caseStudy.title }}
          </h1>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            {{ caseStudy.subtitle }}
          </p>
          <div class="mt-8 text-gray-400">
            <span>{{ formatDate(caseStudy.published_at) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from '@/components/Blog/shared/Breadcrumb.vue';

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  content: string;
  featured_image: any;
  published_at: string;
  meta_title?: string;
  meta_description?: string;
  seo_keywords?: string[];
}

interface Props {
  caseStudy: CaseStudy;
}

defineProps<Props>();

const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
</script>
