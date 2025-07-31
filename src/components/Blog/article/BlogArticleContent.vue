<template>
  <div class="max-w-full mx-auto">
    <div class="flex gap-12">
      <!-- Main Content -->
      <BlogMainContent :title="post.title">
        <div v-html="post.content" />

        <!-- Article Footer -->
        <template #footer>
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
        </template>
      </BlogMainContent>

      <!-- Sidebar -->
      <div class="hidden lg:block lg:col-span-1">
        <RelatedPosts :posts="relatedPosts" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BlogPost } from '@/types/blog';
import BlogMainContent from '@/components/Blog/shared/BlogMainContent.vue';
import SocialSharing from '@/components/Blog/shared/SocialSharing.vue';
import RelatedPosts from '@/components/Blog/shared/RelatedPosts.vue';

interface Props {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

defineProps<Props>();
</script>
