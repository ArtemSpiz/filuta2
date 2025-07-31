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

const config = useRuntimeConfig();
const directusToken = String(config.public.directusToken);
const directusUrl = String(config.public.directusUrl);

const imageUrl = computed(() => {
  if (!props.imageId) return undefined;

  // Check if it's a Directus image ID (UUID format)
  const isDirectusId = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
    props.imageId
  );

  if (isDirectusId) {
    // Generate Directus optimized URL with authentication
    const params = new URLSearchParams();
    if (props.width) params.append('width', props.width.toString());
    if (props.height) params.append('height', props.height.toString());
    if (props.quality) params.append('quality', props.quality.toString());
    if (props.format) params.append('format', props.format);
    if (props.fit) params.append('fit', props.fit);

    // Add access token for authentication
    params.append('access_token', directusToken);

    const url = `${directusUrl}/assets/${props.imageId}?${params.toString()}`;
    console.log('Directus OptimizedImage URL:', url);
    return url;
  } else {
    // Return local image path as-is
    console.log('Local image path:', props.imageId);
    return props.imageId;
  }
});

const hasImage = computed(() => !!props.imageId);
const imageError = ref(false);

const handleImageError = () => {
  console.log('Image failed to load:', imageUrl.value);
  imageError.value = true;
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
