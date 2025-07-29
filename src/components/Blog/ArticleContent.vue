<template>
  <div class="prose prose-invert prose-lg max-w-none">
    <slot />
  </div>
</template>

<script setup lang="ts">
// This component handles all article content styling
</script>

<style scoped>
/* Article content styles using Tailwind config colors */
:deep(.prose) {
  @apply text-white;
}

:deep(.prose h1),
:deep(.prose h2),
:deep(.prose h3),
:deep(.prose h4),
:deep(.prose h5),
:deep(.prose h6) {
  @apply text-white font-semibold;
}

:deep(.prose p) {
  @apply text-gray-300 mb-6;
}

:deep(.prose a) {
  @apply text-brand-primary no-underline;
}

:deep(.prose a:hover) {
  @apply text-brand-primary underline;
}

:deep(.prose ul),
:deep(.prose ol) {
  @apply text-gray-300;
}

:deep(.prose li) {
  @apply text-gray-300;
}

:deep(.prose blockquote) {
  @apply border-l-brand-primary text-gray-400;
}

:deep(.prose code) {
  @apply bg-dark-700 text-gray-100 px-2 py-1 rounded-md;
}

:deep(.prose pre) {
  @apply bg-dark-800 text-gray-100 rounded-lg p-4 overflow-x-auto;
}

:deep(.prose strong) {
  @apply text-white font-semibold;
}

:deep(.prose em) {
  @apply text-gray-300 italic;
}

:deep(.prose hr) {
  @apply border-dark-700;
}

:deep(.prose table) {
  @apply text-gray-300;
}

:deep(.prose th) {
  @apply text-white font-semibold;
}

:deep(.prose td) {
  @apply text-gray-300;
}
</style>
