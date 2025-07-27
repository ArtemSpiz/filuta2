<script setup>
import ColorButton from '@/ui/ColorButton/ColorButton.vue';
</script>

<template>
  <div
    class="h-screen bg-[url('/img/bgResearchHero.png')] bg-no-repeat bg-cover bg-center flex flex-col max-md:gap-18 max-md:h-full max-sm:bg-[url('/img/researchHeroBgMob.png')] max-md:pb-16"
  >
    <div
      class="heroContainer flex items-center justify-center flex-col max-lg:h-[calc(100vh-96px)] max-md:h-full max-sm:px-6"
    >
      <div class="flex flex-col gap-8 items-center justify-center text-center">
        <div class="heroUnderTitle">Research-Driven AI for a Smarter Tomorrow</div>
        <div class="flex flex-col gap-6 items-center justify-center text-center">
          <div class="HeroTitle">Research</div>
          <div class="HeroSubtitle max-w-4xl mx-auto">
            At Filuta AI, we're pushing the boundaries of Composite AI by merging symbolic reasoning
            with neural networks. Our research drives breakthroughs in automation, logistics, game
            testing, and beyond — transforming complex systems into intelligent solutions.
          </div>
        </div>
      </div>
      <ColorButton text="Explore Our Research" />
    </div>
  </div>
</template>

<style scoped></style>
