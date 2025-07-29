<template>
  <div id="app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
// Global SEO and meta tags - single useHead call
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
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Filuta',
        url: 'https://filuta.com',
        logo: 'https://filuta.com/logo.png',
        description: 'AI-Powered Compliance Solutions',
        sameAs: ['https://linkedin.com/company/filuta', 'https://twitter.com/filuta'],
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Filuta',
        url: 'https://filuta.com',
      }),
    },
  ],
});

// Global error handling - temporarily disabled
// onErrorCaptured((error, instance, info) => {
//   console.error('Global error:', error, info);
//   return false;
// });
</script>

<style>
/* Global styles */
html {
  scroll-behavior: smooth;
}

body {
  font-family: 'IBM Plex Sans', sans-serif;
  color: #ffffff;
  line-height: 1.6;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #2b2a30;
}

::-webkit-scrollbar-thumb {
  background: #424069;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #57c1ca;
}

/* Utility classes */
.container {
  max-width: 1600px;
  margin: 0 auto;
}

/* Animation classes */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease;
}

.slide-up-enter-from {
  transform: translateY(20px);
  opacity: 0;
}

.slide-up-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
