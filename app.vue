<template>
  <div id="app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
// Global SEO and meta tags
useHead({
  title: 'Filuta - AI-Powered Compliance Solutions',
  meta: [
    {
      name: 'description',
      content:
        'Filuta provides AI-powered compliance solutions for government and education sectors. Automate manual processes and reduce risks with intelligent workflows.',
    },
    {
      name: 'keywords',
      content:
        'AI compliance, government compliance, education compliance, automation, risk management',
    },
    { name: 'author', content: 'Filuta' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Filuta - AI-Powered Compliance Solutions' },
    {
      property: 'og:description',
      content:
        'Filuta provides AI-powered compliance solutions for government and education sectors.',
    },
    { property: 'og:image', content: '/og-image.jpg' },
    { property: 'og:url', content: 'https://filuta.com' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Filuta - AI-Powered Compliance Solutions' },
    {
      name: 'twitter:description',
      content:
        'Filuta provides AI-powered compliance solutions for government and education sectors.',
    },
    { name: 'twitter:image', content: '/og-image.jpg' },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'canonical', href: 'https://filuta.com' },
  ],
});
</script>

<style>
/* Global page transition styles */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Ensure smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #1a1a1a;
}

::-webkit-scrollbar-thumb {
  background: #2b2a30;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #57c1ca;
}
</style>
