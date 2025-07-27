<script setup>
import footerAirLogo from '@/assets/img/footerAirLogo.png';
import footerTechLogo from '@/assets/img/footerTechLogo.png';
import footerLogo from '@/assets/img/footerLogo.png';

const FooterPartners = [
  {
    logo: footerAirLogo,
    title: 'AIPlan4EU',
    subtitle:
      'The AIPlan4EU project is funded by the European Commission – H2020 research and innovation programme under grant agreement No 101016442',
  },
  {
    logo: footerTechLogo,
    title: 'CzechInvest',
    subtitle: 'We were supported by the system project Technological Incubation',
  },
];

const FooterLinks = [
  {
    title: 'Solutions',
    subtitles: [
      { subtitle: 'Government & Education', href: '/government-education' },
      { subtitle: 'Manufacturing', href: '#' },
      { subtitle: 'Logistics', href: '#' },
    ],
  },
  {
    title: 'Links',
    subtitles: [
      { subtitle: 'Platform', href: '#' },
      { subtitle: 'Research', href: '/research' },
      { subtitle: 'Team', href: '#' },
      { subtitle: 'Career', href: '#' },
      { subtitle: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Socials',
    subtitles: [{ subtitle: 'LinkedIn', href: '#' }],
  },
];
</script>

<template>
  <div
    class="flex flex-col justify-center gap-[40px] bg-[#f7f7f7] px-[108px] pt-[72px] pb-[42px] max-md:gap-[24px] max-xl:px-[80px] max-lg:px-[60px] max-lg:pt-[60px] max-md:px-[40px] max-md:pb-[40px] max-md:pt-[50px] max-sm:px-[24px] max-sm:pb-[24px] max-sm:pt-[48px]"
  >
    <div class="flex flex-col justify-center max-md:gap-[24px]">
      <div class="flex gap-[47px] items-start max-lg:flex-col max-lg:gap-[32px]">
        <!-- Partners -->
        <div
          class="flex flex-col items-start gap-6 min-w-[577px] w-[577px] max-xl:w-full max-xl:min-w-[auto] max-lg:max-w-[577px] max-md:gap-[16px]"
        >
          <div class="text-[#797878] font-['IBM Plex Mono'] text-[16px] font-light uppercase">
            Partners
          </div>
          <div class="flex flex-col gap-10 w-full max-sm:gap-[24px]">
            <div
              v-for="(card, index) in FooterPartners"
              :key="index"
              class="flex items-center gap-8 w-full max-xl:items-start max-sm:flex-col max-sm:gap-[12px]"
            >
              <div class="w-[201px] h-auto max-xl:w-[150px] max-md:w-[100px]">
                <img :src="card.logo" alt="partnerLogo" class="object-contain" />
              </div>
              <div class="flex flex-col items-start gap-2 flex-1">
                <div class="text-[#141414] font-['IBM Plex Sans'] text-[16px] leading-[130%]">
                  {{ card.title }}
                </div>
                <div class="text-[14px] text-[#141414b3] font-['IBM Plex Sans'] leading-[130%]">
                  {{ card.subtitle }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Links -->
        <div
          class="flex justify-between items-start w-full gap-12 max-sm:flex-col max-sm:gap-[32px]"
        >
          <div
            v-for="(link, index) in FooterLinks"
            :key="index"
            class="flex flex-col items-start gap-6 max-md:gap-[16px]"
          >
            <div class="text-[#797878] font-['IBM Plex Mono'] text-[16px] font-light uppercase">
              {{ link.title }}
            </div>
            <div class="flex flex-col items-start gap-3">
              <NuxtLink
                v-for="(item, subIndex) in link.subtitles"
                :key="subIndex"
                :to="item.href"
                class="relative text-[#141414] font-['IBM Plex Sans'] text-[16px] leading-[130%] cursor-pointer transition-colors duration-300 before:content-[''] before:absolute before:left-0 before:-bottom-[2px] before:w-0 before:h-[1px] before:bg-[#5C9BFA] before:transition-all before:duration-300 hover:before:w-full"
              >
                {{ item.subtitle }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Logo -->
      <NuxtLink to="/">
        <div class="w-full">
          <img :src="footerLogo" alt="logo" class="w-full h-auto object-contain" />
        </div>
      </NuxtLink>
    </div>

    <!-- Bottom Section -->
    <div
      class="flex justify-between items-center max-sm:grid max-sm:grid-cols-ddd max-sm:gap-[12px]"
    >
      <div class="text-[#797878] font-['IBM Plex Sans'] text-[16px] leading-[130%]">
        © 2025 Filuta AI.
      </div>
      <a class="text-[#797878] font-['IBM Plex Sans'] text-[16px] leading-[130%] cursor-pointer">
        Privacy policy
      </a>
      <a class="text-[#797878] font-['IBM Plex Sans'] text-[16px] leading-[130%] cursor-pointer">
        All Rights Reserved.
      </a>
    </div>
  </div>
</template>

<style scoped></style>
