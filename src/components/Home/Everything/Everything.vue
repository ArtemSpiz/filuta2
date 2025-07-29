<script setup>
const anim1 = '/animations/animation1.json';
const anim2 = '/animations/animation2.json';
const anim3 = '/animations/animation3.json';
const anim4 = '/animations/animation4.json';
const anim5 = '/animations/animation5.json';
const animMob3 = '/animations/animation3Mob.json';

import everythingLightLeft from '@/assets/img/everythingLightLeft.png';
import everythingLightRight from '@/assets/img/everythingLightRight.png';
import Section from '@/components/ui/Section/Section.vue';

import { onMounted, ref } from 'vue';
import lottie from 'lottie-web';

const isMobile = ref(false);

onMounted(() => {
  if (process.client) {
    isMobile.value = window.innerWidth < 1040;
  }
});

const EverythingCards = [
  {
    animation: anim1,
    title: 'AI Agents that Play Like Real Players',
    subtitle:
      'Test actual gameplay — not just clicks. Our agents understand goals, navigate levels, and adapt to changing mechanics.',
  },
  {
    animation: anim2,
    title: 'Continuous Testing, 24/7',
    subtitle:
      'No need to wait for QA cycles. Agents run tests automatically with every build, day and night.',
  },
  {
    animation: isMobile.value ? animMob3 : anim3,
    title: 'Smart Bug Detection',
    subtitle:
      'Catch hidden issues that traditional scripts miss — edge cases, timing problems, and unusual player behavior.',
  },
  {
    animation: anim4,
    title: 'Easy Integration',
    subtitle:
      'Works with Unity, Unreal, and your CI/CD pipeline. Get started fast without changing your workflow.',
  },
  {
    animation: anim5,
    title: 'Scalable by Design',
    subtitle:
      'From indie games to AAA titles — test one level or an entire game world. Our system scales with your needs.',
  },
];

const animationRefs = EverythingCards.map(() => ref(null));
const lottieInstances = [];

onMounted(() => {
  EverythingCards.forEach((card, index) => {
    const container = animationRefs[index].value;

    const anim = lottie.loadAnimation({
      container,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: card.animation,
    });

    lottieInstances[index] = anim;
  });
});

function playAnimation(index) {
  const anim = lottieInstances[index];
  if (anim) {
    anim.setDirection(1);
    anim.play();
  }
}

function reverseAnimation(index) {
  const anim = lottieInstances[index];
  if (anim) {
    anim.setDirection(-1);
    anim.play();
  }
}
</script>

<template>
  <div class="max-w-[100vw] overflow-hidden">
    <Section
      align="left"
      text-wrap-class="w-full max-w-[750px] mx-auto max-md:max-w-[400px] max-md:mb-8"
      title="Everything you need to test smarter, faster, and at scale"
      subtitle="Built for modern game testing"
      text-subtitle=""
    >
      <div
        class="absolute left-0 -top-[10%] w-[752.168px] pointer-events-none z-0 max-md:w-[390px] max-md:-top-[4%]"
      >
        <img :src="everythingLightLeft" alt="everythingLightLeft" />
      </div>

      <!-- Світло справа -->
      <div class="absolute right-0 -top-[10%] w-[996px] pointer-events-none z-0">
        <img :src="everythingLightRight" alt="everythingLightRight" />
      </div>
      <!-- Картки -->
      <div
        class="grid grid-cols-2 grid-rows-[repeat(3,427px)] gap-6 w-full z-10 max-md:flex max-md:flex-col"
      >
        <div
          v-for="(card, index) in EverythingCards"
          :key="index"
          class="flex flex-col justify-end items-start gap-4 p-12 rounded-[20px] border border-[#2b2a30] bg-[#141219] relative overflow-hidden transition-all duration-500 hover:border-[#a394f7] hover:bg-[#262034] max-lg:p-[30px] max-md:p-[25px] max-md:gap-[10px] max-sm:p-[16px]"
          :class="[
            index === 0 && 'col-start-1 row-start-1',
            index === 1 && 'col-start-2 row-start-1',
            index === 2 && 'col-span-2 row-start-2',
            index === 3 && 'col-start-1 row-start-3',
            index === 4 && 'col-start-2 row-start-3',
          ]"
          @mouseenter="playAnimation(index)"
          @mouseleave="reverseAnimation(index)"
        >
          <div
            :ref="el => (animationRefs[index].value = el)"
            class="w-full h-full max-md:h-[200px] max-sm:h-[130px]"
          />
          <div class="flex flex-col gap-3 items-start w-full">
            <div
              class="text-white text-[24px] leading-[130%] font-ibm font-normal max-md:text-[20px]"
            >
              {{ card.title }}
            </div>
            <div
              class="text-[#9d9d9d] text-[16px] leading-[150%] font-ibm font-normal max-md:text-[10px]"
            >
              {{ card.subtitle }}
            </div>
          </div>
        </div>
      </div>
    </Section>
  </div>
</template>

<style scoped>
.animation-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.animation-container svg {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
