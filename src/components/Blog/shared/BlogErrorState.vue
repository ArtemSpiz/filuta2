<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <div class="text-gray-400 mb-4">
        <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          ></path>
        </svg>
      </div>
      <h3 class="text-xl font-semibold text-white mb-2">{{ title }}</h3>
      <p class="text-gray-400 mb-6">{{ message }}</p>
      <NuxtLink
        to="/blog"
        class="inline-flex items-center px-6 py-3 bg-brand-primary text-white rounded-lg hover:bg-brand-primary/90 transition-colors duration-200"
      >
        {{ ctaText }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string;
  message?: string;
  ctaText?: string;
}

withDefaults(defineProps<Props>(), {
  title: 'Article not found',
  message: "The article you're looking for doesn't exist or has been removed.",
  ctaText: 'Back to Blog',
});
</script>
