<template>
  <div class="lg:col-span-2">
    <!-- Featured Image -->
    <div v-if="featuredImage" class="mb-8">
      <img :src="featuredImage" :alt="title" class="w-full h-64 md:h-96 object-cover rounded-2xl" />
    </div>

    <!-- Article Content -->
    <ArticleContent>
      <slot />
    </ArticleContent>

    <!-- Article Footer -->
    <div v-if="$slots.footer" class="mt-12 pt-8 border-t border-dark-700">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
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
