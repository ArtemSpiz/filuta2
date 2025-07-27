<template>
  <div>
    <!-- Loading State -->
    <div v-if="pending" class="min-h-screen flex items-center justify-center">
      <LoadingState message="Loading article..." />
    </div>

    <!-- Article Content -->
    <article v-else-if="post" class="min-h-screen">
      <!-- Hero Section -->
      <Section padding="xl">
        <BlogArticleHero :post="post" />
      </Section>

      <!-- Article Body Section -->
      <Section padding="lg">
        <BlogArticleBody :post="post" :related-posts="relatedPosts" />
      </Section>
    </article>

    <!-- Error State -->
    <BlogErrorState v-else />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug;

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
      const { setupPageSEO } = await import('~/composables/usePageSEO');

      setupPageSEO({
        title: newPost.meta_title || newPost.title,
        description: newPost.meta_description || newPost.subtitle,
        url: `/blog/${newPost.slug}`,
        type: 'article',
        image: newPost.featured_image,
        publishedAt: newPost.published_at,
        author: 'Filuta',
        section: newPost.category,
        keywords: newPost.seo_keywords,
        schemaType: 'BlogPosting',
        schemaName: newPost.title,
      });
    }
  },
  { immediate: true }
);

// Handle 404
if (error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Article not found',
  });
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
