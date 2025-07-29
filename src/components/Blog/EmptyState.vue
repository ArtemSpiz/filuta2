<template>
  <div class="text-center py-20">
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
    <h3 class="text-xl font-semibold text-white mb-2">{{ title || 'No posts found' }}</h3>
    <p class="text-gray-400">
      {{ message || 'Try selecting a different category or check back later.' }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'No posts found',
  },
  message: {
    type: String,
    default: 'Try selecting a different category or check back later.',
  },
});
</script>
