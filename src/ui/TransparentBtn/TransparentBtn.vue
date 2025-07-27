<script setup>
import buttonArrow from '@/assets/svg/ButtonArrow.vue';
defineProps({
  class: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: ' Learn more ',
  },
});
</script>
<template>
  <button
    :class="[
      'flex px-6 h-12 justify-center items-center gap-2 rounded-full border border-white backdrop-blur-sm text-white font-ibm text-base font-normal cursor-pointer',
      $props.class,
    ]"
  >
    {{ text }}<buttonArrow />
  </button>
</template>
<style scoped></style>
