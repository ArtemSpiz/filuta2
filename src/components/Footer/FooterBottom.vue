<template>
  <div
    class="flex justify-between items-center max-sm:grid max-sm:grid-cols-2auto max-md:gap-[24px]"
  >
    <div
      v-for="(part, index) in parts"
      :key="index"
      class="text-gray-500 font-ibm text-[14px] leading-[130%]"
    >
      {{ part.trim() }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  copyright: string;
}>();

const parts = computed(() => props.copyright.split('|'));
</script>
