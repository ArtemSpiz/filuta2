<script setup>
import ArrowCaseIcon from "@/assets/svg/ArrowCaseIcon.vue";
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import LinkedInIcon from "@/assets/svg/linkedInIcon.vue";

const props = defineProps({
  teamCards: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const isMobile = ref(window.innerWidth < 768);

function updateIsMobile() {
  isMobile.value = window.innerWidth < 768;
}

const scrollContainer = ref(null);
const cardWidth = isMobile.value ? 318 : 312;
const rightPadding = ref(108);
const cardGap = 24;
const peekWidth = 40;
const currentIndex = ref(0);

function updateRightPadding() {
  const w = window.innerWidth;
  if (w < 640) rightPadding.value = 24;
  else if (w < 768) rightPadding.value = 40;
  else if (w < 1040) rightPadding.value = 60;
  else if (w < 1285) rightPadding.value = 80;
  else rightPadding.value = 108;
}

function getMaxScrollLeft() {
  const el = scrollContainer.value;
  if (!el) return 0;
  return el.scrollWidth - el.clientWidth;
}

const canScrollLeft = ref(false);
const canScrollRight = ref(true);

let scrollTimeout = null;

function updateScrollButtons() {
  const el = scrollContainer.value;
  if (!el) return;
  canScrollLeft.value = el.scrollLeft > 0;
  const maxScrollLeft = getMaxScrollLeft();
  canScrollRight.value = el.scrollLeft < maxScrollLeft;
}

function getCardsCount() {
  return props.teamCards.length;
}
function getMaxIndex() {
  const el = scrollContainer.value;
  if (!el) return 0;
  const visibleWidth = el.clientWidth;
  const totalCards = getCardsCount();
  const totalWidth =
    totalCards * cardWidth + (totalCards - 1) * cardGap + rightPadding.value;
  const stops = Math.ceil(
    (totalWidth - visibleWidth + peekWidth) / (cardWidth + cardGap)
  );
  return Math.max(0, stops);
}

function scrollToIndex(idx) {
  const el = scrollContainer.value;
  if (!el) return;
  const totalCards = getCardsCount();
  let targetScroll;

  isProgrammaticScroll.value = true;
  if (isMobile.value) {
    const cards = el.querySelectorAll(".team-card");
    if (!cards.length) return;

    if (idx === totalCards - 1) {
      targetScroll = el.scrollWidth - el.clientWidth;
    } else {
      const card = cards[idx];
      targetScroll = card.offsetLeft - (el.clientWidth - card.offsetWidth) / 2;
    }
  } else {
    const step = cardWidth + cardGap - peekWidth;
    if (idx >= totalCards - 2) {
      targetScroll = getMaxScrollLeft();
    } else {
      targetScroll = idx * step;
    }
    if (targetScroll > getMaxScrollLeft() - 1)
      targetScroll = getMaxScrollLeft();
    if (targetScroll < 0) targetScroll = 0;
  }
  el.scrollTo({ left: targetScroll, behavior: "smooth" });
  setTimeout(() => {
    updateScrollButtons();
    isProgrammaticScroll.value = false;
  }, 350);
}

function scrollNext() {
  const maxIdx = getMaxIndex();
  if (currentIndex.value < maxIdx) {
    currentIndex.value++;
    scrollToIndex(currentIndex.value);
  }
}

function scrollPrev() {
  if (currentIndex.value > 0) {
    currentIndex.value--;
    scrollToIndex(currentIndex.value);
  }
}

function onScroll() {
  updateScrollButtons();
  if (isProgrammaticScroll.value) return;
  if (scrollTimeout) clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    const el = scrollContainer.value;
    if (!el) return;
    if (isMobile.value) {
      currentIndex.value = getNearestCardIndexMobile();
    } else {
      let idx = Math.round(el.scrollLeft / (cardWidth + cardGap));
      currentIndex.value = idx;
      snapToNearestCard();
    }
  }, 120);
}

function getNearestCardIndexMobile() {
  const el = scrollContainer.value;
  if (!el) return 0;
  const cards = el.querySelectorAll(".team-card");
  if (!cards.length) return 0;
  const containerCenter = el.scrollLeft + el.clientWidth / 2;
  let minDist = Infinity;
  let nearestIdx = 0;
  cards.forEach((card, idx) => {
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
    const dist = Math.abs(containerCenter - cardCenter);
    if (dist < minDist) {
      minDist = dist;
      nearestIdx = idx;
    }
  });
  return nearestIdx;
}

function snapToNearestCard() {
  const el = scrollContainer.value;
  if (!el) return;
  const maxScrollLeft = getMaxScrollLeft();
  const totalCards = getCardsCount();
  let idx;

  if (isMobile.value) {
    idx = getNearestCardIndexMobile();
    if (el.scrollLeft >= maxScrollLeft - 1) {
      idx = totalCards - 1;
    }
    currentIndex.value = idx;
    return;
  } else {
    const step = cardWidth + cardGap - peekWidth;
    idx = Math.round(el.scrollLeft / step);
    if (el.scrollLeft >= maxScrollLeft - 1) {
      idx = totalCards - 2;
    }
    currentIndex.value = idx;
    scrollToIndex(idx);
  }
}

onMounted(() => {
  updateRightPadding();
  updateIsMobile();
  window.addEventListener("resize", updateRightPadding);
  window.addEventListener("resize", updateIsMobile);
  nextTick(() => {
    updateScrollButtons();
    if (scrollContainer.value) {
      scrollContainer.value.addEventListener("scroll", onScroll);
    }
  });
});
onUnmounted(() => {
  window.removeEventListener("resize", updateRightPadding);
  window.removeEventListener("resize", updateIsMobile);
  if (scrollContainer.value) {
    scrollContainer.value.removeEventListener("scroll", onScroll);
  }
});

const activeCardIndexes = ref([]);
const isProgrammaticScroll = ref(false);

function handleActiveCard(index) {
  const arr = activeCardIndexes.value;
  const i = arr.indexOf(index);
  if (i === -1) {
    arr.push(index);
  } else {
    arr.splice(i, 1);
  }
}
</script>

<template>
  <div class="gap-[48px] flex-col flex containerBottom">
    <div
      class="w-full justify-between flex container pbNone max-md:flex-col max-md:gap-[48px]"
    >
      <div class="flex flex-col gap-[16px] w-full max-w-[600px]">
        <div class="Title">Research team</div>
        <div class="Subtitle">
          Our research is led by a world-class team of AI scientists, engineers,
          and academic collaborators. We combine deep theoretical expertise with
          a product-first mindset.
        </div>
      </div>

      <div
        class="flex items-center gap-[16px] max-md:items-end max-md:justify-end"
      >
        <div
          class="cursor-pointer transition-all duration-300 h-[48px] px-[12px] flex justify-center items-center rounded-full border bg-[rgba(255,255,255,0.02)]"
          @click="scrollPrev"
          :class="canScrollLeft ? 'border-white' : 'border-[#626262]'"
        >
          <ArrowCaseIcon
            class="rotate-180"
            :fill="canScrollLeft ? '#FFF' : '#626262'"
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
      class="flex items-center self-stretch gap-[24px] px-[108px] w-full overflow-y-hidden overflow-x-scroll no-scrollbar snap-x scroll-smooth max-xl:px-[80px] max-lg:px-[60px] max-md:px-[40px] max-sm:px-[24px] max-md:snap-center"
      ref="scrollContainer"
    >
      <div
        class="team-card p-[24px] flex relative flex-col gap-[24px] self-stretch rounded-[20px] border border-[#2B2A30] shadow-[0px_-17px_44px_0px_rgba(0,0,0,0.45)] transition-[background] duration-500 max-md:p-[12px] max-md:shrink-0"
        v-for="(card, index) in props.teamCards"
        :key="index"
        @click="handleActiveCard(index)"
        :style="{
          background: activeCardIndexes.includes(index)
            ? 'radial-gradient(67.2% 132.88% at 100% 100%, #57C1CA 0%, #2B6064 100%)'
            : '#141219',
        }"
        :class="{ ' hidden': index == 10 }"
      >
        <div
          class="w-[240px] h-auto transition-all duration-500 max-md:w-[270px] max-md:h-[321px] rounded-[8px] overflow-hidden"
          :class="{
            'opacity-1 translate-y-0': !activeCardIndexes.includes(index),
            'opacity-0 translate-y-[-30px]': activeCardIndexes.includes(index),
          }"
        >
          <img
            :src="card.image"
            alt="photo"
            class="max-md:object-cover max-md:object-[top_-20px_right_0px]"
          />
        </div>
        <div
          class="flex flex-col gap-[8px] transition-all duration-500"
          :class="{
            'opacity-1 translate-y-0': !activeCardIndexes.includes(index),
            'opacity-0 translate-y-[-30px]': activeCardIndexes.includes(index),
          }"
        >
          <div class="text-white text-[24px] leading-[130%] font-ibm">
            {{ card.name }}
          </div>
          <div
            class="text-[rgba(255,255,255,0.60)] text-[16px] font-ibm leading-[150%]"
          >
            {{ card.post }}
          </div>
        </div>

        <div
          class="text-white top-[24px] pr-[24px] absolute font-ibm text-[16px] leading-[150%] transition-all duration-[450]"
          :class="{
            'opacity-1 translate-y-0': activeCardIndexes.includes(index),
            'opacity-0 translate-y-[30px]': !activeCardIndexes.includes(index),
          }"
        >
          {{ card.text }}
        </div>

        <div
          class="min-w-[24px] bottom-[24px] absolute transition-all duration-500"
          :class="{
            'opacity-1 translate-y-0': activeCardIndexes.includes(index),
            'opacity-0 translate-y-[30px]': !activeCardIndexes.includes(index),
          }"
        >
          <LinkedInIcon />
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
.team-card {
  scroll-snap-align: center;
}
</style>
