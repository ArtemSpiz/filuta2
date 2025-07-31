<template>
  <div v-if="hasMore" class="justify-center items-center w-full flex">
    <button
      class="h-[48px] px-[24px] justify-center items-center flex rounded-full border border-white bg-[rgba(255,255,255,0.02)] text-white text-[16px] font-ibm hover:bg-[rgba(255,255,255,0.05)] transition-colors duration-200"
      :disabled="loading"
      @click="$emit('load-more')"
    >
      <span v-if="loading">Loading...</span>
      <span v-else>{{ buttonText }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  hasMore: boolean;
  loading?: boolean;
  buttonText?: string;
}

interface Emits {
  (e: 'load-more'): void;
}

withDefaults(defineProps<Props>(), {
  loading: false,
  buttonText: 'Load more',
});

defineEmits<Emits>();
</script>
