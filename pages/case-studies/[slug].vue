<template>
  <div>
    <!-- Loading State -->
    <div v-if="pending" class="min-h-screen flex items-center justify-center">
      <LoadingState message="Loading case study..." />
    </div>

    <!-- Case Study Content -->
    <article v-else-if="caseStudy" class="min-h-screen">
      <!-- Hero Section -->
      <Section padding="xl" text-wrap-class="" text-subtitle="">
        <CaseStudyHero :case-study="caseStudy" />
      </Section>

      <!-- Case Study Body Section -->
      <Section padding="lg" text-wrap-class="" text-subtitle="">
        <CaseStudyContent :case-study="caseStudy" />
      </Section>

      <!-- Related Case Studies Section -->
      <Section text-wrap-class="" text-subtitle="">
        <Related :related-posts="relatedCaseStudies" type="case-study" />
      </Section>
    </article>

    <!-- Error State -->
    <BlogErrorState v-else />
  </div>
</template>

<script setup lang="ts">
import Section from '@/components/ui/Section/Section.vue';
import LoadingState from '@/components/Blog/shared/LoadingState.vue';
import BlogErrorState from '@/components/Blog/shared/BlogErrorState.vue';
import CaseStudyHero from '@/components/CaseStudies/CaseStudyHero.vue';
import CaseStudyContent from '@/components/CaseStudies/CaseStudyContent.vue';
import Related from '@/components/Article/Related.vue';

const route = useRoute();
const slug = route.params.slug as string;

// SEO
definePageMeta({
  title: 'Case Study',
  description: 'Read our detailed case studies on AI-powered compliance solutions.',
});

// Use case study composable
const { caseStudy, pending, error } = useCaseStudy(slug);

// Extract related case studies from the case study data
const relatedCaseStudies = computed(() => {
  return caseStudy.value?.related || [];
});

// Use SEO composable when case study is available
watch(
  caseStudy,
  async newCaseStudy => {
    if (newCaseStudy) {
      const { setupPageSEO } = await import('../../composables/usePageSEO');

      setupPageSEO({
        title: newCaseStudy.meta_title || newCaseStudy.title,
        description: newCaseStudy.meta_description || newCaseStudy.subtitle,
        url: `/case-studies/${newCaseStudy.slug}`,
        type: 'article',
        image: newCaseStudy.featured_image,
        publishedAt: newCaseStudy.published_at,
        author: 'Filuta',
        section: 'Case Studies',
        keywords: newCaseStudy.seo_keywords,
        schemaType: 'BlogPosting',
        schemaName: newCaseStudy.title,
      });
    }
  },
  { immediate: true }
);

// Handle 404
if (error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Case study not found',
  });
}
</script>
