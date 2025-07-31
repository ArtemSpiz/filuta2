// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  // Enable SSR
  ssr: true,

  // Development tools
  devtools: { enabled: true },

  // Modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
  ],

  // App configuration
  app: {
    baseURL: '/',
    head: {
      title: 'Filuta - AI-Powered Compliance Solutions',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'AI-powered compliance solutions for government and education sectors. Streamline processes and reduce risks with intelligent automation.',
        },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/img/logo.png' },
        { rel: 'shortcut icon', type: 'image/png', href: '/img/logo.png' },
        { rel: 'apple-touch-icon', type: 'image/png', href: '/img/logo.png' },
      ],
    },
  },

  // Runtime config
  runtimeConfig: {
    // Private keys (only available on server-side)
    directusUrl: process.env.DIRECTUS_URL,
    directusToken: process.env.DIRECTUS_TOKEN,

    // Public keys (exposed to client-side)
    public: {
      siteUrl: process.env.SITE_URL || 'http://localhost:3000',
      directusUrl: process.env.DIRECTUS_URL,
      directusToken: process.env.DIRECTUS_TOKEN,
    },
  },

  // Nitro configuration
  nitro: {
    compressPublicAssets: true,
    minify: true,
    // Add compatibility date for latest features
    compatibilityDate: '2025-07-27',
  },

  // CSS
  css: ['./src/assets/css/main.css'],

  // Build configuration
  build: {
    transpile: ['gsap'],
  },

  // Vite configuration
  vite: {
    optimizeDeps: {
      include: ['gsap', 'lottie-web'],
    },
    assetsInclude: ['**/*.json'],
  },

  // Alias configuration
  alias: {
    '@': resolve(__dirname, './src'),
  },

  // Components configuration
  components: {
    dirs: ['~/src/components'],
  },

  // Experimental features
  experimental: {
    // Enable latest experimental features
    componentIslands: true,
    viewTransition: true,
  },
});
