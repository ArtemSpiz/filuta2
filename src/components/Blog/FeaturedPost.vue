<template>
  <div class="mb-16">
    <div class="bg-dark-800 rounded-2xl p-8 border border-dark-700">
      <div class="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <div class="flex items-center gap-4 mb-4">
            <span class="px-3 py-1 bg-brand-primary/20 text-brand-primary text-sm rounded-full">
              {{ post.category }}
            </span>
            <span class="text-gray-400 text-sm">
              {{ formatDate(post.published_at) }}
            </span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            {{ post.title }}
          </h2>
          <p class="text-gray-300 text-lg mb-6">
            {{ post.subtitle }}
          </p>
          <NuxtLink
            :to="`/blog/${post.slug}`"
            class="inline-flex items-center px-6 py-3 bg-brand-primary text-white rounded-lg hover:bg-brand-primary/90 transition-colors duration-200"
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
        <div class="relative">
          <img
            :src="post.featured_image"
            :alt="post.title"
            class="w-full h-64 object-cover rounded-lg"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
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
