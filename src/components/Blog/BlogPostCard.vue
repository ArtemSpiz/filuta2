<template>
  <article
    class="bg-dark-800 rounded-xl overflow-hidden border border-dark-700 hover:border-brand-primary/50 transition-all duration-300 hover:shadow-glow"
  >
    <div class="aspect-video overflow-hidden">
      <img
        :src="post.featured_image"
        :alt="post.title"
        class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div class="p-6">
      <div class="flex items-center justify-between mb-4">
        <span class="px-3 py-1 bg-brand-primary/20 text-brand-primary text-sm rounded-full">
          {{ post.category }}
        </span>
        <span class="text-gray-400 text-sm">
          {{ formatDate(post.published_at) }}
        </span>
      </div>
      <h3 class="text-xl font-bold text-white mb-3 line-clamp-2">
        {{ post.title }}
      </h3>
      <p class="text-gray-300 mb-4 line-clamp-3">
        {{ post.subtitle }}
      </p>
      <NuxtLink
        :to="`/blog/${post.slug}`"
        class="inline-flex items-center text-brand-primary hover:text-brand-primary/80 transition-colors duration-200"
      >
        Read More
        <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </NuxtLink>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const formatDate = dateString => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
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
