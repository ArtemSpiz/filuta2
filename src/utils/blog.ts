import type { BlogPost } from '@/types/blog';

/**
 * Format a date string to a readable format
 */
export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

/**
 * Check if featured_image is a Directus asset object
 */
export const isDirectusAsset = (image: any): boolean => {
  return image && typeof image === 'object' && image.id;
};

/**
 * Get the image ID from a blog post's featured image
 */
export const getImageId = (post: BlogPost): string | undefined => {
  if (isDirectusAsset(post.featured_image)) {
    return (post.featured_image as any).id;
  }
  return undefined;
};

/**
 * Get the image alt text for a blog post
 */
export const getImageAlt = (post: BlogPost): string => {
  return post.title;
};

/**
 * Generate social sharing URL for a blog post
 */
export const getSocialSharingUrl = (post: BlogPost, platform: 'twitter' | 'linkedin'): string => {
  const baseUrl = 'https://filuta.com';
  const postUrl = `${baseUrl}/blog/${post.slug}`;

  if (platform === 'twitter') {
    return `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(postUrl)}`;
  }

  if (platform === 'linkedin') {
    return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`;
  }

  return postUrl;
};
