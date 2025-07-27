export interface PageSEOConfig {
  title: string;
  description: string;
  url: string;
  type?: 'website' | 'article';
  image?: string;
  publishedAt?: string;
  author?: string;
  section?: string;
  keywords?: string[];
  schemaType?:
    | 'WebPage'
    | 'Blog'
    | 'BlogPosting'
    | 'Organization'
    | 'Service'
    | 'ResearchOrganization';
  schemaName?: string;
}

export function setupPageSEO(config: PageSEOConfig) {
  const baseUrl = 'https://filuta.com';

  // Set up meta tags
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

  // Set up Schema.org structured data
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': config.schemaType || 'WebPage',
    name: config.schemaName || config.title,
    description: config.description,
    url: `${baseUrl}${config.url}`,
    ...(config.image && { image: config.image }),
    ...(config.publishedAt && { datePublished: config.publishedAt }),
    ...(config.author && { author: { '@type': 'Organization', name: config.author } }),
    ...(config.schemaType === 'Blog' && {
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

// Predefined SEO configurations for common pages
export const pageSEOConfigs = {
  home: {
    title: 'Filuta - AI-Powered Compliance Solutions',
    description:
      'Filuta provides AI-powered compliance solutions for government and education sectors. Automate manual processes and reduce risks with intelligent workflows.',
    url: '/',
    type: 'website' as const,
    schemaType: 'Organization' as const,
    schemaName: 'Filuta',
  },
  about: {
    title: 'About Us - Filuta',
    description:
      "Learn about Filuta's mission to revolutionize compliance through AI-powered solutions. Meet our team of experts dedicated to transforming government and education sectors.",
    url: '/about-us',
    type: 'website' as const,
    schemaType: 'Organization' as const,
    schemaName: 'About Filuta',
  },
  research: {
    title: 'Research - Filuta',
    description:
      "Explore Filuta's research in AI-powered compliance solutions. Discover our latest innovations and breakthroughs in government and education technology.",
    url: '/research',
    type: 'website' as const,
    schemaType: 'ResearchOrganization' as const,
    schemaName: 'Filuta Research',
  },
  governmentEducation: {
    title: 'Government & Education - Filuta',
    description:
      'AI-powered compliance solutions for government and education sectors. Streamline processes and reduce risks with intelligent automation.',
    url: '/government-education',
    type: 'website' as const,
    schemaType: 'Service' as const,
    schemaName: 'AI Compliance Solutions',
  },
  blog: {
    title: 'Blog - Filuta',
    description:
      'Discover the latest trends in AI-powered compliance solutions, government regulations, and educational technology from our expert team.',
    url: '/blog',
    type: 'website' as const,
    schemaType: 'Blog' as const,
    schemaName: 'Filuta Blog',
  },
};
