<template>
  <BlogLayout>
    <!-- Hero Section -->
    <BlogHero />

    <!-- Blog Content -->
    <BlogContent>
      <!-- Category Filter -->
      <CategoryFilter
        :categories="categories"
        :selected-category="selectedCategory"
        @select="selectCategory"
      />

      <!-- Loading State -->
      <LoadingState v-if="pending" />

      <!-- Blog Posts Grid -->
      <div v-else-if="blogData?.posts?.length" class="space-y-12">
        <!-- Featured Post (if News category) -->
        <FeaturedPost
          v-if="selectedCategory === 'news' && blogData.posts.length > 0"
          :post="blogData.posts[0]"
        />

        <!-- Regular Grid -->
        <BlogGrid>
          <BlogPostCard v-for="post in displayPosts" :key="post.id" :post="post" />
        </BlogGrid>

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
    </BlogContent>
  </BlogLayout>
</template>

<script setup>
// SEO
definePageMeta({
  title: 'Blog',
  description:
    'Discover the latest trends in AI-powered compliance solutions, government regulations, and educational technology from our expert team.',
});

// Use SEO composable
import { setupPageSEO, pageSEOConfigs } from '~/composables/usePageSEO';
setupPageSEO(pageSEOConfigs.blog);

// Use blog composable
const {
  categories,
  selectedCategory,
  currentPage,
  blogData,
  pending,
  displayPosts,
  visiblePages,
  selectCategory,
  changePage,
} = useBlog();
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
