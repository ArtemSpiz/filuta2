<script setup>
import ColorButton from '@/ui/ColorButton/ColorButton.vue';
import aboutHeroImg from '@/assets/img/aboutHeroImg.png';
import aboutHeroImgMob from '@/assets/img/aboutHeroImgMob.png';
import { onMounted, onUnmounted, ref } from 'vue';

const isMobile = ref(false);
const screenWidth = ref(0);

function updateScreenWidth() {
  if (process.client) {
    screenWidth.value = window.innerWidth;
  }
}

onMounted(() => {
  if (process.client) {
    isMobile.value = window.innerWidth < 640;
    screenWidth.value = window.innerWidth;
    window.addEventListener('resize', updateScreenWidth);
  }
});

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('resize', updateScreenWidth);
  }
});
</script>

<template>
  <div
    class="h-screen flex flex-col bg-no-repeat bg-[100%,100%] bg-[url('/src/assets/img/aboutHeroBg.png')] max-lg:gap-[60px] max-lg:pb-[60px] max-lg:h-full overflow-hidden max-sm:bg-[url('/src/assets/img/aboutHeroBgMob.png')]"
  >
    <div class="heroContainer gap-[40px] justify-center max-lg:gap-[53px]">
      <div class="flex flex-col gap-[64px] max-lg:center">
        <div class="flex flex-col gap-[32px]">
          <div class="heroUnderTitle">Humans behind AI</div>
          <div class="flex flex-col gap-[16px]">
            <div class="HeroTitle">Who are we?</div>
            <div class="HeroSubtitle max-w-[400px]">
              We envision a future where AI is used to maximize human effort. Our team is centered
              in that vision.
            </div>
          </div>
        </div>
        <ColorButton text="Contact us" class="w-max" />
      </div>

      <div class="max-w-[783px] w-full flex-1 max-sm:max-w-[400px]">
        <img :src="isMobile ? aboutHeroImgMob : aboutHeroImg" alt="aboutHeroImg" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
