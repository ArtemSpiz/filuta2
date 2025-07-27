// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';

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
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  // Runtime config
  runtimeConfig: {
    // Private keys (only available on server-side)
    directusUrl: process.env.DIRECTUS_URL || 'http://localhost:8055',
    directusToken: process.env.DIRECTUS_TOKEN || '',

    // Public keys (exposed to client-side)
    public: {
      siteUrl: process.env.SITE_URL || 'http://localhost:3000',
    },
  },

  // Nitro configuration
  nitro: {
    compressPublicAssets: true,
    minify: true,
  },

  // Image configuration
  image: {
    quality: 80,
    format: ['webp', 'avif', 'jpg'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },

  // Tailwind configuration
  tailwindcss: {
    configPath: '~/tailwind.config.ts',
  },

  // Google Fonts
  googleFonts: {
    families: {
      'IBM Plex Sans': [300, 400, 500, 600, 700],
      'JetBrains Mono': [400, 500, 600, 700],
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
  },

  // Color mode
  colorMode: {
    classSuffix: '',
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
    // inlineSSRStyles: false, // Removed as it's deprecated
  },
});
