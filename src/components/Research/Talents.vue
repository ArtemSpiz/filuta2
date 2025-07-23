<script setup>
import talentsImg from "@/assets/img/talentsImg.png";
import Light1 from "@/assets/svg/Light1.vue";
import Light3 from "@/assets/svg/Light3.vue";
import lightLeft from "@/assets/img/helpLightLeft.png";
import lightRight from "@/assets/img/helpLightRight.png";

const TalentsCards = [
  {
    light: Light3,
    title: "What makes us different?",
    text: "We blend the intellectual rigor of NASA-grade research with the agility of a game studio. Our team members have contributed to major initiatives at DARPA, Google, Microsoft, and top European academic institutions — delivering AI that’s both state-of-the-art and built for impact.",
  },
  {
    light: Light1,
    title: "Connected to the Community",
    text: "We actively engage with the research community by presenting at top conferences (ICAPS, SAT, SoCS), sponsoring events like the International SAT Competition, and launching the Composite AI workshop at ECAI 2024 to foster collaboration in this emerging field.",
  },
];
</script>

<template>
  <div class="container flex-col center relative max-md:gap-[32px]">
    <div
      class="absolute top-[-150px] left-0 w-[996px] h-[764px] pointer-events-none max-md:w-[271px] max-md:h-[208px] max-md:top-[-40px]"
    >
      <img :src="lightLeft" alt="lightLeft" />
    </div>

    <div
      class="absolute top-[-150px] right-0 w-[752px] h-[777px] pointer-events-none max-md:w-[205px] max-md:h-[212px] max-md:top-[-40px]"
    >
      <img :src="lightRight" alt="lightRight" />
    </div>
    <div
      class="flex flex-col center text-center gap-[24px] w-full max-w-[600px]"
    >
      <div class="Title">Our Talents</div>
      <div class="Subtitle">
        We’ve assembled a one-of-a-kind team of researchers, engineers, and
        product thinkers — combining academic brilliance with hands-on
        innovation.
      </div>
    </div>

    <div class="flex items-center self-stretch gap-[24px] max-md:flex-col">
      <div class="w-auto self-stretch max-xl:self-auto">
        <img :src="talentsImg" alt="talentsImg" />
      </div>
      <div class="flex flex-col gap-[24px] self-stretch">
        <div
          v-for="(card, index) in TalentsCards"
          :key="index"
          class="flex relative w-max flex-col p-[32px] pt-[48px] h-[302px] justify-end gap-[16px] self-stretch rounded-[20px] border border-[#2B2A30] max-md:w-full max-md:center max-md:h-max max-sm:p-[24px] max-sm:pt-[40px]"
          :class="{
            'bg-[#121819]': index === 0,
            'bg-[#141219]': index === 1,
          }"
        >
          <div class="absolute top-0 right-[50%] translate-x-[50%]">
            <component :is="card.light" active />
          </div>
          <div
            class="text-white text-[24px] font-ibm leading-[130%] text-center max-md:text-[20px]"
          >
            {{ card.title }}
          </div>
          <div
            class="text-[#9D9D9D] text-[16px] font-ibm leading-[150%] text-center w-[435px] max-lg:w-[335px] max-md:w-full"
          >
            {{ card.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
