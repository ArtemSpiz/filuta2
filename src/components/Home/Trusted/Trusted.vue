<script setup>
import video1 from '@/assets/img/video1.png';
import video2 from '@/assets/img/video2.png';
import video3 from '@/assets/img/video3.png';

import logo from '@/assets/img/trustedCadLogo.png';
import Section from '@/components/ui/Section/Section.vue';

const TrustedCards = [
  {
    video: video1,
    text: '"With Filuta AI’s Planning Agents, we uncovered bugs we never would’ve found manually. The full test coverage and streamlined process saved us time and let our team focus on building a better game."',
    name: 'Martin “Dram” Melicharek',
    position: 'Lead Developer - Silica',
  },
  {
    video: video2,
    text: '“We shipped faster and with more confidence. Filuta handled the repetitive testing so our team could focus on gameplay and polish.”',
    name: 'Martin “Dram” Melicharek',
    position: 'Lead Developer - Silica',
  },
  {
    video: video3,
    text: '“Before Filuta, testing slowed us down. Now, our devs get instant feedback and can iterate way faster. It gave the whole team breathing room — and boosted morale.”',
    name: 'Martin “Dram” Melicharek',
    position: 'Lead Developer - Silica',
  },
];
</script>

<template>
  <Section
    title="Trusted by Industry Leaders"
    align="center"
    text-subtitle="!max-w-full "
    subtitle="How studios use Filuta AI to speed up releases, improve quality, and boost team focus."
  >
    <div
      class="flex gap-6 w-full justify-between max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:gap-[32px]"
    >
      <div
        v-for="(card, index) in TrustedCards"
        :key="index"
        class="flex flex-col items-start gap-[44px] flex-1 justify-between max-lg:max-w-[600px] max-lg:gap-[16px]"
      >
        <div class="flex flex-col items-start gap-6 max-lg:gap-[16px]">
          <div class="h-[266px] w-full cursor-pointer">
            <img :src="card.video" alt="video" class="h-full w-full object-cover rounded-md" />
          </div>
          <div class="text-white font-['IBM Plex Sans'] text-[16px] leading-[130%]">
            {{ card.text }}
          </div>
        </div>

        <div class="flex justify-between items-start w-full">
          <div class="flex flex-col gap-1 text-left">
            <div class="text-white font-['IBM Plex Sans'] text-[16px] leading-[130%]">
              {{ card.name }}
            </div>
            <div class="text-[#8a8a8a] font-['IBM Plex Sans'] text-[14px] leading-[130%]">
              {{ card.position }}
            </div>
          </div>
          <div class="w-[128px] h-[31.872px] shrink-0">
            <img :src="logo" alt="logo" class="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>

<style scoped></style>
