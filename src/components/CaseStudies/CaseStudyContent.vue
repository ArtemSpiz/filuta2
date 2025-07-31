<template>
  <div class="max-w-full mx-auto">
    <div class="flex gap-12">
      <!-- Main Content -->
      <BlogMainContent :title="caseStudy.title">
        <!-- Note: Content should be sanitized on the server side before being stored -->
        <div v-html="caseStudy.content" />

        <!-- Case Study Footer -->
        <template #footer>
          <div class="flex items-center justify-center pb-5">
            <SocialSharing :post="caseStudy" />
            <NuxtLink
              to="/government-education"
              class="inline-flex items-center text-brand-primary hover:text-brand-primary/80 transition-colors duration-200"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              Back to Case Studies
            </NuxtLink>
          </div>
        </template>
      </BlogMainContent>
    </div>
  </div>
</template>

<script setup lang="ts">
import BlogMainContent from '@/components/Blog/shared/BlogMainContent.vue';
import SocialSharing from '@/components/Blog/shared/SocialSharing.vue';

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
</script>
