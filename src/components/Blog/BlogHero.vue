<script setup>
import HeaderLayout from "@/layout/Header/HeaderLayout.vue";
</script>

<template>
  <div
    class="h-full flex flex-col pb-[170px] gap-[68px] bg-[url('/src/assets/img/bgResearchHero.png')] bg-no-repeat bg-[100%,100%] max-md:h-full max-sm:bg-[url('/src/assets/img/researchHeroBgMob.png')] max-lg:pb-[130px] max-md:pb-[100px] max-sm:gap-[14px] max-sm:pb-[76px]"
  >
    <HeaderLayout />
    <div class="heroContainer h-full flex center flex-col gap-[32px]">
      <div class="heroUnderTitle">Blog</div>
      <div class="flex flex-col center gap-[24px]">
        <div
          class="HeroTitle text-center max-w-full flex flex-col max-sm:max-w-[375px]"
        >
          Insights & Updates: <span>Explore Our Latest Blog Posts</span>
        </div>
        <div class="HeroSubtitle text-center max-w-full">
          Explore expert perspectives, product news, and practical guides from
          the Filuta team.
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
