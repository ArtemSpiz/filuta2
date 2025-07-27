<template>
  <BlogLayout>
    <!-- Loading State -->
    <div v-if="pending" class="min-h-screen flex items-center justify-center">
      <LoadingState message="Loading article..." />
    </div>

    <!-- Article Content -->
    <article v-else-if="post" class="min-h-screen">
      <!-- Hero Section -->
      <section class="relative bg-gradient-to-br from-dark-900 to-dark-950 py-20">
        <div class="absolute inset-0 bg-black/50"></div>
        <div class="relative container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <!-- Breadcrumb -->
            <Breadcrumb :current-page="post.title" />

            <!-- Article Header -->
            <ArticleHeader :post="post" />
          </div>
        </div>
      </section>

      <!-- Article Body -->
      <BlogContent>
        <div class="max-w-4xl mx-auto">
          <div class="grid lg:grid-cols-3 gap-12">
            <!-- Main Content -->
            <BlogMainContent :title="post.title" :featured-image="post.featured_image">
              <div v-html="post.content"></div>

              <template #footer>
                <div class="flex items-center justify-between">
                  <SocialSharing :post="post" />
                  <NuxtLink
                    to="/blog"
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
                    Back to Blog
                  </NuxtLink>
                </div>
              </template>
            </BlogMainContent>

            <!-- Sidebar -->
            <BlogSidebar>
              <RelatedPosts :posts="relatedPosts" />
            </BlogSidebar>
          </div>
        </div>
      </BlogContent>
    </article>

    <!-- Error State -->
    <BlogErrorState v-else />
  </BlogLayout>
</template>

<script setup>
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

/* Prose styles for article content */
:deep(.prose) {
  color: #ffffff;
}

:deep(.prose h1),
:deep(.prose h2),
:deep(.prose h3),
:deep(.prose h4),
:deep(.prose h5),
:deep(.prose h6) {
  color: #ffffff;
  font-weight: 600;
}

:deep(.prose p) {
  color: #d1d5db;
  margin-bottom: 1.5rem;
}

:deep(.prose a) {
  color: #57c1ca;
  text-decoration: none;
}

:deep(.prose a:hover) {
  color: #57c1ca;
  text-decoration: underline;
}

:deep(.prose ul),
:deep(.prose ol) {
  color: #d1d5db;
}

:deep(.prose li) {
  color: #d1d5db;
}

:deep(.prose blockquote) {
  border-left-color: #57c1ca;
  color: #9ca3af;
}

:deep(.prose code) {
  background-color: #374151;
  color: #f3f4f6;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
}

:deep(.prose pre) {
  background-color: #1f2937;
  color: #f3f4f6;
  border-radius: 0.5rem;
  padding: 1rem;
  overflow-x: auto;
}
</style>
