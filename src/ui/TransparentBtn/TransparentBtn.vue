<script setup>
import buttonArrow from "../../assets/svg/ButtonArrow.vue";
defineProps({
  class: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <button
    :class="[
      'flex px-6 py-3.5 justify-center items-center gap-2 rounded-full border border-white bg-white/5 backdrop-blur-sm text-white font-ibm text-base font-normal cursor-pointer',
      $props.class,
    ]"
  >
    Learn more <buttonArrow />
  </button>
</template>
<style></style>
