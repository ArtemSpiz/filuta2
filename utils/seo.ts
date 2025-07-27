// Define BlogPost interface locally to avoid circular imports
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

export interface SEOConfig {
  title: string;
  description: string;
  url: string;
  type?: 'website' | 'article';
  image?: string;
  publishedAt?: string;
  author?: string;
  section?: string;
  keywords?: string[];
}

export interface SchemaConfig {
  type: 'WebPage' | 'Blog' | 'BlogPosting';
  name: string;
  description: string;
  url: string;
  image?: string;
  publishedAt?: string;
  author?: string;
}

/**
 * Sets up SEO meta tags using useHead
 */
export function useSEO(config: SEOConfig) {
  const baseUrl = 'https://filuta.com';

  useHead({
    title: config.title,
    meta: [
      { name: 'description', content: config.description },
      { property: 'og:title', content: config.title },
      { property: 'og:description', content: config.description },
      { property: 'og:type', content: config.type || 'website' },
      { property: 'og:url', content: `${baseUrl}${config.url}` },
      ...(config.image ? [{ property: 'og:image', content: config.image }] : []),
      ...(config.publishedAt
        ? [{ property: 'article:published_time', content: config.publishedAt }]
        : []),
      ...(config.author ? [{ property: 'article:author', content: config.author }] : []),
      ...(config.section ? [{ property: 'article:section', content: config.section }] : []),
      ...(config.keywords ? [{ name: 'keywords', content: config.keywords.join(', ') }] : []),
    ],
    link: [{ rel: 'canonical', href: `${baseUrl}${config.url}` }],
  });
}

/**
 * Sets up Schema.org structured data using useSchemaOrg
 */
export function useSchema(config: SchemaConfig) {
  const baseUrl = 'https://filuta.com';

  // For now, we'll use a simple JSON-LD script approach
  // This can be enhanced when schema.org module is added
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': config.type === 'BlogPosting' ? 'BlogPosting' : 'WebPage',
    name: config.name,
    description: config.description,
    url: `${baseUrl}${config.url}`,
    ...(config.image && { image: config.image }),
    ...(config.publishedAt && { datePublished: config.publishedAt }),
    ...(config.author && { author: { '@type': 'Organization', name: config.author } }),
    ...(config.type === 'Blog' && {
      publisher: {
        '@type': 'Organization',
        name: 'Filuta',
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/logo.png`,
        },
      },
    }),
  };

  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(schemaData),
      },
    ],
  });
}

/**
 * Creates SEO config for blog listing page
 */
export function createBlogListSEO() {
  return {
    title: 'Blog - Filuta',
    description:
      "Read the latest insights on AI-powered compliance solutions, government regulations, and educational technology from Filuta's expert team.",
    url: '/blog',
    type: 'website' as const,
  };
}

/**
 * Creates SEO config for individual blog post
 */
export function createBlogPostSEO(post: BlogPost) {
  return {
    title: post.meta_title || post.title,
    description: post.meta_description || post.subtitle,
    url: `/blog/${post.slug}`,
    type: 'article' as const,
    image: post.featured_image,
    publishedAt: post.published_at,
    author: 'Filuta',
    section: post.category,
    keywords: post.seo_keywords,
  };
}

/**
 * Creates Schema config for blog listing page
 */
export function createBlogListSchema() {
  return {
    type: 'Blog' as const,
    name: 'Filuta Blog',
    description: 'Latest insights on AI-powered compliance solutions',
    url: '/blog',
  };
}

/**
 * Creates Schema config for individual blog post
 */
export function createBlogPostSchema(post: BlogPost) {
  return {
    type: 'BlogPosting' as const,
    name: post.title,
    description: post.subtitle,
    url: `/blog/${post.slug}`,
    image: post.featured_image,
    publishedAt: post.published_at,
    author: 'Filuta',
  };
}
