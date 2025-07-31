<script setup lang="ts">
import lightLeft from '@/assets/img/everythingLightLeft.png';
import lightRight from '@/assets/img/everythingLightRight.png';
import Section from '../ui/Section/Section.vue';
import BlogCard from '@/components/Blog/shared/BlogCard.vue';

// Fetch latest blog posts from Directus
const { data: blogPosts } = useFetch('/api/blog', {
  query: {
    limit: 3,
    page: 1,
  },
});

// Get the latest 3 blog posts
const featuredPosts = computed(() => {
  if (!blogPosts.value?.posts) return [];
  return blogPosts.value.posts.slice(0, 3);
});

const windowWidth = ref(0);

function updateWidth() {
  if (process.client) {
    windowWidth.value = window.innerWidth;
  }
}

onMounted(() => {
  if (process.client) {
    windowWidth.value = window.innerWidth;
    window.addEventListener('resize', updateWidth);
  }
});

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('resize', updateWidth);
  }
});
</script>

<template>
  <div class="relative">
    <div
      class="absolute top-[-220px] left-0 pointer-events-none w-[996px] h-[764px] max-md:w-[370px] max-md:h-[285px] max-md:top-[-40px]"
    >
      <img :src="lightLeft" alt="lightLeft" />
    </div>
    <div
      class="absolute h-[777px] top-[-270px] pointer-events-none right-0 max-md:w-[370px] max-md:h-[285px] max-md:top-[-40px]"
    >
      <img :src="lightRight" alt="lightRight" />
    </div>
    <Section
      text-wrap-class="!mb-[48px] max-md:!mb-[32px]"
      title="Featured Articles"
      subtitle="Insights on modern compliance, automation, and operational excellence in school districts."
      align="left"
      text-subtitle=""
    >
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
        <BlogCard
          v-for="(post, index) in featuredPosts"
          :key="post.id"
          :post="post"
          variant="default"
          :class="
            index === 2
              ? windowWidth < 769
                ? 'right-[0%]'
                : windowWidth < 1285
                  ? 'right-[-50%] relative'
                  : ''
              : ''
          "
        />
      </div>
    </Section>
  </div>
</template>

<style scoped></style>
