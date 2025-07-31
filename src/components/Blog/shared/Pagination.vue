<template>
  <div v-if="pagination.total > 1" class="flex justify-center mt-12">
    <nav class="flex items-center space-x-2">
      <button
        v-if="pagination.hasPrev"
        class="px-4 py-2 text-gray-400 hover:text-white transition-colors duration-200"
        @click="$emit('change', currentPage - 1)"
      >
        Previous
      </button>

      <div class="flex space-x-1">
        <button
          v-for="page in visiblePages"
          :key="page"
          :class="[
            'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
            page === currentPage
              ? 'bg-brand-primary text-white'
              : 'bg-dark-800 text-gray-300 hover:bg-dark-700 hover:text-white',
          ]"
          @click="$emit('change', page)"
        >
          {{ page }}
        </button>
      </div>

      <button
        v-if="pagination.hasNext"
        class="px-4 py-2 text-gray-400 hover:text-white transition-colors duration-200"
        @click="$emit('change', currentPage + 1)"
      >
        Next
      </button>
    </nav>
  </div>
</template>

<script setup lang="ts">
interface BlogPagination {
  current: number;
  total: number;
  limit: number;
  totalPosts: number;
  hasNext: boolean;
  hasPrev: boolean;
}

interface Props {
  pagination: BlogPagination;
  currentPage: number;
  visiblePages: number[];
}

interface Emits {
  (e: 'change', page: number): void;
}

defineProps<Props>();
defineEmits<Emits>();
</script>
