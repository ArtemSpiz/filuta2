<script setup lang="ts">
import logo from '@/assets/img/headerLogo.png';
</script>

<template>
  <NuxtLink to="/">
    <div class="w-[44px] h-[46px] shrink-0">
      <img :src="logo" alt="logo" />
    </div>
  </NuxtLink>
</template>
