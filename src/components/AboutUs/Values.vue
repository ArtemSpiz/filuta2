<script setup>
import ValuesCardIcon1 from '@/assets/svg/ValuesCardIcon1.vue';
import ValuesCardIcon2 from '@/assets/svg/ValuesCardIcon2.vue';
import ValuesCardIcon3 from '@/assets/svg/ValuesCardIcon3.vue';
import ValuesCardIcon4 from '@/assets/svg/ValuesCardIcon4.vue';
import ValuesCardIcon5 from '@/assets/svg/ValuesCardIcon5.vue';
import light from '@/assets/img/transformLight.png';

const ValuesCards = [
  {
    icon: ValuesCardIcon1,
    title: 'Progress That Powers Your Success',
    subtitle:
      'We don’t wait for perfection — we take bold steps forward every day to deliver real, continuous improvements for your business.',
  },
  {
    icon: ValuesCardIcon2,
    title: 'Unlocking Expertise to Elevate You',
    subtitle:
      'Our team’s talent is your advantage. We bring the right skills and knowledge to fuel your goals and accelerate growth.',
  },
  {
    icon: ValuesCardIcon3,
    title: 'Simple Solutions, Big Impact',
    subtitle:
      'We cut through complexity to create straightforward, effective results that drive tangible value for you.',
  },
  {
    icon: ValuesCardIcon4,
    title: 'Built on Trust, Driven by Partnership',
    subtitle:
      'Your trust inspires us. Together, we explore, innovate, and deliver excellence — every step of the way.',
  },
  {
    icon: ValuesCardIcon5,
    title: 'Clarity in Complexity',
    subtitle:
      'No matter how complex the challenge, we make it clear and manageable — so you always know the “why” and “how” behind what we do.',
  },
];
</script>

<template>
  <div class="container flex-col items-start relative max-md:gap-[32px]">
    <div
      class="absolute top-[-110px] right-0 w-[789px] h-[500px] pointer-events-none max-sm:w-[486px] max-sm:h-[273px] max-sm:top-[-90px]"
    >
      <img :src="light" alt="light" />
    </div>
    <div class="flex flex-col gap-[16px]">
      <div class="Title">Our Team Values</div>
      <div class="Subtitle">Guiding Principles Behind Every Partnership</div>
    </div>

    <div class="grid grid-cols-6 grid-rows-2 gap-[16px] max-lg:flex max-lg:flex-col">
      <div
        v-for="(card, index) in ValuesCards"
        :key="index"
        class="p-[48px] flex flex-col items-start gap-[32px] flex-1 rounded-[20px] border border-[#2B2A30] bg-[#141219] self-stretch cardsHover max-xl:p-[24px]"
        :class="{
          'col-span-2': index === 0,
          'col-span-2 col-start-3': index === 1,
          'col-span-2 col-start-5': index === 2,
          'col-span-3 row-start-2': index === 3,
          'col-span-3 col-start-4 row-start-2': index === 4,
        }"
      >
        <component :is="card.icon" />
        <div class="flex flex-col gap-[16px]">
          <div class="text-white text-[24px] font-ibm leading-[130%] max-md:text-[20px]">
            {{ card.title }}
          </div>
          <div class="text-[rgba(255,255,255,0.90)] text-[16px] font-ibm leading-[150%]">
            {{ card.subtitle }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
