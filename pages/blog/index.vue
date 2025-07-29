<template>
  <div>
    <!-- Hero Section -->
    <Section
      title="Blog"
      subtitle="Discover the latest trends in AI-powered compliance solutions, government regulations, and educational technology from our expert team."
      padding="lg"
      text-wrap-class=""
      text-subtitle=""
    >
      <BlogHero />
    </Section>

    <!-- Blog Content Section -->
    <Section padding="lg" text-wrap-class="" text-subtitle="">
      <div
        class="max-w-7xl mx-auto flex flex-col gap-14 py-[100px] max-xl:py-20 max-lg:py-16 max-md:py-12 max-md:gap-8"
      >
        <!-- Category Filter -->
        <div class="flex gap-[16px] container overflow-x-scroll categories snap-mandatory">
          <div
            v-for="(category, index) in categoriesWrap"
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
            @click="setActive(index)"
          >
            {{ category.title }}
          </div>
        </div>

        <!-- Loading State -->
        <LoadingState v-if="pending" />

        <!-- Blog Posts Grid -->
        <div v-else-if="blogData?.posts?.length" class="space-y-12">
          <!-- Featured Post (if News category) -->
          <FeaturedPost
            v-if="selectedCategory === 'news' && blogData.posts.length > 0"
            :post="blogData.posts[0]"
          />

          <BlogCardNewsWrap>
            <BlogCardNews v-for="post in displayPosts" :key="post.id" :post="post" />
          </BlogCardNewsWrap>
          <!-- Regular Grid -->
          <BlogGrid>
            <BlogPostCard v-for="post in displayPosts" :key="post.id" :post="post" />
          </BlogGrid>

          <div class="justify-center items-center w-full flex">
            <button
              class="h-[48px] px-[24px] justify-center items-center flex rounded-full border border-white bg-[rgba(255,255,255,0.02)] text-white text-[16px] font-ibm"
            >
              Load more
            </button>
          </div>

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

const categoriesWrap = [
  { title: 'All', value: 'all' },
  { title: 'News', value: 'news' },
  { title: 'Research', value: 'research' },
  { title: 'Government & Education', value: 'government-education' },
];

const activeIndex = ref(0);

function setActive(index) {
  activeIndex.value = index;
  const selected = categoriesWrap[index].value;
  selectCategory(selected);
}

// Use blog composable
const {
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

.categories {
  scrollbar-width: none;
}
</style>
