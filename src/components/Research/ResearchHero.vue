<script setup>
import HeaderLayout from "@/layout/Header/HeaderLayout.vue";
import ColorButton from "@/ui/ColorButton/ColorButton.vue";
</script>

<template>
  <div
    class="h-screen bg-[url('/src/assets/img/bgResearchHero.png')] bg-no-repeat bg-[100%,100%] flex flex-col max-md:gap-[70px] max-md:h-full max-sm:bg-[url('/src/assets/img/researchHeroBgMob.png')] max-md:pb-[66px]"
  >
    <HeaderLayout />
    <div
      class="heroContainer center flex-col max-lg:h-[calc(100vh-96px)] max-md:h-full max-sm:px-[24px]"
    >
      <div class="flex flex-col gap-[32px] center">
        <div
          class="heroUnderTitle text-center"
        >
          Research-Driven AI for a Smarter Tomorrow
        </div>
        <div class="flex flex-col gap-[24px] center text-center">
          <div class="HeroTitle">Research</div>
          <div class="HeroSubtitle max-w-[750px]">
            At Filuta AI, we’re pushing the boundaries of Composite AI by
            merging symbolic reasoning with neural networks. Our research drives
            breakthroughs in automation, logistics, game testing, and beyond —
            transforming complex systems into intelligent solutions.
          </div>
        </div>
      </div>
      <ColorButton text="Explore Our Research" />
    </div>
  </div>
</template>

<style scoped></style>
