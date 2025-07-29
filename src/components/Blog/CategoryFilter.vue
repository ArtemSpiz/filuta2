<template>
  <div class="mb-12">
    <div class="flex flex-wrap gap-4 justify-center">
      <button
        v-for="category in categories"
        :key="category.value"
        :class="[
          'px-6 py-3 rounded-full text-sm font-medium transition-all duration-200',
          selectedCategory === category.value
            ? 'bg-brand-primary text-white shadow-glow'
            : 'bg-dark-800 text-gray-300 hover:bg-dark-700 hover:text-white',
        ]"
        @click="$emit('select', category.value)"
      >
        {{ category.label }}
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  categories: {
    type: Array,
    required: true,
  },
  selectedCategory: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['select']);
</script>
