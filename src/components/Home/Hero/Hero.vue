<script setup>
import ColorButton from '@/ui/ColorButton/ColorButton.vue';
import TransparentBtn from '@/ui/TransparentBtn/TransparentBtn.vue';
import heroMobBg from '@/assets/img/bgMobHero.png';
import bgHero from '@/assets/img/bgHero.png';
import heroMobLight from '@/assets/img/lightMobHero.png';
import herolightBlue from '@/assets/img/heroLightBlue.png';
</script>

<template>
  <div class="h-screen bg-no-repeat relative max-lg:bg-none max-lg:h-full">
    <div class="absolute top-0 left-[-100px] pointer-events-none">
      <img :src="heroMobLight" alt="heroLight" />
    </div>
    <div class="absolute bottom-[20px] right-0 pointer-events-none max-sm:hidden">
      <img :src="herolightBlue" alt="heroLight" />
    </div>
    <div
      class="heroContainer flex flex-col items-start justify-center gap-16 max-lg:gap-8 max-lg:w-full max-lg:justify-center max-lg:h-full max-lg:items-center"
    >
      <div class="flex flex-col items-start gap-8 w-full max-lg:justify-center max-lg:items-center">
        <div class="heroUnderTitle max-sm:text-[14px]">Leading AI Tools to Grow Your Business</div>
        <div
          class="flex flex-col items-start gap-6 w-full max-lg:justify-center max-lg:items-center"
        >
          <div class="HeroTitle max-lg:text-center">Automate game testing with AI agents</div>
          <div class="HeroSubtitle max-lg:text-center">
            Our agents play through your game like real users — finding bugs before your players do.
          </div>
        </div>
      </div>
      <div class="flex items-start gap-6 max-md:flex-col">
        <ColorButton />
        <TransparentBtn class="max-md:w-full" />
      </div>

      <div
        class="w-full z-0 absolute right-0 top-[50%] translate-y-[-50%] max-w-[800px] max-xl:max-w-[600px] max-lg:hidden"
      >
        <img :src="bgHero" alt="robot" class="animate-float" />
      </div>

      <div class="w-full z-10 max-w-[400px] hidden max-lg:flex mt-[-40px]">
        <img :src="heroMobBg" alt="robot" class="animate-float" />
      </div>
    </div>
  </div>
</template>

<style></style>
