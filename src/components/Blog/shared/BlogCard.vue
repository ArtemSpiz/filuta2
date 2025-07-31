<template>
  <NuxtLink :to="`/blog/${post.slug}`">
    <article
      :class="[
        'h-full bg-dark-800 rounded-xl overflow-hidden border border-dark-700 hover:border-brand-primary/50 transition-all duration-300 hover:shadow-glow',
        variant === 'featured' ? 'p-6' : 'p-4',
      ]"
    >
      <!-- Image Section -->
      <div
        :class="[
          'overflow-hidden rounded-lg',
          variant === 'featured' ? 'aspect-video' : 'aspect-video',
        ]"
      >
        <OptimizedImage
          :image-id="getImageId(post)"
          :alt="getImageAlt(post)"
          :width="variant === 'featured' ? 800 : 600"
          :height="variant === 'featured' ? 600 : 400"
          class="w-full h-full object-cover rounded-lg"
        />
      </div>

      <!-- Content Section -->
      <div class="mt-4 text-left">
        <!-- Category and Date -->
        <div class="flex items-center justify-between mb-4">
          <span class="text-brand-primary text-xs rounded-full">
            {{ post.category }}
          </span>
          <span class="text-gray-400 text-xs text-nowrap opacity-80">
            {{ formatDate(post.published_at) }}
          </span>
        </div>

        <!-- Title -->
        <h3
          :class="[
            'font-bold text-white mb-3 line-clamp-2',
            variant === 'featured' ? 'text-3xl md:text-4xl' : 'text-xl',
          ]"
        >
          {{ post.title }}
        </h3>

        <!-- Subtitle -->
        <p :class="['text-gray-300 mb-4 line-clamp-3', variant === 'featured' ? 'text-lg' : '']">
          {{ post.subtitle }}
        </p>

        <!-- CTA Button for Featured -->
        <div v-if="variant === 'featured'" class="mt-6">
          <TransparentBtn class="w-fit" text="Read" />
        </div>
      </div>
    </article>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { BlogPost } from '@/types/blog';
import { formatDate, getImageId, getImageAlt } from '@/utils/blog';
import OptimizedImage from '@/components/ui/OptimizedImage.vue';
import TransparentBtn from '@/components/ui/TransparentBtn/TransparentBtn.vue';

interface Props {
  post: BlogPost;
  variant?: 'default' | 'featured';
}

withDefaults(defineProps<Props>(), {
  variant: 'default',
});
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
</style>
