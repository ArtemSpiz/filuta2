<script setup>
defineProps({
  customClass: {
    type: String,
    default: '',
  },
  classTitle: {
    type: String,
    default: '',
  },
  classSubtitle: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  subtitle: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <div
    class="container gap-14 items-center flex py-[100px] max-xl:py-20 max-lg:py-16 max-md:py-12"
    :class="customClass"
  >
    <div class="flex flex-col gap-4">
      <div class="Title" :class="classTitle">{{ title }}</div>
      <div class="Subtitle" :class="classSubtitle">{{ subtitle }}</div>
    </div>
    <slot></slot>
  </div>
</template>

<style scoped></style>
