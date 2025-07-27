<script setup>
import Light1 from '@/assets/svg/Light1.vue';
import Light3 from '@/assets/svg/Light3.vue';
import light from '@/assets/img/lightRightSecur.png';

const CompositeCards = [
  {
    light: Light1,
    title: 'Our Mission',
    subtitle:
      'Transforming game testing with intelligent, high-performance AI agents — powered by deep-tech innovation and real-time adaptability.',
  },
  {
    light: Light3,
    title: 'Our Commitment',
    subtitle:
      'Advancing Composite AI by uniting symbolic reasoning and machine learning for next-gen automation.',
  },
];
</script>

<template>
  <div class="container gap-[48px] relative max-lg:flex-col">
    <div
      class="absolute bottom-[-150px] left-0 rotate-180 w-[996px] pointer-events-none max-md:hidden"
    >
      <img :src="light" alt="light" />
    </div>
    <div class="flex flex-col gap-[16px] w-full max-w-[575px] z-10">
      <div class="Title">
        Filuta is a research-driven AI company pioneering the next generation of Composite AI.
      </div>
      <div class="Subtitle">
        We build intelligent systems that combine symbolic reasoning with machine learning to solve
        real-world problems — from game testing and logistics to planning and decision automation.
        Our team unites scientists and engineers with deep academic roots and a passion for product
        impact.
      </div>
    </div>

    <div class="flex flex-col gap-[24px] max-lg:flex-row max-md:flex-col max-sm:center">
      <div
        v-for="(card, index) in CompositeCards"
        :key="index"
        class="h-[240px] p-[48px] relative items-center justify-end flex flex-col gap-[16px] rounded-[20px] border border-[#2B2A30] max-lg:w-[50%] max-lg:p-[32px] max-lg:h-[260px] max-lg:pt-[48px] max-md:w-full max-md:h-max max-w-[500px]"
        :class="{ 'bg-[#141219]': index === 0, 'bg-[#121819]': index === 1 }"
      >
        <div class="absolute top-0 right-[50%] translate-x-[50%]">
          <component :is="card.light" active />
        </div>
        <div class="text-white text-[24px] font-ibm left-[130%] text-center">
          {{ card.title }}
        </div>
        <div class="text-[#9D9D9D] text-center font-ibm leading-[150%]">
          {{ card.subtitle }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
