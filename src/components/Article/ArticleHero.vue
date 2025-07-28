<script setup>
import image from '@/assets/img/blogImage1.png';
import light from '@/assets/img/intelligentLight.png';
</script>

<template>
  <div
    class="h-full pb-[113px] relative flex flex-col gap-[68px] max-md:gap-[38px] max-md:h-max max-lg:pb-[62px]"
  >
    <div
      class="absolute top-[-150px] right-[-20px] w-[1183px] h-auto max-md:w-[507px] pointer-events-none max-md:top-[-70px]"
    >
      <img :src="light" alt="" />
    </div>
    <div class="container gap-[70px] ptNone flex-col z-10 max-md:gap-[40px]">
      <div class="flex flex-col gap-[32px] max-md:items-start mb-16 max-md:mb-9">
        <div class="heroUnderTitle">News</div>
        <div class="flex flex-col gap-[24px] max-md:items-start">
          <div class="HeroTitle !max-w-full max-md:text-start">GDC & PGC San Francisco 2025</div>
          <div class="HeroSubtitle !max-w-full max-md:text-start">
            A quick look back at our time in San Francisco during GDC and PGC.
          </div>
        </div>
      </div>

      <div class="w-full h-[420px] rounded-[16px] overflow-hidden">
        <img
          :src="image"
          alt=""
          class="object-cover object-[bottom_-200px_right_0px] max-md:object-center"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
