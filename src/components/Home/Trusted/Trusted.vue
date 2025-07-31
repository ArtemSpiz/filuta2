<script setup lang="ts">
import Section from '@/components/ui/Section/Section.vue';
import VideoPlayer from '@/components/ui/VideoPlayer/VideoPlayer.vue';
import OptimizedImage from '@/components/ui/OptimizedImage.vue';

// Fetch testimonials from Directus
const { data: testimonials } = useFetch('/api/testimonials');

// Transform testimonials for display
const transformedTestimonials = computed(() => {
  if (!testimonials.value) return [];

  return testimonials.value.map((testimonial: any) => ({
    id: testimonial.id,
    video_url: testimonial.video_url,
    video: testimonial.video, // Directus file object
    title: testimonial.title,
    name: testimonial.name,
    position: testimonial.position,
    company: testimonial.company,
    company_logo: testimonial.company_logo,
  }));
});
</script>

<template>
  <Section
    title="Trusted by Industry Leaders"
    align="center"
    text-wrap-class="mb-12"
    text-subtitle="!max-w-full "
    subtitle="How studios use Filuta AI to speed up releases, improve quality, and boost team focus."
  >
    <div
      class="flex gap-6 w-full justify-between max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:gap-[32px]"
    >
      <div
        v-for="testimonial in transformedTestimonials"
        :key="testimonial.id"
        class="flex flex-col items-start gap-[44px] flex-1 justify-between max-lg:max-w-[600px] max-lg:gap-[16px]"
      >
        <div class="flex flex-col items-start gap-6 max-lg:gap-[16px]">
          <div class="h-[266px] w-full cursor-pointer relative group">
            <VideoPlayer
              :video="testimonial.video"
              :video-url="testimonial.video_url"
              :alt="`${testimonial.name} testimonial`"
              class="h-full w-full"
            />
          </div>
          <div class="text-white font-ibm text-[16px] leading-[130%] text-left">
            {{ testimonial.title }}
          </div>
        </div>

        <div class="flex justify-between items-start w-full">
          <div class="flex flex-col gap-1 text-left">
            <div class="text-white font-ibm text-[16px] leading-[130%]">
              {{ testimonial.name }}
            </div>
            <div class="text-text-light-gray font-ibm text-[14px] leading-[130%]">
              {{ testimonial.position }} - {{ testimonial.company }}
            </div>
          </div>
          <div class="w-[128px] h-[31.872px] shrink-0">
            <OptimizedImage
              v-if="testimonial.company_logo?.id"
              :image-id="testimonial.company_logo.id"
              :alt="`${testimonial.company} logo`"
              :width="128"
              :height="32"
              class="w-full h-full object-contain"
            />
            <div v-else class="w-full h-full bg-gray-600 rounded flex items-center justify-center">
              <span class="text-white text-xs">{{ testimonial.company }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>

<style scoped></style>
