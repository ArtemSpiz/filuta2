<template>
  <div
    class="flex flex-col items-start gap-6 min-w-[577px] w-[577px] max-xl:w-full max-xl:min-w-[auto] max-lg:max-w-[577px] max-md:gap-[16px]"
  >
    <div class="text-gray-500 font-['IBM Plex Mono'] text-[16px] font-light uppercase">
      Partners
    </div>
    <div class="flex flex-col gap-10 w-full max-sm:gap-[24px]">
      <div
        v-for="(card, index) in partners"
        :key="index"
        class="flex items-center gap-8 w-full max-xl:items-start max-sm:flex-col max-sm:gap-[12px]"
      >
        <div class="w-[201px] h-auto max-xl:w-[150px] max-md:w-[100px]">
          <img
            v-if="logoMap[card.logo as keyof typeof logoMap]"
            :src="logoMap[card.logo as keyof typeof logoMap]"
            alt="partnerLogo"
            class="object-contain"
          />
        </div>
        <div class="flex flex-col items-start gap-2 flex-1">
          <div class="text-gray-900 font-ibm text-[16px] leading-[130%]">
            {{ card.title }}
          </div>
          <div class="text-[14px] text-gray-700 font-ibm leading-[130%]">
            {{ card.subtitle }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import footerAirLogo from '@/assets/img/footerAirLogo.png';
import footerTechLogo from '@/assets/img/footerTechLogo.png';
import type { FooterPartner } from '@/content/footer';

// Create a map of logo names to actual imports
const logoMap = {
  footerAirLogo,
  footerTechLogo,
};

defineProps<{
  partners: FooterPartner[];
}>();
</script>
