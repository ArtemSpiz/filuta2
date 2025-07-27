import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2.5rem',
        md: ' 3.75rem',
        lg: '5rem',
        xl: '6.75rem',
      },
    },
    extend: {
      fontFamily: {
        ibm: ['IBM Plex Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        'brand-primary': '#57C1CA',
        'brand-secondary': '#9E92F5',
        'dark-900': '#141219',
        'dark-800': '#1A1A1A',
        'dark-700': '#2B2A30',
        'dark-950': '#0A0A0A',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      screens: {
        xl: '1285px',
        lg: '1040px',
        md: '768px',
        sm: '640px',
        xs: '475px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '15': '3.75rem',
        '27': '6.75rem',
        '38': '9.5rem',
      },
      boxShadow: {
        glow: '0 0 20px rgba(87, 193, 202, 0.3)',
        'glow-purple': '0 0 20px rgba(158, 146, 245, 0.3)',
      },
      borderRadius: {
        '5xl': '2.5rem',
      },
    },
  },
  safelist: [
    'container',
    'gap-14',
    'items-center',
    'flex',
    'py-[100px]',
    'max-xl:py-20',
    'max-lg:py-16',
    'max-md:py-12',
  ],
  plugins: [],
} satisfies Config;
