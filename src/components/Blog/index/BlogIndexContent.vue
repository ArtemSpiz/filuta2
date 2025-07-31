<template>
  <div>
    <BlogHero />

    <!-- Blog Content Section -->
    <Section padding="lg" text-wrap-class="" text-subtitle="">
      <div
        class="max-w-7xl flex flex-col gap-14 py-[100px] max-xl:py-20 max-lg:py-16 max-md:py-12 max-md:gap-8"
      >
        <!-- Category Filter -->
        <CategoryFilter
          :categories="categories"
          :active-index="activeIndex"
          @category-change="handleCategoryChange"
        />

        <LoadingState v-if="pending" />

        <div v-else-if="blogData?.posts?.length" class="space-y-12">
          <!-- Featured Post -->
          <BlogCard v-if="blogData.posts[0]" :post="blogData.posts[0]" variant="featured" />

          <!-- Regular Posts Grid -->
          <BlogGrid>
            <BlogCard v-for="post in displayPosts" :key="post.id" :post="post" variant="default" />
          </BlogGrid>

          <!-- Load More Button -->
          <LoadMoreButton :has-more="blogData?.pagination?.hasNext" @load-more="loadMore" />

          <!-- Pagination -->
          <Pagination
            v-if="blogData?.pagination?.total > 1"
            :pagination="blogData.pagination"
            :current-page="currentPage"
            :visible-pages="visiblePages"
            @change="changePage"
          />
        </div>

        <!-- Empty State -->
        <EmptyState v-else />
      </div>
    </Section>
  </div>
</template>

<script setup lang="ts">
import Section from '@/components/ui/Section/Section.vue';
import BlogHero from '@/components/Blog/shared/BlogHero.vue';
import LoadingState from '@/components/Blog/shared/LoadingState.vue';
import BlogCard from '@/components/Blog/shared/BlogCard.vue';
import BlogGrid from '@/components/Blog/shared/BlogGrid.vue';
import CategoryFilter from '@/components/Blog/shared/CategoryFilter.vue';
import LoadMoreButton from '@/components/Blog/shared/LoadMoreButton.vue';
import Pagination from '@/components/Blog/shared/Pagination.vue';
import EmptyState from '@/components/Blog/shared/EmptyState.vue';

const activeIndex = ref(0);

// Use blog composable
const {
  currentPage,
  blogData,
  pending,
  displayPosts,
  visiblePages,
  changePage,
  categories,
  selectedCategory,
  selectCategory,
} = useBlog();

// Set active index based on current category
watch(
  selectedCategory,
  newCategory => {
    const categoryIndex = categories.value.findIndex(
      (cat: any) => (cat as any).value === newCategory
    );
    activeIndex.value = categoryIndex >= 0 ? categoryIndex : 0;
  },
  { immediate: true }
);

const handleCategoryChange = (category: string) => {
  console.log('Category changed to:', category);
  selectCategory(category);
};

const loadMore = () => {
  // Implement load more functionality
  console.log('Load more clicked');
};
</script>
