<template>
  <div class="flex gap-[16px] overflow-x-scroll categories snap-mandatory">
    <div
      v-for="(category, index) in categories"
      :key="index"
      class="px-[12px] whitespace-nowrap h-[33px] justify-center items-center flex rounded-full border cursor-pointer select-none text-[16px] font-mono uppercase"
      :style="{
        background:
          index === activeIndex
            ? 'linear-gradient(0deg, #302F45 -8.44%, #424069 107.14%)'
            : 'linear-gradient(180deg, rgba(103, 103, 103, 0.30) 0.24%, rgba(19, 32, 48, 0.00) 120.36%)',
        color: index === activeIndex ? '#9E92F5' : '#8B8B8B',
        borderColor: index === activeIndex ? '#484873' : '#393939',
      }"
      @click="handleCategorySelect(index)"
    >
      {{ category.label }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface BlogCategory {
  value: string;
  label: string;
}

interface Props {
  categories: BlogCategory[];
  activeIndex: number;
}

interface Emits {
  (e: 'category-change', category: string): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const handleCategorySelect = (index: number) => {
  const selected = props.categories[index]?.value || 'all';
  emit('category-change', selected);
};
</script>

<style scoped>
.categories {
  scrollbar-width: none;
}
</style>
