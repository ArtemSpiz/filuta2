<script setup>
import talentsImg from '@/assets/img/talentsImg.png';
import Light1 from '@/assets/svg/Light1.vue';
import Light3 from '@/assets/svg/Light3.vue';
import lightLeft from '@/assets/img/helpLightLeft.png';
import lightRight from '@/assets/img/helpLightRight.png';
import Section from '../ui/Section/Section.vue';

const TalentsCards = [
  {
    light: Light3,
    title: 'What makes us different?',
    text: "We blend the intellectual rigor of NASA-grade research with the agility of a game studio. Our team members have contributed to major initiatives at DARPA, Google, Microsoft, and top European academic institutions — delivering AI that's both state-of-the-art and built for impact.",
  },
  {
    light: Light1,
    title: 'Connected to the Community',
    text: 'We actively engage with the research community by presenting at top conferences (ICAPS, SAT, SoCS), sponsoring events like the International SAT Competition, and launching the Composite AI workshop at ECAI 2024 to foster collaboration in this emerging field.',
  },
];
</script>

<template>
  <div class="relative">
    <div
      class="absolute -top-38 left-0 w-[996px] h-[764px] pointer-events-none max-md:w-[271px] max-md:h-[208px] max-md:-top-10"
    >
      <img :src="lightLeft" alt="lightLeft" />
    </div>

    <div
      class="absolute -top-38 right-0 w-[752px] h-[777px] pointer-events-none max-md:w-[205px] max-md:h-[212px] max-md:-top-10"
    >
      <img :src="lightRight" alt="lightRight" />
    </div>
    <Section
      title="Our Talents"
      subtitle=" We've assembled a one-of-a-kind team of researchers, engineers, and product thinkers —
        combining academic brilliance with hands-on innovation."
      align="center"
      text-wrap-class="!max-md:pb-8"
      text-subtitle="!max-w-[750px]"
    >
      <div class="flex items-center self-stretch gap-6 max-md:flex-col">
        <div class="w-auto self-stretch max-xl:self-auto">
          <img :src="talentsImg" alt="talentsImg" />
        </div>
        <div class="flex flex-col gap-6 self-stretch">
          <div
            v-for="(card, index) in TalentsCards"
            :key="index"
            class="flex relative w-max flex-col p-8 pt-12 h-[302px] justify-end gap-4 self-stretch rounded-5xl border border-dark-700 max-md:w-full max-md:items-center max-md:h-auto max-sm:p-6 max-sm:pt-10"
            :class="{
              'bg-card-green': index === 0,
              'bg-dark-900': index === 1,
            }"
          >
            <div class="absolute top-0 right-1/2 translate-x-1/2">
              <component :is="card.light" active />
            </div>
            <div class="text-white text-2xl font-ibm leading-[130%] text-center max-md:text-xl">
              {{ card.title }}
            </div>
            <div
              class="text-gray-400 text-base font-ibm leading-[150%] text-center w-[435px] max-lg:w-[335px] max-md:w-full"
            >
              {{ card.text }}
            </div>
          </div>
        </div>
      </div>
    </Section>
  </div>
</template>

<style scoped></style>
