<script setup>
import lightGreen from '@/assets/img/govHeroLightGreen.png';
import lightBlue from '@/assets/img/govHeroLightBlue.png';
import ColorButton from '@/ui/ColorButton/ColorButton.vue';
import video from '@/assets/img/govHeroVideo.png';
import PlayIcon from '@/assets/svg/PlayIcon.vue';
</script>

<template>
  <div class="h-screen flex flex-col relative max-lg:gap-[21px] max-lg:pb-[60px] overflow-hidden">
    <div class="absolute top-0 left-0 w-[1118px] pointer-events-none max-md:w-[1000px]">
      <img :src="lightGreen" alt="lightGreen" />
    </div>
    <div class="absolute bottom-[30px] right-0 w-[1184px] pointer-events-none max-md:hidden">
      <img :src="lightBlue" alt="lightBlue" />
    </div>
    <div class="gap-[24px] heroContainer justify-center max-lg:center max-lg:gap-[45px]">
      <div
        class="flex flex-col gap-[64px] items-start justify-start max-lg:center max-lg:gap-[32px]"
      >
        <div class="flex flex-col gap-[32px] max-lg:center">
          <div class="heroUnderTitle">Vendor Compliance Monitor</div>
          <div class="flex flex-col gap-[24px] max-lg:center">
            <div class="HeroTitle">Government & Education</div>
            <div class="HeroSubtitle max-w-none">
              AI-powered functional testing that adapts in real time, uncovers edge cases, and helps
              your team scale QA efficiently.
            </div>
          </div>
        </div>

        <ColorButton text="Schedule a meeting" />
      </div>

      <div
        class="flex relative w-full z-10 max-w-[700px] h-[400px] p-[24px] justify-center items-center rounded-[20px] border border-[#2B2A30] bg-[#141219] shadow-[0px_-17px_44px_0px_rgba(0,0,0,0.45)] max-md:h-auto max-md:max-w-[500px] max-md:p-[12px]"
      >
        <div class="h-full w-full">
          <img :src="video" alt="video" />
        </div>

        <button
          class="px-[24px] absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] py-[14px] flex gap-[8px] border border-[#000] rounded-[900px] bg-[rgba(255,255,255,0.02)] backdrop-blur-[6px] items-center text-[#000] font-ibm text-[16px] font-normal max-md:w-[-webkit-max-content]"
        >
          How Filuta Works <PlayIcon />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
