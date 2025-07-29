<template>
  <article v-if="post.category == 'News'" class="flex flex-col gap-[24px]">
    <div
      class="w-full h-[484px] flex gap-[32px] self-stretch justify-between max-w-[1600px] p-[40px] border border-[#2B2A30] rounded-[20px] bg-[#141219] shadow-[0_-17px_44px_0_rgba(0,0,0,0.45)] max-xl:p-[30px] max-xl:h-[400px] max-lg:p-[20px] max-lg:h-[350px] max-md:h-max max-md:flex-col max-md:p-[16px] hover:border-brand-primary/50 transition-all duration-300 hover:shadow-glow"
    >
      <div class="flex flex-col justify-between flex-1 max-md:gap-[24px]">
        <div class="flex flex-col gap-[32px] max-md:gap-[16px]">
          <div class="text-[#57C1CA] font-ibm text-[14px] leading-[130%] tracking-[-0.28px]">
            {{ post.category }}
          </div>
          <div class="flex flex-col gap-[16px] max-md:gap-[12px]">
            <div
              class="text-[56px] text-white font-ibm leading-[125%] max-xl:text-[45px] max-lg:text-[40px] max-md:text-[35px] max-sm:text-[30px]"
            >
              {{ post.title }}
            </div>
            <div
              class="text-[rgba(255,255,255,0.60)] text-[16px] font-ibm leading-[150%] max-xl:w-[300px]"
            >
              {{ post.subtitle }}
            </div>
          </div>
        </div>
        <router-link :to="`/blog/${post.slug}`">
          <TransparentBtn text="Read" class="w-max"
        /></router-link>
      </div>
      <div
        class="rounded-[16px] h-full w-auto max-w-[520px] object-cover max-lg:w-[425px] max-md:w-full max-md:max-w-full"
      >
        <img :src="post.featured_image" alt="image" />
      </div>
    </div>
  </article>
</template>

<script setup>
import TransparentBtn from '@/components/ui/TransparentBtn/TransparentBtn.vue';

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>
