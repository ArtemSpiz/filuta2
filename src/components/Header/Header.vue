<script setup lang="ts">
import HeaderLogo from './HeaderLogo.vue';
import HeaderNavigation from './HeaderNavigation.vue';
import HeaderCTA from './HeaderCTA.vue';
import HeaderMobile from './HeaderMobile.vue';
</script>

<template>
  <div class="container absolute left-1/2 -translate-x-1/2 top-6 z-50">
    <div class="flex items-center justify-between w-full box-border bg-transparent z-10">
      <div class="flex items-center justify-between w-full">
        <HeaderLogo />
        <div class="flex items-center gap-[81px] max-lg:gap-[24px] max-md:hidden">
          <HeaderNavigation />
          <HeaderCTA />
        </div>
        <HeaderMobile class="hidden max-md:flex" />
      </div>
    </div>
  </div>
</template>
