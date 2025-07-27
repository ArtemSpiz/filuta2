<template>
  <div class="lg:col-span-2">
    <!-- Featured Image -->
    <div v-if="featuredImage" class="mb-8">
      <img :src="featuredImage" :alt="title" class="w-full h-64 md:h-96 object-cover rounded-2xl" />
    </div>

    <!-- Article Content -->
    <div class="prose prose-invert prose-lg max-w-none">
      <slot />
    </div>

    <!-- Article Footer -->
    <div v-if="$slots.footer" class="mt-12 pt-8 border-t border-dark-700">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
  featuredImage: {
    type: String,
    default: '',
  },
});
</script>

<style scoped>
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
