<template>
  <div class="flex flex-col gap-12">
    <!-- Header Section -->
    <div
      class="w-full container !pb-0 flex justify-between max-md:flex-col max-md:gap-12 pt-[100px] max-xl:pt-20 max-lg:pt-16 max-md:pt-12"
    >
      <div class="flex flex-col gap-4 w-full max-w-2xl">
        <div class="Title">{{ title }}</div>
        <div class="Subtitle">
          {{ subtitle }}
        </div>
      </div>

      <!-- Custom Navigation Arrows -->
      <div class="flex items-center gap-4 max-md:items-end max-md:justify-end">
        <div
          class="cursor-pointer transition-all duration-300 h-12 px-3 flex justify-center items-center rounded-full border bg-white/5"
          :class="canGoPrev ? 'border-white' : 'border-gray-500'"
          @click="swiper?.slidePrev()"
        >
          <ArrowCaseIcon class="rotate-180" :fill="canGoPrev ? '#FFF' : '#626262'" />
        </div>
        <div
          class="cursor-pointer transition-all duration-300 h-12 px-3 flex justify-center items-center rounded-full border bg-white/5"
          :class="canGoNext ? 'border-white' : 'border-gray-500'"
          @click="swiper?.slideNext()"
        >
          <ArrowCaseIcon :fill="canGoNext ? '#FFF' : '#626262'" />
        </div>
      </div>
    </div>

    <!-- Swiper Container -->
    <div
      class="container px-27 max-xl:px-20 max-lg:px-15 max-md:px-10 max-sm:px-6 pb-[100px] max-xl:pb-20 max-lg:pb-16 max-md:pb-12"
    >
      <Swiper
        :modules="[SwiperNavigation, SwiperPagination]"
        :slides-per-view="slidesPerView"
        :space-between="spaceBetween"
        :navigation="false"
        :pagination="false"
        :loop="loop"
        :autoplay="autoplay"
        :breakpoints="breakpoints"
        class="carousel-swiper"
        @swiper="onSwiper"
        @slide-change="onSlideChange"
      >
        <SwiperSlide v-for="(item, index) in items" :key="index" class="carousel-slide">
          <slot :item="item" :index="index" />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import ArrowCaseIcon from '@/assets/svg/ArrowCaseIcon.vue';

// Import Swiper components directly
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Props {
  title: string;
  subtitle: string;
  items: any[];
  slidesPerView?: number;
  spaceBetween?: number;
  loop?: boolean;
  autoplay?: boolean | object;
  breakpoints?: Record<number, { slidesPerView: number; spaceBetween: number }>;
}

withDefaults(defineProps<Props>(), {
  slidesPerView: 3,
  spaceBetween: 24,
  loop: false,
  autoplay: false,
  breakpoints: () => ({
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  }),
});

// Swiper modules
const SwiperNavigation = Navigation;
const SwiperPagination = Pagination;

const swiper = ref<any>(null);
const canGoPrev = ref(false);
const canGoNext = ref(true);

const onSwiper = (swiperInstance: any) => {
  swiper.value = swiperInstance;
  updateNavigationState();
};

const onSlideChange = () => {
  updateNavigationState();
};

const updateNavigationState = () => {
  if (swiper.value) {
    canGoPrev.value = swiper.value.isBeginning ? false : true;
    canGoNext.value = swiper.value.isEnd ? false : true;
  }
};
</script>

<style scoped>
.carousel-swiper {
  overflow: visible;
}

.carousel-slide {
  height: auto;
}

:deep(.swiper-slide) {
  height: auto;
}

:deep(.swiper-wrapper) {
  align-items: stretch;
}
</style>
