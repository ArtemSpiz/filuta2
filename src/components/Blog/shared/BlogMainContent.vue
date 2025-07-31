<template>
  <div class="lg:col-span-2">
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
import ArticleContent from '@/components/Blog/shared/ArticleContent.vue';

interface Props {
  title?: string;
}

defineProps<Props>();
</script>
