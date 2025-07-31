<template>
  <div class="flex justify-between items-start w-full gap-12 max-sm:flex-col max-sm:gap-[32px]">
    <div
      v-for="(link, index) in links"
      :key="index"
      class="flex flex-col items-start gap-6 max-md:gap-[16px]"
    >
      <div class="text-gray-500 font-mono text-[16px] font-light uppercase">
        {{ link.title }}
      </div>
      <div class="flex flex-col items-start gap-3">
        <NuxtLink
          v-for="(item, subIndex) in link.subtitles"
          :key="subIndex"
          :to="item.href"
          class="relative text-gray-900 font-ibm text-[16px] leading-[130%] cursor-pointer transition-colors duration-300 before:content-[''] before:absolute before:left-0 before:-bottom-[2px] before:w-0 before:h-[1px] before:bg-brand-primary before:transition-all before:duration-300 hover:before:w-full"
        >
          {{ item.subtitle }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface FooterLink {
  title: string;
  subtitles: FooterSubtitle[];
}

interface FooterSubtitle {
  subtitle: string;
  href: string;
}

defineProps<{
  links: FooterLink[];
}>();
</script>
