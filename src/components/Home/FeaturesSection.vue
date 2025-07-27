<template>
  <section class="py-20 bg-dark-900">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Filuta?</h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Our AI-powered platform transforms compliance management with intelligent automation and
          risk reduction capabilities.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="feature in features"
          :key="feature.id"
          class="bg-dark-800 rounded-xl p-8 border border-dark-700 hover:border-brand-primary/50 transition-all duration-300 hover:shadow-glow group"
        >
          <div
            class="w-16 h-16 bg-brand-primary/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-primary/30 transition-colors duration-300"
          >
            <component :is="feature.icon" class="w-8 h-8 text-brand-primary" />
          </div>
          <h3 class="text-xl font-semibold text-white mb-4">{{ feature.title }}</h3>
          <p class="text-gray-300 leading-relaxed">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { features } from '@/content/features';
</script>
