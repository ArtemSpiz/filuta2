<script setup lang="ts">
import footerLogo from '@/assets/img/footerLogo.png';
import { FooterPartnersLinks, FooterLinks } from '@/content/footer';
import FooterPartners from './FooterPartners.vue';

const footerData = {
  copyright: '© 2025 Filuta AI. | Privacy policy | All Rights Reserved.',
};
</script>

<template>
  <div
    class="flex flex-col justify-center gap-[40px] bg-gray-100 px-[108px] pt-[72px] pb-[42px] max-md:gap-[24px] max-xl:px-[80px] max-lg:px-[60px] max-lg:pt-[60px] max-md:px-[40px] max-md:pb-[40px] max-md:pt-[50px] max-sm:px-[24px] max-sm:pb-[24px] max-sm:pt-[48px]"
  >
    <div class="flex flex-col justify-center max-md:gap-[24px]">
      <div class="flex gap-[47px] items-start max-lg:flex-col max-lg:gap-[32px]">
        <!-- Partners -->
        <FooterPartners :partners="FooterPartnersLinks" />

        <!-- Links -->
        <FooterLinksComponent :links="FooterLinks" />
      </div>

      <div class="w-full">
        <img :src="footerLogo" alt="" />
      </div>
    </div>

    <!-- Bottom Section -->
    <FooterBottom :copyright="footerData.copyright" />
  </div>
</template>

<style scoped></style>
