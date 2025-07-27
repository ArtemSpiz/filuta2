<template>
  <div class="flex justify-between items-center max-md:flex-col max-md:gap-[24px]">
    <div class="w-[201px] h-auto max-xl:w-[150px] max-md:w-[100px]">
      <img :src="logo" alt="footerLogo" class="object-contain" />
    </div>
    <div class="text-gray-500 font-['IBM Plex Sans'] text-[14px] leading-[130%]">
      {{ copyright }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  logo: string;
  copyright: string;
}>();
</script>
