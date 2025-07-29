<template>
  <section :class="sectionClasses">
    <div class="container mx-auto">
      <!-- Header -->
      <div v-if="title || subtitle" :class="textWrapClass" class="text-center mb-14">
        <h2 v-if="title" class="Title mb-4">{{ title }}</h2>
        <p v-if="subtitle" :class="textSubtitle" class="Subtitle max-w-3xl mx-auto">
          {{ subtitle }}
        </p>
      </div>

      <!-- Content -->
      <div :class="contentClasses">
        <slot />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    textWrapClass: string;
    textSubtitle: string;
    title?: string;
    subtitle?: string;
    variant?: 'default' | 'narrow' | 'wide';
    padding?: 'sm' | 'md' | 'lg' | 'xl';
    align?: 'left' | 'center' | 'right';
  }>(),
  {
    variant: 'default',
    padding: 'lg',
    align: 'center',
  }
);

const sectionClasses = computed(() => {
  const baseClasses = 'w-full relative justify-center flex ';
  const paddingClasses = {
    sm: 'py-12 max-md:py-10',
    md: 'py-16 max-md:py-12',
    lg: 'py-[100px] max-xl:py-20 max-lg:py-16 max-md:py-12',
    xl: 'py-[120px] max-xl:py-[100px] max-lg:py-20 max-md:py-16',
  };

  return `${baseClasses} ${paddingClasses[props.padding]}`;
});

const contentClasses = computed(() => {
  const baseClasses = 'w-full';
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return `${baseClasses} ${alignClasses[props.align]}`;
});
</script>

<style scoped>
.Title {
  @apply font-["IBM_Plex_Sans"] text-[48px] font-normal leading-[130%];
  background: linear-gradient(90deg, #dad8fd 23.24%, #fff 50.62%, #dad8fd 79.62%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.Subtitle {
  @apply text-white text-[16px] w-full max-w-[420px] leading-[150%] font-ibm font-normal;
}

.Title {
  @apply text-3xl md:text-4xl lg:text-5xl font-normal text-white !leading-[130%];
}

.Subtitle {
  @apply text-lg md:text-xl text-subtitle-color leading-relaxed;
}
</style>
