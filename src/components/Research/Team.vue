<script setup>
import ArrowCaseIcon from '@/assets/svg/ArrowCaseIcon.vue';
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import LinkedInIcon from '@/assets/svg/linkedInIcon.vue';
import OptimizedImage from '@/components/ui/OptimizedImage.vue';

const props = defineProps({
  teamCards: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const isMobile = ref(false);

function updateIsMobile() {
  if (process.client) {
    isMobile.value = window.innerWidth < 768;
  }
}

const scrollContainer = ref(null);
const cardWidth = isMobile.value ? 318 : 312;
const rightPadding = ref(108);
const cardGap = 24;
const peekWidth = 40;
const currentIndex = ref(0);

function updateRightPadding() {
  if (process.client) {
    const w = window.innerWidth;
    if (w < 640) rightPadding.value = 24;
    else if (w < 768) rightPadding.value = 40;
    else if (w < 1040) rightPadding.value = 60;
    else if (w < 1285) rightPadding.value = 80;
    else rightPadding.value = 108;
  }
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
  const totalWidth = totalCards * cardWidth + (totalCards - 1) * cardGap + rightPadding.value;
  const stops = Math.ceil((totalWidth - visibleWidth + peekWidth) / (cardWidth + cardGap));
  return Math.max(0, stops);
}

function scrollToIndex(idx) {
  const el = scrollContainer.value;
  if (!el) return;
  const totalCards = getCardsCount();
  let targetScroll;

  isProgrammaticScroll.value = true;
  if (isMobile.value) {
    const cards = el.querySelectorAll('.team-card');
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
    if (targetScroll > getMaxScrollLeft() - 1) targetScroll = getMaxScrollLeft();
    if (targetScroll < 0) targetScroll = 0;
  }
  el.scrollTo({ left: targetScroll, behavior: 'smooth' });
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
      const idx = Math.round(el.scrollLeft / (cardWidth + cardGap));
      currentIndex.value = idx;
      snapToNearestCard();
    }
  }, 120);
}

function getNearestCardIndexMobile() {
  const el = scrollContainer.value;
  if (!el) return 0;
  const cards = el.querySelectorAll('.team-card');
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
  if (process.client) {
    updateRightPadding();
    updateIsMobile();
    window.addEventListener('resize', updateRightPadding);
    window.addEventListener('resize', updateIsMobile);
    nextTick(() => {
      updateScrollButtons();
      if (scrollContainer.value) {
        scrollContainer.value.addEventListener('scroll', onScroll);
      }
    });
  }
});
onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('resize', updateRightPadding);
    window.removeEventListener('resize', updateIsMobile);
    if (scrollContainer.value) {
      scrollContainer.value.removeEventListener('scroll', onScroll);
    }
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

function isDirectusAsset(image) {
  return image && typeof image === 'object' && 'id' in image;
}
</script>

<template>
  <div class="flex flex-col gap-12">
    <div
      class="w-full container !pb-0 flex justify-between max-md:flex-col max-md:gap-12 pt-[100px] max-xl:pt-20 max-lg:pt-16 max-md:pt-12"
    >
      <div class="flex flex-col gap-4 w-full max-w-2xl">
        <div class="Title">Research team</div>
        <div class="Subtitle">
          Our research is led by a world-class team of AI scientists, engineers, and academic
          collaborators. We combine deep theoretical expertise with a product-first mindset.
        </div>
      </div>

      <div class="flex items-center gap-4 max-md:items-end max-md:justify-end">
        <div
          class="cursor-pointer transition-all duration-300 h-12 px-3 flex justify-center items-center rounded-full border bg-white/5"
          :class="canScrollLeft ? 'border-white' : 'border-gray-500'"
          @click="scrollPrev"
        >
          <ArrowCaseIcon class="rotate-180" :fill="canScrollLeft ? '#FFF' : '#626262'" />
        </div>
        <div
          class="cursor-pointer transition-all duration-300 h-12 px-3 flex justify-center items-center rounded-full border bg-white/5"
          :class="canScrollRight ? 'border-white' : 'border-gray-500'"
          @click="scrollNext"
        >
          <ArrowCaseIcon :fill="canScrollRight ? '#FFF' : '#626262'" />
        </div>
      </div>
    </div>

    <div
      ref="scrollContainer"
      class="flex container items-center self-stretch gap-6 px-27 w-full overflow-y-hidden overflow-x-scroll no-scrollbar snap-x scroll-smooth max-xl:px-20 max-lg:px-15 max-md:px-10 max-sm:px-6 pb-[100px] max-xl:pb-20 max-lg:pb-16 max-md:pb-12"
    >
      <div
        v-for="(card, index) in props.teamCards"
        :key="index"
        class="team-card p-6 flex relative flex-col gap-6 self-stretch rounded-5xl border border-dark-700 shadow-glow transition-all duration-500 max-md:p-3 max-md:shrink-0"
        :style="{
          background: activeCardIndexes.includes(index)
            ? 'radial-gradient(67.2% 132.88% at 100% 100%, #57C1CA 0%, #2B6064 100%)'
            : '#141219',
        }"
        :class="{ hidden: index == 10 }"
        @click="handleActiveCard(index)"
      >
        <div
          class="w-60 h-auto transition-all duration-500 max-md:w-[270px] max-md:h-[321px] rounded-lg overflow-hidden"
          :class="{
            'opacity-100 translate-y-0': !activeCardIndexes.includes(index),
            'opacity-0 -translate-y-8': activeCardIndexes.includes(index),
          }"
        >
          <OptimizedImage
            :image-id="card.image && isDirectusAsset(card.image) ? card.image.id : undefined"
            alt="photo"
            :width="240"
            :height="320"
            class="max-md:object-cover max-md:object-[top_-20px_right_0px]"
          />
        </div>
        <div
          class="flex flex-col gap-2 transition-all duration-500"
          :class="{
            'opacity-100 translate-y-0': !activeCardIndexes.includes(index),
            'opacity-0 -translate-y-8': activeCardIndexes.includes(index),
          }"
        >
          <div class="text-white text-2xl leading-[130%] font-ibm">
            {{ card.name }}
          </div>
          <div class="text-white/60 text-base font-ibm leading-[150%]">
            {{ card.position }}
          </div>
        </div>

        <div
          class="text-white top-6 pr-6 absolute font-ibm text-base leading-[150%] transition-all duration-[450ms]"
          :class="{
            'opacity-100 translate-y-0': activeCardIndexes.includes(index),
            'opacity-0 translate-y-8': !activeCardIndexes.includes(index),
          }"
        >
          {{ card.bio }}
        </div>

        <div
          class="min-w-6 bottom-6 absolute transition-all duration-500"
          :class="{
            'opacity-100 translate-y-0': activeCardIndexes.includes(index),
            'opacity-0 translate-y-8': !activeCardIndexes.includes(index),
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
