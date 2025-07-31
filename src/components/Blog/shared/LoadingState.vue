<template>
  <div class="text-center py-20">
    <div
      class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary"
    ></div>
    <p class="mt-4 text-gray-400">{{ message || 'Loading posts...' }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  message?: string;
}

withDefaults(defineProps<Props>(), {
  message: 'Loading posts...',
});
</script>
