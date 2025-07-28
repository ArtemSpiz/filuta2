<script setup>
import ArticleHero from './ArticleHero.vue';
import inst from '@/assets/img/inst.png';
import x from '@/assets/img/x.png';
import facebook from '@/assets/img/facebook.png';
import image from '@/assets/img/blogImage1.png';
import light from '@/assets/img/lightArticleContent.png';
</script>

<template>
  <div>
    <ArticleHero />
    <div
      class="container flex gap-[120px] relative max-md:gap-[32px] max-md:flex-col py-[100px] max-xl:py-20 max-lg:py-16 max-md:py-12"
    >
      <div
        class="absolute pointer-events-none bottom-[-120px] left-0 max-md:top-[-70px] max-md:bottom-auto max-md:left-auto max-md:right-0 max-md:w-[435px] max-md:rotate-180"
      >
        <img :src="light" alt="" />
      </div>
      <div class="flex flex-col gap-[56px]">
        <div class="flex flex-col gap-[13px]">
          <div class="text-white text-[24px] font-ibm leading-[130%]">Categories</div>
          <div
            class="px-[12px] whitespace-nowrap h-[33px] w-max items-center justify-center flex rounded-full border cursor-pointer select-none text-[16px] font-mono uppercase bg-[linear-gradient(0deg,#302F45_-8.44%,#424069_107.14%)] text-[#9E92F5] border-[#484873]"
          >
            News
          </div>
        </div>

        <div class="flex flex-col gap-[13px]">
          <div class="text-white text-[24px] font-ibm leading-[130%]">Share</div>
          <div class="flex gap-[12px] self-stretch">
            <div
              class="p-[13px] cursor-pointer h-[50px] w-[50px]items-center justify-centerflex rounded-[12px] bg-[rgba(232,232,232,0.12)]"
            >
              <img
                :src="facebook"
                alt="facebook"
                class="max-w-[24px] max-h-[24px] min-w-[24px] min-h-[24px]"
              />
            </div>
            <div
              class="p-[13px] cursor-pointer h-[50px] w-[50px]center flex rounded-[12px] bg-[rgba(232,232,232,0.12)]"
            >
              <img :src="x" alt="x" class="max-w-[24px] max-h-[24px] min-w-[24px] min-h-[24px]" />
            </div>
            <div
              class="p-[13px] cursor-pointer h-[50px] w-[50px]items-center justify-centerflex rounded-[12px] bg-[rgba(232,232,232,0.12)]"
            >
              <img
                :src="inst"
                alt="inst"
                class="max-w-[24px] max-h-[24px] min-w-[24px] min-h-[24px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-[24px] self-stretch">
        <div class="text-[#E0E0E0] text-[16px] font-ibm leading-[130%]">
          In March, we had the chance to visit San Francisco for GDC and Pocket Gamer Connects. It
          was a great opportunity to reconnect with the industry, meet some familiar faces, and have
          a few good conversations about the future of AI in games. Both events gave us a lot to
          think about – from new trends and tech to the challenges studios are facing in development
          and testing. We're happy we could be there, soak up the atmosphere, and share a bit about
          what we're working on at Filuta.
        </div>

        <div class="w-full h-[420px] rounded-[16px] overflow-hidden">
          <img :src="image" alt="" class="object-cover" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
