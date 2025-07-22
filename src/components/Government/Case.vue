<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import ArrowCaseIcon from "@/assets/svg/ArrowCaseIcon.vue";
import bgImgCard1 from "@/assets/img/caseBg1.png";
import bgImgCardMob1 from "@/assets/img/caseBgMob1.png";
import TransparentBtn from "@/ui/TransparentBtn/TransparentBtn.vue";

const isMobile = window.innerWidth < 786;

const CaseCards = [
  {
    bgImage: isMobile ? bgImgCardMob1 : bgImgCard1,
    title: "HISD: Scaling Compliance for One of the Largest Districts in Texas",
    subtitle:
      "Filuta AI enabled daily vendor checks and full automation across hundreds of campuses, significantly reducing manual effort and error risk.",
  },
  {
    bgImage: bgImgCard1,
    title: "HISD: Scaling Compliance for One of the Largest Districts in Texas",
    subtitle:
      "Filuta AI enabled daily vendor checks and full automation across hundreds of campuses, significantly reducing manual effort and error risk.",
  },
  {
    bgImage: bgImgCard1,
    title: "HISD: Scaling Compliance for One of the Largest Districts in Texas",
    subtitle:
      "Filuta AI enabled daily vendor checks and full automation across hundreds of campuses, significantly reducing manual effort and error risk.",
  },
];
const cardRefs = ref([]);

const canScrollLeft = ref(false);
const canScrollRight = ref(true);

function updateScrollLimits() {
  if (!carousel.value) return;

  const el = carousel.value;
  const containerWidth = el.offsetWidth;

  canScrollLeft.value = el.scrollLeft > 0;
  canScrollRight.value = el.scrollLeft + el.clientWidth < el.scrollWidth - 1;

  // Динамічно визначаємо центр кожної картки
  let scrollCenter = el.scrollLeft + containerWidth / 2;
  let closestIdx = 0;
  let minDist = Infinity;
  let accOffset = 0;
  for (let i = 0; i < CaseCards.length; i++) {
    const card = cardRefs.value[i];
    if (!card) continue;
    const cardCenter = accOffset + card.offsetWidth / 2;
    const dist = Math.abs(cardCenter - scrollCenter);
    if (dist < minDist) {
      minDist = dist;
      closestIdx = i;
    }
    accOffset += card.offsetWidth + 24; // 24px gap
  }
  currentIndex.value = closestIdx;
}

onMounted(() => {
  updateScrollLimits();
  carousel.value?.addEventListener("scroll", updateScrollLimits);
  window.addEventListener("resize", updateScrollLimits);
});

onUnmounted(() => {
  carousel.value?.removeEventListener("scroll", updateScrollLimits);
  window.removeEventListener("resize", updateScrollLimits);
});

const currentIndex = ref(0);
const carousel = ref(null);
// const cardWidth = 900 + 24; // Більше не використовується

function scrollToIndex(index) {
  if (!carousel.value || !cardRefs.value[index]) return;

  const card = cardRefs.value[index];

  // Вираховуємо scrollOffset динамічно
  const scrollOffset =
    card.offsetLeft - (carousel.value.offsetWidth / 2 - card.offsetWidth / 2);

  carousel.value.scrollTo({ left: scrollOffset, behavior: "smooth" });
  currentIndex.value = index;
}

function scrollNext() {
  if (currentIndex.value < CaseCards.length - 1) {
    scrollToIndex(currentIndex.value + 1);
  }
}

function scrollPrev() {
  if (currentIndex.value > 0) {
    scrollToIndex(currentIndex.value - 1);
  }
}
</script>

<template>
  <div class="flex-col gap-[48px] flex">
    <div
      class="flex justify-between items-start container pbNone max-sm:flex-col max-sm:gap-[32px] max-sm:items-end"
    >
      <div class="flex flex-col gap-[16px]">
        <div class="Title">Case Studies</div>
        <div class="Subtitle max-w-[600px]">
          Discover how Filuta AI helps districts automate compliance, reduce
          risk, and refocus teams on what matters most.
        </div>
      </div>

      <div class="flex items-center gap-[16px]">
        <div
          class="cursor-pointer transition-all duration-300 h-[48px] px-[12px] flex justify-center items-center rounded-full border bg-[rgba(255,255,255,0.02)]"
          @click="scrollPrev"
          :class="canScrollLeft ? 'border-white' : 'border-[#626262]'"
        >
          <ArrowCaseIcon
            :fill="canScrollLeft ? '#FFF' : '#626262'"
            class="rotate-180"
          />
        </div>
        <div
          class="cursor-pointer transition-all duration-300 h-[48px] px-[12px] flex justify-center items-center rounded-full border bg-[rgba(255,255,255,0.02)]"
          @click="scrollNext"
          :class="canScrollRight ? 'border-white' : 'border-[#626262]'"
        >
          <ArrowCaseIcon :fill="canScrollRight ? '#FFF' : '#626262'" />
        </div>
      </div>
    </div>

    <div
      ref="carousel"
      class="flex items-start self-stretch h-[480px] w-full gap-[24px] overflow-x-auto overflow-y-hidden no-scrollbar snap-x snap-mandatory px-[108px] max-xl:px-[80px] max-lg:px-[60px] max-md:px-[40px] max-sm:px-[24px] max-sm:h-[537px]"
      :style="`scroll-behavior: smooth`"
    >
      <div
        v-for="(card, index) in CaseCards"
        :key="index"
        ref="cardRefs"
        class="relative overflow-hidden flex items-end w-[900px] h-full rounded-[24px] border border-[#2B2A30] shadow-[0px_-17px_44px_0px_rgba(0,0,0,0.45)] flex-shrink-0 snap-center max-lg:w-full"
      >
        <div class="w-full z-0 absolute top-0 right-0 object-cover">
          <img :src="card.bgImage" alt="bgImg" />
        </div>

        <div
          class="p-[40px] flex items-end gap-[72px] justify-between z-10 max-lg:w-full max-lg:p-[24px] max-lg:gap-[24px] max-md:items-start max-md:flex-col"
        >
          <div
            class="flex flex-col gap-[8px] w-[600px] flex-1 max-md:w-full max-md:max-w-[600px]"
          >
            <div class="text-[24px] text-white font-ibm leading-[130%]">
              {{ card.title }}
            </div>
            <div
              class="text-[16px] text-[rgba(255,255,255,0.60)] font-ibm leading-[150%]"
            >
              {{ card.subtitle }}
            </div>
          </div>
          <TransparentBtn text="Read more" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.no-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
