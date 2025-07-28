<template>
  <div class="max-w-full mx-auto">
    <div class="flex gap-12">
      <!-- Main Content -->
      <BlogMainContent :title="post.title" :featured-image="post.featured_image">
        <div v-html="post.content"></div>

        <!-- <template #footer>
          <div class="flex items-center justify-center pb-5">
            <SocialSharing :post="post" />
            <NuxtLink
              to="/blog"
              class="inline-flex items-center text-brand-primary hover:text-brand-primary/80 transition-colors duration-200"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              Back to Blog
            </NuxtLink>
          </div>
        </template> -->
      </BlogMainContent>

      <!-- Sidebar -->
    </div>
  </div>
</template>

<script setup lang="ts">
interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  content: string;
  featured_image: string;
  category: string;
  published_at: string;
  meta_title?: string;
  meta_description?: string;
  seo_keywords?: string[];
}

defineProps<{
  post: BlogPost;
  relatedPosts: BlogPost[];
}>();
</script>
