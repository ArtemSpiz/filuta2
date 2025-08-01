<template>
  <div>
    <!-- Loading State -->
    <div v-if="pending" class="min-h-screen flex items-center justify-center">
      <LoadingState message="Loading article..." />
    </div>

    <!-- Article Content -->
    <article v-else-if="post" class="min-h-screen">
      <!-- Hero Section -->
      <Section padding="xl" text-wrap-class="" text-subtitle="">
        <BlogArticleHero :post="post" />
      </Section>

      <!-- Article Body Section -->
      <Section padding="lg" text-wrap-class="" text-subtitle="">
        <BlogArticleContent :post="post" :related-posts="relatedPosts" />
      </Section>

      <Section text-wrap-class="" text-subtitle="">
        <Related :related-posts="relatedPosts" />
      </Section>
    </article>

    <!-- Error State -->
    <div v-else class="min-h-screen flex items-center justify-center">
      <BlogErrorState />
    </div>
  </div>
</template>

<script setup lang="ts">
import Related from '@/components/Article/Related.vue';
import Section from '@/components/ui/Section/Section.vue';
import LoadingState from '@/components/Blog/shared/LoadingState.vue';
import BlogArticleHero from '@/components/Blog/article/BlogArticleHero.vue';
import BlogArticleContent from '@/components/Blog/article/BlogArticleContent.vue';
import BlogErrorState from '@/components/Blog/shared/BlogErrorState.vue';

const route = useRoute();
const slug = route.params.slug as string;

// SEO
definePageMeta({
  title: 'Blog Post',
  description: 'Read the latest insights on AI-powered compliance solutions from Filuta.',
});

// Use blog post composable
const { post, pending, error, relatedPosts } = useBlogPost(slug);

// Use SEO composable when post is available
watch(
  post,
  async newPost => {
    if (newPost) {
      const { setupPageSEO } = await import('../../composables/usePageSEO');
      const runtimeConfig = useRuntimeConfig();
      const baseUrl = runtimeConfig.public.siteUrl || 'http://localhost:3000';

      // Build image URL if featured_image exists
      let imageUrl: string | undefined = undefined;
      if (newPost.featured_image?.id) {
        const directusUrl = runtimeConfig.public.directusUrl;
        imageUrl = `${directusUrl}/assets/${newPost.featured_image.id}`;
      }

      setupPageSEO({
        title: newPost.meta_title || newPost.title,
        description: newPost.meta_description || newPost.subtitle,
        url: `/blog/${newPost.slug}`,
        type: 'article',
        image: imageUrl,
        publishedAt: newPost.published_at,
        author: 'Filuta',
        section: newPost.category?.title || newPost.category,
        keywords: newPost.seo_keywords,
        schemaType: 'BlogPosting',
        schemaName: newPost.title,
      });
    }
  },
  { immediate: true }
);

// Handle 404 - only throw if we're not in loading state and there's an error
watch([pending, error], ([isPending, hasError]) => {
  if (!isPending && hasError) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Article not found',
    });
  }
});
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
