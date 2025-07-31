<template>
  <div class="relative group">
    <!-- Direct video file from Directus -->
    <video
      v-if="videoFileUrl"
      :src="videoFileUrl"
      :alt="alt"
      :class="videoClasses"
      preload="metadata"
      muted
      @click="handleVideoClick"
    />
    <!-- Debug info -->
    <div v-if="videoFileUrl" class="text-xs text-gray-400 mt-2">Video URL: {{ videoFileUrl }}</div>
    <!-- Thumbnail for external video URLs -->
    <img
      v-else-if="videoUrl"
      :src="thumbnailUrl"
      :alt="alt"
      :class="imageClasses"
      @click="handleVideoClick"
    />
    <!-- Fallback image -->
    <img v-else :src="fallbackSrc" :alt="alt" :class="imageClasses" />

    <!-- Play button overlay -->
    <div
      v-if="showPlayButton"
      class="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
      @click="handleVideoClick"
    >
      <div class="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
        <svg class="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  video?: any; // Directus file object or string (ID)
  videoUrl?: string; // External video URL (YouTube, Vimeo, etc.)
  alt: string;
  width?: number;
  height?: number;
  showPlayButton?: boolean;
  fallbackSrc?: string;
  videoClasses?: string;
  imageClasses?: string;
}

const props = withDefaults(defineProps<Props>(), {
  video: undefined,
  videoUrl: undefined,
  width: 400,
  height: 300,
  showPlayButton: true,
  fallbackSrc: '/img/video1.png',
  videoClasses: 'w-full h-full object-cover rounded-md',
  imageClasses: 'w-full h-full object-cover rounded-md',
});

// Construct Directus file URL from file object or ID
const videoFileUrl = computed(() => {
  if (!props.video) return null;

  // If it's already a full URL, return as is
  if (typeof props.video === 'string' && props.video.startsWith('http')) {
    return props.video;
  }

  // If it's a Directus file object
  if (props.video && typeof props.video === 'object' && props.video.id) {
    const directusUrl = process.env.DIRECTUS_URL;
    return `${directusUrl}/assets/${props.video.id}`;
  }

  // If it's a Directus file ID string
  if (typeof props.video === 'string') {
    const directusUrl = process.env.DIRECTUS_URL;
    return `${directusUrl}/assets/${props.video}`;
  }

  return null;
});

// Get thumbnail URL for external videos
const thumbnailUrl = computed(() => {
  if (!props.videoUrl) return props.fallbackSrc;

  // YouTube
  const youtubeId = props.videoUrl.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/live\/)([^&\n?#]+)/
  )?.[1];
  if (youtubeId) {
    return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
  }

  // Vimeo
  const vimeoId = props.videoUrl.match(/vimeo\.com\/(\d+)/)?.[1];
  if (vimeoId) {
    return `https://vumbnail.com/${vimeoId}.jpg`;
  }

  return props.fallbackSrc;
});

// Handle video click
const handleVideoClick = () => {
  if (videoFileUrl.value) {
    // For direct videos, open in fullscreen
    const videoElement = document.querySelector('video') as HTMLVideoElement;
    if (videoElement) {
      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
      } else if ((videoElement as any).webkitRequestFullscreen) {
        (videoElement as any).webkitRequestFullscreen();
      } else if ((videoElement as any).msRequestFullscreen) {
        (videoElement as any).msRequestFullscreen();
      }
      videoElement.play();
    }
    return;
  }

  if (props.videoUrl) {
    // For external videos, open in new tab
    window.open(props.videoUrl, '_blank');
    return;
  }
};
</script>

<style scoped>
/* Custom video player styles can be added here */
</style>
