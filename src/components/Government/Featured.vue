<script setup>
import FeaturedCard1 from '@/assets/img/FeaturedCard1.png';
import FeaturedCard2 from '@/assets/img/FeaturedCard2.png';
import FeaturedCard3 from '@/assets/img/FeaturedCard3.png';
import lightLeft from '@/assets/img/everythingLightLeft.png';
import lightRight from '@/assets/img/everythingLightRight.png';

const FeaturedCards = [
  {
    image: FeaturedCard1,
    type: 'Government & Education',
    date: 'May 05, 2025',
    title: 'Why Manual Compliance No Longer Works',
    subtitle:
      'Manual processes are slow, error-prone, and risky. Discover the hidden costs of outdated workflows — and how automation changes the game.',
  },
  {
    image: FeaturedCard2,
    type: 'Government & Education',
    date: 'May 05, 2025',
    title: 'The Future of Vendor Compliance in K–12 Education',
    subtitle:
      'Manual processes are slow, error-prone, and risky. Discover the hidden costs of outdated workflows — and how automation changes the game.',
  },
  {
    image: FeaturedCard3,
    type: 'Government & Education',
    date: 'May 05, 2025',
    title: '5 Signs Your District Needs a Compliance Upgrade',
    subtitle:
      'Manual processes are slow, error-prone, and risky. Discover the hidden costs of outdated workflows — and how automation changes the game.',
  },
];

import { ref, onMounted, onUnmounted } from 'vue';

const windowWidth = ref(0);

function updateWidth() {
  if (process.client) {
    windowWidth.value = window.innerWidth;
  }
}

onMounted(() => {
  if (process.client) {
    windowWidth.value = window.innerWidth;
    window.addEventListener('resize', updateWidth);
  }
});

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('resize', updateWidth);
  }
});
</script>

<template>
  <div class="container gap-[48px] flex-col relative">
    <div
      class="absolute top-[-80px] left-0 w-[996px] h-[764px] max-md:w-[370px] max-md:h-[285px] max-md:top-[-40px]"
    >
      <img :src="lightLeft" alt="lightLeft" />
    </div>
    <div
      class="absolute h-[777px] top-[-80px] right-0 max-md:w-[370px] max-md:h-[285px] max-md:top-[-40px]"
    >
      <img :src="lightRight" alt="lightRight" />
    </div>
    <div class="flex flex-col gap-[16px] items-center">
      <div class="Title text-center">Featured Articles</div>
      <div class="Subtitle text-center">
        Insights on modern compliance, automation, and operational excellence in school districts.
      </div>
    </div>
    <div
      class="flex self-stretch gap-[24px] z-10 max-xl:grid max-xl:grid-cols-ddd max-md:flex max-md:flex-col max-md:ml-auto max-md:mr-auto"
    >
      <div
        v-for="(card, index) in FeaturedCards"
        :key="index"
        class="flex-1 p-[20px] flex flex-col gap-[16px] rounded-[20px] border border-[#2B2A30] bg-[#141219] shadow-[0px_-17px_44px_0px_rgba(0,0,0,0.45)] max-md:p-[12px] max-md:max-w-[400px]"
        :class="
          index === 2
            ? windowWidth < 768
              ? 'right-[0%]'
              : windowWidth < 1285
                ? 'right-[-50%] relative'
                : ''
            : ''
        "
      >
        <div class="w-full">
          <img :src="card.image" alt="img" />
        </div>
        <div class="flex flex-col gap-2 items-start">
          <div class="flex justify-between items-center w-full">
            <div class="text-[#57C1CA] text-[14px] font-ibm leading-[130%] tracking-[-0.28px]">
              {{ card.type }}
            </div>
            <div class="text-[#7C7C7C] text-[14px] font-ibm leading-[130%] tracking-[-0.28px]">
              {{ card.date }}
            </div>
          </div>
          <div class="text-white text-[24px] leading-[130%] font-ibm font-normal">
            {{ card.title }}
          </div>
        </div>

        <div class="text-[rgba(255,255,255,0.60)] text-[16px] font-ibm leading-[150%]">
          {{ card.subtitle }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
