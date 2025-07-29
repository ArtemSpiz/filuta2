<template>
  <section class="py-20 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div v-for="stat in stats" :key="stat.label">
          <div class="text-3xl md:text-4xl font-bold text-brand-primary mb-2">
            {{ stat.value }}
          </div>
          <div class="text-gray-300">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Stats data
const stats = [
  { value: '95%', label: 'Risk Reduction' },
  { value: '80%', label: 'Time Saved' },
  { value: '500+', label: 'Organizations' },
  { value: '24/7', label: 'Monitoring' },
];
</script>
