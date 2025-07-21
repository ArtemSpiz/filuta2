<script setup>
import Light1 from "@/assets/svg/Light1.vue";
import Light2 from "@/assets/svg/Light2.vue";
import Light3 from "@/assets/svg/Light3.vue";

import ProblemCard1 from "@/assets/svg/ProblemCard1.vue";
import ProblemCard2 from "@/assets/svg/ProblemCard2.vue";
import ProblemCard3 from "@/assets/svg/ProblemCard3.vue";

const ProblemCards = [
  {
    light: Light1,
    icon: ProblemCard1,
    title: "Automated Scripts Break Easily",
    text: "Scripted tests break as your game changes — they’re fragile and hard to maintain.",
  },
  {
    light: Light2,
    icon: ProblemCard2,
    title: "Missed Bugs in Real Player Scenarios",
    text: "Edge cases and unexpected gameplay paths often slip through manual tests—leading to critical bugs in production.",
  },
  {
    light: Light3,
    icon: ProblemCard3,
    title: "Manual QA Is Too Slow and Expensive",
    text: "Traditional testing methods drain time and budget. With every new build, QA becomes a bottleneck instead of a safety net.",
  },
];

import { ref, onMounted, onUnmounted } from "vue";

const windowWidth = ref(window.innerWidth);

function updateWidth() {
  windowWidth.value = window.innerWidth;
}

onMounted(() => {
  window.addEventListener("resize", updateWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWidth);
});
</script>

<template>
  <div class="flex flex-col items-center gap-[56px] container">
    <div class="Title text-center">The Problems Slowing You Down</div>
    <div
      class="flex justify-center items-start gap-6 w-full flex-wrap max-xl:grid max-xl:grid-cols-ddd max-md:flex max-md:flex-col max-md:justify-center max-md:items-center max-md:w-auto max-sm:w-full"
    >
      <div
        v-for="(card, index) in ProblemCards"
        :key="index"
        :class="[
          'relative flex flex-col items-center gap-4 flex-1 p-12 pt-12 pb-8 self-stretch w-[315px] rounded-[20px] border border-[#2b2a30] max-xl:max-w-[420px] max-xl:w-full max-md:p-[32px] max-md:pt-[48px] max-md:h-[302px] max-md:flex-auto',
          index === 1
            ? 'bg-[#121619]'
            : index === 2
            ? 'bg-[#121819]'
            : 'bg-[#141219]',

          index === 2
            ? windowWidth < 768
              ? 'right-[0%]'
              : windowWidth < 1286
              ? 'right-[-50%]'
              : ''
            : '',
        ]"
      >
        <div class="absolute top-0 right-1/2 translate-x-1/2">
          <component active :is="card.light" />
        </div>

        <div class="flex flex-col items-center gap-8 w-full">
          <component :is="card.icon" />
          <div
            class="text-white text-center font-ibm text-[24px] font-normal leading-[130%] max-w-[250px] w-full max-md:text-[22px] max-sm:text-[20px] max-md:max-w-[220px]"
          >
            {{ card.title }}
          </div>
        </div>

        <div
          class="text-[#9d9d9d] text-center font-ibm text-[16px] font-normal leading-[150%] max-md:w-[310px]"
        >
          {{ card.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
