<template>
  <nav class="mb-8">
    <ol class="flex items-center space-x-2 text-sm text-gray-400">
      <li>
        <NuxtLink to="/" class="hover:text-white transition-colors duration-200"> Home </NuxtLink>
      </li>
      <li>
        <span class="mx-2">/</span>
      </li>
      <li>
        <NuxtLink to="/blog" class="hover:text-white transition-colors duration-200">
          Blog
        </NuxtLink>
      </li>
      <li>
        <span class="mx-2">/</span>
      </li>
      <li class="text-gray-300">{{ currentPage }}</li>
    </ol>
  </nav>
</template>

<script setup>
const props = defineProps({
  currentPage: {
    type: String,
    required: true,
  },
});
</script>
