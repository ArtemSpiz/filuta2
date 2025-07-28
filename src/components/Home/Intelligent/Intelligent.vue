<script setup>
import Light1 from '@/assets/svg/Light1.vue';
import Light2 from '@/assets/svg/Light2.vue';
import Light3 from '@/assets/svg/Light3.vue';

import IntelligentIcon1 from '@/assets/svg/IntelligentIcon1.vue';
import IntelligentIcon2 from '@/assets/svg/IntelligentIcon2.vue';
import IntelligentIcon3 from '@/assets/svg/IntelligentIcon3.vue';

import IntelligentImage1 from '@/assets/img/intelligentCardImg1.png';
import IntelligentImage2 from '@/assets/img/intelligentCardImg2.png';
import IntelligentImage3 from '@/assets/img/intelligentCardImg3.png';
import { ref, onMounted, onUnmounted } from 'vue';
import Section from '@/components/ui/Section/Section.vue';

const IntelligentCards = [
  {
    light: Light3,
    icon: IntelligentIcon3,
    title: 'Automotive Infotainment',
    subtitle:
      'We develop smart in-car infotainment systems that enhance navigation, connectivity, and user experience on the road.',
    image: IntelligentImage3,
    hoverBg: 'hoverBgThird',
  },
  {
    light: Light2,
    icon: IntelligentIcon2,
    title: 'Defence Simulators',
    subtitle:
      'We create high-precision defence simulators for realistic, risk-free military training.',
    image: IntelligentImage2,
    hoverBg: 'hoverBgSecond',
  },
  {
    light: Light1,
    icon: IntelligentIcon1,
    title: 'Government & Education',
    subtitle:
      'Automated vendor compliance checks that reduce human error, minimize risk, and protect public institutions from fines or funding loss.',
    image: IntelligentImage1,
    hoverBg: 'hoverBgFirst',
  },
];

const activeIndex = ref(2);

const isSmallScreen = ref(false);

function onResize() {
  if (process.client) {
    isSmallScreen.value = window.innerWidth < 1040;
  }
}

onMounted(() => {
  if (process.client) {
    isSmallScreen.value = window.innerWidth < 1040;
    window.addEventListener('resize', onResize);
  }
});

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('resize', onResize);
  }
});
</script>

<template>
  <Section
    title="Intelligent AI Solutions for Critical Industries"
    subtitle=" From government to logistics and manufacturing — Filuta delivers smart automation that
        ensures accuracy and reliability."
    text-subtitle="!max-w-full "
    align="left"
    ><div
      class="flex justify-between items-center w-full relative gap-[24px] max-lg:flex-col max-lg:justify-center max-lg:items-center"
    >
      <!-- Картки -->
      <div class="flex flex-col items-start gap-6">
        <div
          v-for="(card, index) in IntelligentCards"
          :key="'card-' + index"
          class="flex flex-col items-center gap-4 w-[617px] px-8 pt-12 pb-8 rounded-[20px] border border-[#2b2a30] cursor-pointer relative transition-all duration-500 max-xl:w-[500px] max-sm:w-full max-sm:p-[16px] max-sm:pt-[32px]"
          :class="{
            'bg-[#141219]': activeIndex === 2 && index === 2,
            'bg-[#121619]': activeIndex === 1 && index === 1,
            'bg-[#121819]': activeIndex === 0 && index === 0,
          }"
          @mouseenter="activeIndex = index"
        >
          <!-- light -->
          <div class="absolute top-0 right-1/2 translate-x-1/2">
            <component :is="card.light" :active="activeIndex === index" />
          </div>

          <div>
            <component :is="card.icon" />
          </div>

          <div
            class="text-white text-center text-[24px] leading-[130%] font-ibm font-normal max-md:text-[20px]"
          >
            {{ card.title }}
          </div>

          <div
            class="text-[#9d9d9d] text-center text-[16px] leading-[150%] font-ibm font-normal w-full max-w-[525px]"
          >
            {{ card.subtitle }}
          </div>

          <div
            :class="[
              'text-center border-b text-[16px] leading-[150%] font-ibm font-normal transition-all duration-500',
              activeIndex === index ? 'text-white border-white' : 'text-[#9D9D9D] border-[#9D9D9D]',
            ]"
          >
            Read more
          </div>
        </div>
      </div>

      <!-- Зображення -->
      <div class="relative max-w-[540px] h-auto w-full">
        <div
          v-for="(card, index) in IntelligentCards"
          v-show="isSmallScreen ? activeIndex === index : true"
          :key="'image-' + index"
          class="absolute top-1/2 right-0 translate-y-[-50%] opacity-0 transition-all duration-500 max-lg:relative max-lg:top-0 max-lg:translate-y-0"
          :class="{ 'opacity-100': activeIndex === index }"
        >
          <img :src="card.image" alt="image" />
        </div>
      </div>
    </div>
  </Section>
</template>

<style></style>
