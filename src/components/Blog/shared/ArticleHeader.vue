<template>
  <div class="mb-8">
    <div class="flex items-center gap-4 mb-6">
      <span class="px-4 py-2 bg-brand-primary/20 text-brand-primary text-sm rounded-full">
        {{ post.category?.title }}
      </span>
      <span class="text-gray-400 text-sm">
        {{ formatDate(post.published_at) }}
      </span>
    </div>
    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
      {{ post.title }}
    </h1>
    <p class="text-xl text-gray-300 mb-8 max-w-3xl">
      {{ post.subtitle }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { BlogPost } from '@/types/blog';
import { formatDate } from '@/utils/blog';

interface Props {
  post: BlogPost;
}

defineProps<Props>();
</script>
