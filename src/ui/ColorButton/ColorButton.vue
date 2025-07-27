<script setup>
import buttonArrow from '../../assets/svg/ButtonArrow.vue';
defineProps({
  class: {
    type: String,
    default: '',
  },

  text: {
    type: String,
    default: 'Schedule a demo',
  },
});
</script>
<template>
  <button
    :class="[
      'flex h-12 px-6 justify-center items-center gap-2 rounded-full bg-[#6d68ff] text-white font-ibm text-base font-normal cursor-pointer',
      $props.class,
    ]"
  >
    {{ text }} <buttonArrow />
  </button>
</template>
<style></style>
