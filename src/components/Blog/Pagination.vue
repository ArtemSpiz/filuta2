<template>
  <div v-if="pagination.total > 1" class="flex justify-center mt-12">
    <nav class="flex items-center space-x-2">
      <button
        v-if="pagination.hasPrev"
        @click="$emit('change', currentPage - 1)"
        class="px-4 py-2 text-gray-400 hover:text-white transition-colors duration-200"
      >
        Previous
      </button>

      <div class="flex space-x-1">
        <button
          v-for="page in visiblePages"
          :key="page"
          @click="$emit('change', page)"
          :class="[
            'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
            page === currentPage
              ? 'bg-brand-primary text-white'
              : 'bg-dark-800 text-gray-300 hover:bg-dark-700 hover:text-white',
          ]"
        >
          {{ page }}
        </button>
      </div>

      <button
        v-if="pagination.hasNext"
        @click="$emit('change', currentPage + 1)"
        class="px-4 py-2 text-gray-400 hover:text-white transition-colors duration-200"
      >
        Next
      </button>
    </nav>
  </div>
</template>

<script setup>
const props = defineProps({
  pagination: {
    type: Object,
    required: true,
  },
  currentPage: {
    type: Number,
    required: true,
  },
  visiblePages: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(['change']);
</script>
