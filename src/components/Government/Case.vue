<script setup lang="ts">
import Carousel from '@/components/ui/Carousel/Carousel.vue';
import TransparentBtn from '@/components/ui/TransparentBtn/TransparentBtn.vue';
import OptimizedImage from '@/components/ui/OptimizedImage.vue';

// Fetch case studies from Directus
const { data: caseStudies } = useFetch('/api/case-studies');

// Transform case studies for the carousel
const transformedCaseStudies = computed(() => {
  if (!caseStudies.value) return [];

  return caseStudies.value.map((study: any) => ({
    id: study.id,
    title: study.title,
    subtitle: study.subtitle,
    slug: study.slug,
    featured_image: study.featured_image,
  }));
});
</script>

<template>
  <Carousel
    title="Case Studies"
    subtitle="Discover how Filuta AI helps districts automate compliance, reduce risk, and refocus teams on what matters most."
    :items="transformedCaseStudies"
    :slides-per-view="1"
    :space-between="24"
    :breakpoints="{
      320: { slidesPerView: 1, spaceBetween: 16 },
      768: { slidesPerView: 1, spaceBetween: 20 },
      1024: { slidesPerView: 1, spaceBetween: 24 },
    }"
  >
    <template #default="{ item: study }">
      <div
        class="relative overflow-hidden flex items-end w-full h-[480px] rounded-[24px] border border-border-dark shadow-[0px_-17px_44px_0px_rgba(0,0,0,0.45)] max-sm:h-[537px]"
      >
        <div class="w-full z-0 absolute top-0 right-0 object-cover">
          <OptimizedImage
            :image-id="study.featured_image?.id"
            :alt="study.title"
            :width="1200"
            :height="600"
            class="w-full h-full object-cover"
            fallback-src="/img/caseBg1.png"
          />
        </div>

        <div
          class="p-10 w-full flex items-end gap-[72px] justify-between z-10 max-lg:w-full max-lg:p-[24px] max-lg:gap-[24px] max-md:items-start max-md:flex-col relative"
        >
          <div
            class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-dark-800/80"
          />
          <div class="flex flex-col gap-[8px] w-1/2 flex-1 md:w-full relative z-10">
            <div class="text-[24px] text-white font-ibm leading-[130%]">
              {{ study.title }}
            </div>
            <div class="text-[16px] text-[rgba(255,255,255,0.60)] font-ibm leading-[150%]">
              {{ study.subtitle }}
            </div>
          </div>
          <NuxtLink :to="`/case-studies/${study.slug}`">
            <TransparentBtn text="Read more" />
          </NuxtLink>
        </div>
      </div>
    </template>
  </Carousel>
</template>

<style scoped>
.no-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
