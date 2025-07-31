<script setup lang="ts">
interface Props {
  imageId?: string;
  alt: string;
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'jpg' | 'png';
  fit?: 'cover' | 'contain' | 'inside' | 'outside';
  loading?: 'lazy' | 'eager';
}

const props = withDefaults(defineProps<Props>(), {
  imageId: undefined,
  alt: '',
  width: 800,
  height: 600,
  quality: 85,
  format: 'webp',
  fit: 'cover',
  loading: 'lazy',
});

const getDirectusConfig = () => {
  const config = useRuntimeConfig();
  return {
    directusUrl: config.directusUrl || 'https://filuta-ai-website.directus.app',
    directusToken: config.directusToken || '',
  };
};

const imageUrl = computed(() => {
  if (props.imageId && props.imageId.startsWith('http')) {
    return props.imageId;
  }

  if (props.imageId && !props.imageId.startsWith('http')) {
    const { directusUrl, directusToken } = getDirectusConfig();
    const url = `${directusUrl}/assets/${props.imageId}?width=${props.width}&height=${props.height}&quality=85&format=webp&fit=cover&access_token=${directusToken}`;
    return url;
  }

  return props.imageId || '/img/blogImage1.png';
});

const hasImage = computed(() => !!props.imageId);
const imageError = ref(false);

const handleImageError = () => {
  // Fallback to default image on error
};
</script>

<template>
  <NuxtImg
    v-if="hasImage && !imageError"
    :src="imageUrl"
    :alt="alt"
    :width="width"
    :height="height"
    :loading="loading"
    class="object-cover hover:scale-105 transition-transform duration-300"
    @error="handleImageError"
  />
  <div v-else class="bg-dark-700 flex items-center justify-center">
    <span class="text-gray-500 text-sm">No image</span>
  </div>
</template>
