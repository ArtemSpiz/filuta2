<script setup>
import blogImage1 from '@/assets/img/FeaturedCard1.png';
import blogImage2 from '@/assets/img/FeaturedCard2.png';
import blogImage3 from '@/assets/img/FeaturedCard3.png';
import ButtonArrow from '@/assets/svg/ButtonArrow.vue';

const BlogCards = [
  {
    slug: 'WhyManualComplianceNoLongerWorks',
    category: 'Government & Education',
    title: 'Why Manual Compliance No Longer Works',
    subtitle:
      'Manual processes are slow, error-prone, and risky. Discover the hidden costs of outdated workflows — and how automation changes the game.',
    image: blogImage1,
    date: 'May 05, 2025',
  },
  {
    slug: 'TheFutureofVendorComplianceinK–12Education',
    category: 'Government & Education',
    title: 'The Future of Vendor Compliance in K–12 Education',
    subtitle:
      'Manual processes are slow, error-prone, and risky. Discover the hidden costs of outdated workflows — and how automation changes the game.',
    image: blogImage2,
    date: 'May 05, 2025',
  },
  {
    slug: '5SignsYourDistrictNeedsaComplianceUpgrade',
    category: 'Research',
    title: '5 Signs Your District Needs a Compliance Upgrade',
    subtitle: 'A quick look back at our time in San Francisco during GDC and PGC.',
    image: blogImage3,
    date: 'May 05, 2025',
  },
];
</script>

<template>
  <div class="container gap-[48px] flex-col">
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
        v-for="(card, i) in BlogCards"
        :key="i"
        :to="`/blog/${card.slug}`"
        class="p-[20px] cursor-pointer border border-[#2B2A30] flex-1 flex flex-col gap-[16px] rounded-[20px] bg-[#141219] shadow-[0_-17px_44px_0_rgba(0,0,0,0.45)] max-md:p-[16px] max-sm:p-[12px]"
      >
        <div class="w-full h-auto">
          <img :src="card.image" alt="" />
        </div>
        <div class="flex flex-col gap-[8px]">
          <div class="flex items-center justify-between">
            <div class="text-[#57C1CA] font-ibm text-[14px] leading-[130%] tracking-[-0.28px]">
              {{ card.category }}
            </div>
            <div class="text-[#7C7C7C] text-[14px] font-ibm leading-[130%] tracking-[-0.28px]">
              {{ card.date }}
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

    <NuxtLink to="/blog" class="hiddenitems-center justify-centermax-md:flex">
      <button
        class="h-[48px] px-[20px] gap-[8px]items-center justify-centerflex rounded-full border border-white bg-[rgba(255,255,255,0.02)] text-white text-[16px] font-ibm"
      >
        All articles <ButtonArrow />
      </button>
    </NuxtLink>
  </div>
</template>

<style scoped></style>
