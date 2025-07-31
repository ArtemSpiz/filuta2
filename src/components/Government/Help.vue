<script setup>
import { onMounted, nextTick, onUnmounted, ref } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import HelpCardImg1 from '@/assets/img/helpCard1.png';
import HelpCardImg2 from '@/assets/img/helpCard2.png';
import HelpCardImg3 from '@/assets/img/helpCard3.png';
import HelpCardImg4 from '@/assets/img/helpCard4.png';

import lightLeft from '@/assets/img/helpLightLeft.png';
import lightRight from '@/assets/img/helpLightRight.png';

gsap.registerPlugin(ScrollTrigger);

const cards = ref([]);
const helpCardsWrapper = ref(null);

const HelpCards = [
  {
    title: '24/7 Intelligent Testing',
    subtitle:
      "Set testing goals like 'validate all navigation flows' or 'test voice assistant reliability'. Our AI handles the execution 24/7.",
    image: HelpCardImg1,
  },
  {
    title: 'Catch Bugs Before Drivers Do',
    subtitle:
      'Catch edge cases that manual testing might miss, from UI freezes to navigation errors, before they impact drivers.',
    image: HelpCardImg2,
  },
  {
    title: 'Free Up Your Engineers',
    subtitle:
      'Automate repetitive test scenarios so your engineers can concentrate on developing next-generation features and experiences.',
    image: HelpCardImg3,
  },
  {
    title: 'Trusted by Industry Leaders',
    subtitle:
      'Automotive leaders trust Filuta AI to accelerate validation cycles and ensure consistent quality across all system updates.',
    image: HelpCardImg4,
  },
];

const shrinkScale = [0.94, 0.96, 0.98, 1];

let helpTrigger = null;

const isMobile = ref(false);

onMounted(() => {
  isMobile.value = window.innerWidth <= 769;
});

function updateContainerHeight() {
  if (!cards.value.length || !helpCardsWrapper.value) return;
  let totalHeight = 0;
  cards.value.forEach((card, i) => {
    totalHeight += card.offsetHeight;
    if (i !== cards.value.length - 1) totalHeight -= 60;
  });
  helpCardsWrapper.value.style.height = `${totalHeight}px`;
}

function getOffsetY() {
  if (window.innerWidth < 769) return 0;
  if (window.innerWidth < 1040) return 200;
  if (window.innerWidth < 1285) return 300;
  if (window.innerWidth < 1400) return 400;
  return 430;
}

function getTargetHeight() {
  if (window.innerWidth < 640) return 300;
  if (window.innerWidth < 1024) return 400;
  return 470;
}

onMounted(async () => {
  if (isMobile.value) {
    return;
  }
  await nextTick();
  updateContainerHeight();

  const offsetY = getOffsetY();
  const totalCards = cards.value.length;

  cards.value.forEach(card => {
    card.style.width = '100%';
    gsap.set(card, { y: 0, scaleX: 1 });
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.helpText',
      start: 'top top',
      end: `+=${totalCards * offsetY}`,
      pin: '.help',
      snap: 1 / (totalCards - 1),
      scrub: 1,
      id: 'helpScrollAnim',
    },
  });

  for (let i = 1; i < totalCards; i++) {
    tl.addLabel(`step${i}`);
    for (let j = i; j < totalCards; j++) {
      tl.to(
        cards.value[j],
        {
          y: -(i * offsetY),
          duration: 0.6,
          ease: 'power2.inOut',
        },
        `step${i}`
      );
    }
    for (let k = 0; k <= i; k++) {
      tl.to(
        cards.value[k],
        {
          scaleX: shrinkScale[k],
          duration: 0.6,
          ease: 'power2.inOut',
          transformOrigin: 'center',
        },
        `step${i}`
      );
    }
    if (i !== totalCards - 1) {
      tl.to({}, { duration: 0.6 });
    }
  }

  if (helpCardsWrapper.value) {
    tl.to(
      helpCardsWrapper.value,
      {
        height: getTargetHeight(),
        duration: 0.6,
        ease: 'power2.out',
      },
      '+=0.2'
    );
  }

  helpTrigger = tl.scrollTrigger;

  window.addEventListener('resize', handleResize);
});

function handleResize() {
  helpTrigger?.kill(true);
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  nextTick(() => {
    onMountedFns();
    ScrollTrigger.refresh();
  });
}

function onMountedFns() {
  updateContainerHeight();
  const offsetY = getOffsetY();
  const totalCards = cards.value.length;
  cards.value.forEach(card => {
    card.style.width = '100%';
    gsap.set(card, { y: 0, scaleX: 1 });
  });
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.helpCards',
      start: 'top top',
      end: `+=${totalCards * offsetY}`,
      pin: '.help',
      snap: 1 / (totalCards - 1),
      scrub: 1,
      id: 'helpScrollAnim',
    },
  });
  for (let i = 1; i < totalCards; i++) {
    tl.addLabel(`step${i}`);
    for (let j = i; j < totalCards; j++) {
      tl.to(
        cards.value[j],
        {
          y: -(i * offsetY),
          duration: 0.6,
          ease: 'power2.inOut',
        },
        `step${i}`
      );
    }
    for (let k = 0; k <= i; k++) {
      tl.to(
        cards.value[k],
        {
          scaleX: shrinkScale[k],
          duration: 0.6,
          ease: 'power2.inOut',
          transformOrigin: 'center',
        },
        `step${i}`
      );
    }
    if (i !== totalCards - 1) {
      tl.to({}, { duration: 0.6, ease: 'power2.inOut' });
    }
    if (helpCardsWrapper.value) {
      tl.to(
        helpCardsWrapper.value,
        {
          height: getTargetHeight(),
          duration: 0.6,
          ease: 'power2.out',
        },
        '+=0.2'
      );
    }
  }
  helpTrigger = tl.scrollTrigger;
  ScrollTrigger.refresh();
}

onUnmounted(() => {
  helpTrigger?.kill();
  helpTrigger = null;
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <div
    class="container flex gap-14 relative items-center flex-col help py-[100px] max-xl:py-20 max-lg:py-16 max-md:py-12 max-md:gap-8"
  >
    <div
      class="absolute top-[-200px] left-0 pointer-events-none z-0 max-md:top-[-90px] max-md:max-w-[305px] max-md:w-full"
    >
      <img :src="lightLeft" alt="lightLeft" />
    </div>
    <div
      class="absolute top-[-200px] right-0 pointer-events-none z-0 max-md:top-[-90px] max-md:max-w-[305px] max-md:w-full"
    >
      <img :src="lightRight" alt="lightRight" />
    </div>

    <div class="flex flex-col items-center gap-[16px] helpText">
      <div class="Title text-center">How Can We Help</div>
      <div class="Subtitle text-center max-w-[680px]">
        Testing modern infotainment systems can be complex and time-intensive, especially with
        growing feature sets and integration requirements. That's where we come in.
      </div>
    </div>
    <div class="flex flex-col gap-[18px] self-stretch z-10 relative">
      <div
        ref="helpCardsWrapper"
        class="flex flex-col items-center gap-4 w-full relative helpCards"
      >
        <div
          v-for="(card, index) in HelpCards"
          :key="index"
          ref="cards"
          class="p-[48px] shadow-[0px_4px_4px_0px_rgba(0, 0, 0, 0.25)] flex gap-[16px] items-center justify-between max-w-[1400px] rounded-[20px] border border-[#2B2A30] bg-[#141219] w-full max-xl:p-[36px] max-lg:p-[26px] max-sm:p-[16px] max-sm:flex-col max-sm:items-start"
        >
          <div class="flex flex-col gap-[24px] items-start">
            <div class="text-white text-[24px] font-ibm leading-[130%] max-md:text-[20px]">
              {{ card.title }}
            </div>
            <div class="text-[rgba(255,255,255,0.60)] text-[16px] font-ibm leading-[150%]">
              {{ card.subtitle }}
            </div>
          </div>
          <div class="w-full max-w-[587px] max-md:max-w-[400px] max-sm:max-w-[293px]">
            <img :src="card.image" alt="img" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.helpCards > div {
  transition:
    box-shadow 0.3s,
    transform 0.3s;
}
</style>
