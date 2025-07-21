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
      'flex h-12 px-6 justify-center items-center gap-2 rounded-full bg-[#6d68ff] text-white font-ibm text-base font-normal cursor-pointer',
      $props.class,
    ]"
  >
    Schedule a demo <buttonArrow />
  </button>
</template>
<style></style>
