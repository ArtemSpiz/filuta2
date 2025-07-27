<template>
  <div class="relative bg-gradient-to-br from-dark-900 to-dark-950 py-20">
    <div class="absolute inset-0 bg-black/50"></div>
    <div class="relative container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <!-- Breadcrumb -->
        <Breadcrumb :current-page="post.title" />

        <!-- Article Header -->
        <ArticleHeader :post="post" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  content: string;
  featured_image: string;
  category: string;
  published_at: string;
  meta_title?: string;
  meta_description?: string;
  seo_keywords?: string[];
}

defineProps<{
  post: BlogPost;
}>();
</script>
