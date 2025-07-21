<script setup>
import { onMounted, nextTick, onUnmounted, ref } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = ref([]);
const poweredCardsWrapper = ref(null);

const PoweredCards = [
  {
    title: "13+ ",
    subtitle: "Years of experience in AI research",
  },
  {
    title: "8+",
    subtitle: "Years of advanced software development",
  },
  {
    title: "16",
    subtitle: "Doctorates in Artificial Intelligence and Mathematics",
  },
  {
    title: "Countless",
    subtitle: "Published Papers on AI, testing, and automation",
  },
];

let poweredTrigger = null;

function updateContainerHeight() {
  if (!cards.value.length || !poweredCardsWrapper.value) return;

  let totalHeight = 0;
  cards.value.forEach((card, i) => {
    totalHeight += card.offsetHeight;
    if (i !== cards.value.length - 1) totalHeight -= 60;
  });

  poweredCardsWrapper.value.style.height = `${totalHeight}px`;
}

onMounted(async () => {
  await nextTick();
  updateContainerHeight();

  const offsetY = 120;
  const totalCards = cards.value.length;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".poweredCards",
      start: "top top",
      end: `+=${(totalCards - 1) * 600}`,
      pin: ".powered",
      snap: 1 / (totalCards - 1),
      scrub: true,
      markers: false,
      id: "poweredScrollAnim",
    },
  });

  cards.value.forEach((card) => {
    gsap.set(card, { y: 0 });
  });

  for (let i = 1; i < totalCards; i++) {
    tl.addLabel(`step${i}`);

    for (let j = i; j < totalCards; j++) {
      tl.to(
        cards.value[j],
        {
          y: -(i * offsetY),
          duration: 0.6,
          ease: "power2.inOut",
        },
        `step${i}`
      );
    }

    // Додаємо паузу, але лише якщо не останній крок
    if (i !== totalCards - 1) {
      tl.to({}, { duration: 0.4 });
    }
  }

  if (window.innerWidth < 640) {
    tl.to(poweredCardsWrapper.value, {
      height: 400,
      duration: 0.3,
      ease: "power1.out",
    });
  }

  poweredTrigger = tl.scrollTrigger;

  onUnmounted(() => {
    poweredTrigger?.kill();
    poweredTrigger = null;
  });
});
</script>

<template>
  <div
    class="powered flex justify-center items-start overflow-hidden relative gap-[56px] container max-md:gap-[32px] max-lg:flex-col max-lg:justify-center max-lg:items-center max-sm:pb-0"
  >
    <div class="flex flex-col items-start gap-4 max-w-[585px] w-full">
      <div class="Title">Powered by Innovation and Expertise</div>
      <div class="Subtitle">
        Filuta AI is created by a world-class team of engineers and AI experts,
        backed by patented technology and unique insights from fields like deep
        space exploration.
      </div>
    </div>

    <div
      class="flex flex-col items-center gap-4 max-w-[584px] w-full relative poweredCards"
      ref="poweredCardsWrapper"
    >
      <div
        v-for="(card, index) in PoweredCards"
        :key="index"
        ref="cards"
        class="w-full flex flex-col items-start justify-start gap-3 p-12 rounded-[20px] border border-[#2b2a30] bg-[#141219] shadow-[0px_-17px_44px_0px_rgba(0,0,0,0.45)] transition-all duration-500 max-sm:p-[32px]"
      >
        <div
          :class="[
            'text-[64px] leading-[130%] font-ibm font-normal max-lg:text-[55px] max-md:text-[45px] max-sm:text-[40px]',
            index === 2 ? 'text-[#a394f7]' : 'text-[#57c1ca]',
          ]"
        >
          {{ card.title }}
        </div>
        <div
          class="text-[#9d9d9d] text-[16px] leading-[150%] font-ibm w-[220px]"
        >
          {{ card.subtitle }}
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
