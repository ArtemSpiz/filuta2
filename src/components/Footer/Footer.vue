<script setup lang="ts">
import footerLogo from '@/assets/img/footerLogo.png';
import { FooterPartnersLinks, FooterLinks } from '@/content/footer';
import FooterPartners from './FooterPartners.vue';

const footerData = {
  logo: footerLogo,
  copyright: '© 2024 Filuta. All rights reserved.',
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
    </div>

    <!-- Bottom Section -->
    <FooterBottom :logo="footerData.logo" :copyright="footerData.copyright" />
  </div>
</template>

<style scoped></style>
