<template>
  <div
    :class="[
      'grid gap-6',
      layout === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1',
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  layout?: 'grid' | 'list';
}

withDefaults(defineProps<Props>(), {
  layout: 'grid',
});
</script>
