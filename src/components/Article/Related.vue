<script setup lang="ts">
import BlogCard from '@/components/Blog/shared/BlogCard.vue';
import TransparentBtn from '../../components/ui/TransparentBtn/TransparentBtn.vue';
import type { PropType } from 'vue';

const props = defineProps({
  relatedPosts: {
    type: Array as PropType<any[]>,
    default: () => [],
  },
  type: {
    type: String as PropType<'blog' | 'case-study'>,
    default: 'blog',
  },
});
</script>

<template>
  <div class="container flex gap-[48px] flex-col py-[100px] max-xl:py-20 max-lg:py-16 max-md:py-12">
    <div class="flex justify-between items-center max-md:center">
      <div class="Title">Related articles</div>
      <NuxtLink :to="type === 'case-study' ? '/case-studies' : '/blog'">
        <TransparentBtn :text="type === 'case-study' ? 'All case studies' : 'All articles'" />
      </NuxtLink>
    </div>

    <div class="grid grid-cols-3 gap-[24px] max-xl:grid-cols-2 max-md:flex max-md:flex-col">
      <BlogCard
        v-for="post in props.relatedPosts"
        :key="post.id"
        :post="post"
        variant="default"
        :type="type"
      />
    </div>
  </div>
</template>

<style scoped>
.categories {
  scrollbar-width: none;
}
</style>
