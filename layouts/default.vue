<template>
  <div>
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Footer from '@/components/Footer/Footer.vue';
import Header from '@/components/Header/Header.vue';

// Layout logic can be added here if needed
</script>
