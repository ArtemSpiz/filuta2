<template>
  <div v-if="posts.length > 0" class="bg-dark-800 rounded-xl p-6">
    <h3 class="text-white font-semibold mb-4">Related Posts</h3>
    <div class="space-y-4">
      <article
        v-for="post in posts"
        :key="post.id"
        class="border-b border-dark-700 pb-4 last:border-b-0 last:pb-0"
      >
        <NuxtLink :to="`/blog/${post.slug}`" class="group">
          <h4
            class="text-white font-medium group-hover:text-brand-primary transition-colors duration-200 line-clamp-2"
          >
            {{ post.title }}
          </h4>
          <p class="text-gray-400 text-sm mt-1 line-clamp-2">
            {{ post.subtitle }}
          </p>
        </NuxtLink>
      </article>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  posts: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
