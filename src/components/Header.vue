<script setup>
import { ref } from 'vue';
import logo from '@/assets/img/headerLogo.png';
import ArrowIcon from '@/assets/svg/ArrowIcon.vue';
import headerIcon1 from '@/assets/img/headerIcon1.png';
import headerIcon2 from '@/assets/img/headerIcon2.png';
import headerIcon3 from '@/assets/img/headerIcon3.png';
import headerIcon6 from '@/assets/img/headerIcon6.png';
import headerIcon7 from '@/assets/img/headerIcon7.png';
import headerIcon8 from '@/assets/img/headerIcon8.png';
import BurgerIcon from '@/assets/svg/BurgerIcon.vue';
import Cross from '@/assets/svg/Cross.vue';

const headerNavs = [
  {
    title: 'Solutions',
    arrow: true,
    href: '#',
    links: [
      {
        icon: headerIcon1,
        link: 'Automotive Infotainment',
        href: '#',
      },
      { icon: headerIcon3, link: 'Defence Simulators', href: '#' },
      {
        icon: headerIcon2,
        link: 'Government & Education ',
        href: '/government-education',
      },
    ],
  },
  {
    title: 'Research',
    arrow: false,
    href: '/research',
  },
  {
    title: 'Company',
    arrow: true,
    href: '#',
    links: [
      {
        icon: headerIcon6,
        link: 'About us',
        href: '/about-us',
        subtitle: 'Everything you need to know about Filuta',
      },
      {
        icon: headerIcon8,
        link: 'Blog ',
        href: '/blog',
        subtitle: 'Read our latest news and updates',
      },
      {
        icon: headerIcon7,
        link: 'Career',
        href: '#',
        subtitle: 'Let’s build the future of AI together',
      },
    ],
  },
];

const burgerOpen = ref(false);
function handlerBurgerOpen() {
  burgerOpen.value = !burgerOpen.value;
}

const openIndex = ref(null);

const toggleDropdown = index => {
  if (!headerNavs[index].arrow) return;
  openIndex.value = openIndex.value === index ? null : index;
};

const isOpen = index => openIndex.value === index;
</script>

<template>
  <div class="m-auto flex items-center justify-between w-full box-border container">
    <div class="flex items-center justify-between w-full">
      <NuxtLink to="/">
        <div class="w-[44px] h-[46px] shrink-0">
          <img :src="logo" alt="logo" />
        </div>
      </NuxtLink>
      <div class="flex items-center gap-[81px] max-lg:gap-[24px] max-md:hidden">
        <div class="flex items-center gap-8 relative max-lg:gap-[24px]">
          <div
            v-for="(navItem, index) in headerNavs"
            :key="index"
            class="flex items-center relative"
          >
            <NuxtLink
              :class="[
                'flex items-center gap-2 font-light text-base font-ibm cursor-pointer transition-all duration-500',
                {
                  'text-[#9e92f5]': isOpen(index),
                  'text-white': !isOpen(index),
                },
              ]"
              :to="navItem.href"
              @click="toggleDropdown(index)"
            >
              {{ navItem.title }}
              <ArrowIcon
                v-if="navItem.arrow"
                :class="[
                  'transition-all duration-300',
                  isOpen(index) && 'rotate-180 [&>path]:fill-[#9e92f5]',
                ]"
              />
            </NuxtLink>
            <div
              :class="[
                'absolute top-[calc(100%+22px)] pointer-events-none right-0 w-max flex flex-col items-start gap-2 p-3 rounded-[10px] border border-white/20 bg-[#0F202115] backdrop-blur-[10px] opacity-0  transition-all duration-300',
                {
                  'opacity-100 visible z-20 pointer-events-auto ': isOpen(index),
                },
              ]"
            >
              <NuxtLink
                v-for="(linkItem, linkIndex) in navItem.links"
                :key="linkIndex"
                :to="linkItem.href"
                class="link-hover-bg relative flex items-center gap-[12px] w-full px-3.5 py-[14px] rounded-[8px] bg-gradient-to-l from-[#101f1f66] to-[#0d212866] transition-[background] duration-500"
              >
                <div class="w-5 h-5 z-10">
                  <img v-if="linkItem.icon" :src="linkItem.icon" alt="icon" />
                </div>
                <div class="flex flex-col gap-[2px]">
                  <div class="z-10 font-light text-white text-[16px] leading-[20px]">
                    {{ linkItem.link }}
                  </div>
                  <div
                    v-if="linkItem.subtitle"
                    class="text-[14px] font-ibm font-light leading-5 text-graySubtitle"
                  >
                    {{ linkItem.subtitle }}
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
        <button
          class="flex items-center justify-center h-12 px-6 gap-2 rounded-full border border-white bg-white/5 backdrop-blur-[6px] text-white font-ibm font-normal text-base"
        >
          Contact us
        </button>
      </div>
      <BurgerIcon class="hidden max-md:flex cursor-pointer" @click="handlerBurgerOpen()" />
      <div
        v-if="burgerOpen"
        class="fixed top-0 left-0 w-screen transition-[height] duration-300 flex-col h-max p-[24px] z-[9999] bg-[#000] flex items-center justify-center gap-[40px]"
      >
        <div class="flex justify-between w-full items-center">
          <NuxtLink to="/">
            <div class="w-[44px] h-[46px] shrink-0">
              <img :src="logo" alt="logo" />
            </div>
          </NuxtLink>
          <Cross class="cursor-pointer" @click="handlerBurgerOpen()" />
        </div>

        <div class="flex flex-col gap-[56px] justify-center items-center w-full">
          <div class="flex flex-col gap-[32px] justify-center items-center w-full">
            <div
              v-for="(navItem, index) in headerNavs"
              :key="index"
              class="flex items-center relative w-full gap-[16px] flex-col"
            >
              <NuxtLink
                :to="navItem.href"
                :class="[
                  'flex items-center justify-between font-light text-base font-ibm cursor-pointer w-full transition-all duration-500',
                  {
                    'text-[#9e92f5]': isOpen(index),
                    'text-white': !isOpen(index),
                  },
                ]"
                @click="toggleDropdown(index)"
              >
                {{ navItem.title }}
                <ArrowIcon
                  v-if="navItem.arrow"
                  :class="[
                    'transition-all duration-300',
                    isOpen(index) && 'rotate-180 [&>path]:fill-[#9e92f5]',
                  ]"
                />
              </NuxtLink>
              <div
                v-if="isOpen(index)"
                :class="[
                  ' w-full flex flex-col items-start gap-2 p-3 rounded-[10px] border border-white/20 bg-[#0F202115] backdrop-blur-[10px] opacity-0  transition-all duration-300',
                  {
                    'opacity-100 visible': isOpen(index),
                  },
                ]"
              >
                <NuxtLink
                  v-for="(linkItem, linkIndex) in navItem.links"
                  :key="linkIndex"
                  :to="linkItem.href"
                  class="link-hover-bg relative flex items-center gap-[12px] w-full px-[12px] py-[14px] rounded-[8px] font-light text-white text-[16px] leading-[20px] bg-gradient-to-l from-[#101f1f66] to-[#0d212866] transition-[background] duration-500"
                >
                  <div class="w-5 h-5 z-10">
                    <img v-if="linkItem.icon" :src="linkItem.icon" alt="icon" />
                  </div>
                  <div class="flex flex-col gap-[2px] justify-start items-start">
                    <div class="z-10 font-light text-white text-[16px] leading-[20px]">
                      {{ linkItem.link }}
                    </div>
                    <div
                      v-if="linkItem.subtitle"
                      class="text-[14px] font-ibm font-light leading-5 text-graySubtitle"
                    >
                      {{ linkItem.subtitle }}
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
          <button
            class="flex items-center justify-center w-full h-12 px-6 gap-2 rounded-full border border-white bg-white/5 backdrop-blur-[6px] text-white font-ibm font-normal text-base"
          >
            Contact us
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.link-hover-bg {
  position: relative;
  overflow: hidden;
}

.link-hover-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(270deg, rgba(16, 31, 31, 0.2) 0%, #4b52cf 100%);
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  z-index: 0;
  border-radius: 8px;
}

.link-hover-bg:hover::before {
  opacity: 1;
}
</style>
