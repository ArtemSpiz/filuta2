<script setup>
import Header from "@/layout/Header/HeaderLayout";
import ColorButton from "@/ui/ColorButton/ColorButton";
import TransparentBtn from "@/ui/TransparentBtn/TransparentBtn.vue";
import heroMobBg from "@/assets/img/bgMobHero.png";
import heroMobLight from "@/assets/img/lightMobHero.png";
</script>

<template>
  <div
    class="h-screen bg-fullBg bg-no-repeat bg-heroBg relative max-lg:bg-none max-lg:h-full"
  >
    <div
      class="hidden absolute top-0 left-[-100px] max-lg:flex pointer-events-none"
    >
      <img :src="heroMobLight" alt="heroLight" />
    </div>
    <Header />
    <div
      class="flex flex-col items-start justify-center gap-16 h-[calc(100vh-96px)] px-[108px] max-lg:gap-8 max-lg:w-full max-lg:justify-center max-lg:h-full max-lg:items-center max-xl:px-[80px] max-lg:px-[60px] max-md:px-[40px] max-sm:px-[16px]"
    >
      <div
        class="flex flex-col items-start gap-8 w-full max-lg:justify-center max-lg:items-center"
      >
        <div
          class="text-[#57c0c9] uppercase font-light text-[16px] font-mono max-sm:text-[14px]"
        >
          Leading AI Tools to Grow Your Business
        </div>
        <div
          class="flex flex-col items-start gap-6 w-full max-lg:justify-center max-lg:items-center"
        >
          <div
            class="text-white text-[66px] w-full max-w-[650px] leading-[120%] font-ibm font-normal max-xl:text-[60px] max-lg:text-[55px] max-lg:text-center max-md:text-[45px] max-sm:text-[36px]"
          >
            Automate game testing with AI agents
          </div>
          <div
            class="text-white text-[16px] leading-[150%] font-ibm font-normal w-full max-w-[400px] max-lg:text-center"
          >
            Our agents play through your game like real users — finding bugs
            before your players do.
          </div>
        </div>
      </div>
      <div class="flex items-start gap-6 max-md:flex-col">
        <ColorButton />
        <TransparentBtn class="max-md:w-full" />
      </div>

      <div class="w-full max-w-[400px] hidden max-lg:flex mt-[-40px]">
        <img :src="heroMobBg" alt="robot" />
      </div>
    </div>
  </div>
</template>

<style></style>
