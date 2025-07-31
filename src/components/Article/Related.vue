<script setup>
import ButtonArrow from '@/assets/svg/ButtonArrow.vue';
import OptimizedImage from '~/src/components/ui/OptimizedImage.vue';

// Fetch related articles from Directus
const { data: relatedArticles } = useFetch('/api/blog', {
  query: {
    limit: 3,
    category: 'all',
  },
});

const formatDate = dateString => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
};

// Check if featured_image is a Directus asset object
const isDirectusAsset = image => {
  return image && typeof image === 'object' && image.id;
};
</script>

<template>
  <div class="container flex gap-[48px] flex-col py-[100px] max-xl:py-20 max-lg:py-16 max-md:py-12">
    <div class="flex justify-between items-center max-md:center">
      <div class="Title">Related articles</div>
      <NuxtLink to="/blog" class="max-md:hidden">
        <button
          class="h-[48px] px-[20px] gap-[8px]items-center justify-centerflex rounded-full border border-white bg-[rgba(255,255,255,0.02)] text-white text-[16px] font-ibm"
        >
          All articles <ArrowIcon />
        </button>
      </NuxtLink>
    </div>

    <div class="grid grid-cols-3 gap-[24px] max-xl:grid-cols-2 max-md:flex max-md:flex-col">
      <NuxtLink
        v-for="(card, i) in relatedArticles?.posts || []"
        :key="i"
        :to="`/blog/${card.slug}`"
        class="p-[20px] cursor-pointer border border-[#2B2A30] flex-1 flex flex-col gap-[16px] rounded-[20px] bg-[#141219] shadow-[0_-17px_44px_0_rgba(0,0,0,0.45)] max-md:p-[16px] max-sm:p-[12px]"
      >
        <div class="w-full h-auto">
          <OptimizedImage
            :image-id="
              card.featured_image && isDirectusAsset(card.featured_image)
                ? card.featured_image.id
                : undefined
            "
            :alt="card.title"
            :width="400"
            :height="300"
            class="w-full h-auto object-cover"
          />
        </div>
        <div class="flex flex-col gap-[8px]">
          <div class="flex items-center justify-between">
            <div class="text-[#57C1CA] font-ibm text-[14px] leading-[130%] tracking-[-0.28px]">
              {{ card.category }}
            </div>
            <div class="text-[#7C7C7C] text-[14px] font-ibm leading-[130%] tracking-[-0.28px]">
              {{ formatDate(card.published_at) }}
            </div>
          </div>
          <div class="text-white text-[24px] font-ibm leading-[130%]">
            {{ card.title }}
          </div>
        </div>

        <div class="text-[rgba(255,255,255,0.60)] text-[16px] font-ibm leading-[150%]">
          {{ card.subtitle }}
        </div>
      </NuxtLink>
    </div>

    <NuxtLink to="/blog" class="hidden items-center justify-center max-md:flex">
      <button
        class="h-[48px] px-[20px] gap-[8px]items-center justify-center flex rounded-full border border-white bg-[rgba(255,255,255,0.02)] text-white text-[16px] font-ibm"
      >
        All articles <ButtonArrow />
      </button>
    </NuxtLink>
  </div>
</template>

<style scoped></style>
