// =============================================================================
// DIRECTUS DATA LAYER - Business Logic & Caching
// =============================================================================

import { directusRequest } from './api-client';

interface CacheEntry {
  data: any;
  timestamp: number;
}

// =============================================================================
// CACHING SYSTEM
// =============================================================================

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
const cache = new Map<string, CacheEntry>();

const cacheKey = (prefix: string, params?: Record<string, any>): string => {
  return params ? `${prefix}-${JSON.stringify(params)}` : prefix;
};

const getCached = <T>(key: string): T | null => {
  const entry = cache.get(key);
  if (entry && Date.now() - entry.timestamp < CACHE_DURATION) {
    return entry.data;
  }
  return null;
};

const setCached = <T>(key: string, data: T): void => {
  cache.set(key, { data, timestamp: Date.now() });
};

// =============================================================================
// CACHED OPERATIONS
// =============================================================================

const withCache = async <T>(key: string, operation: () => Promise<T>, fallback?: T): Promise<T> => {
  const cached = getCached<T>(key);
  if (cached) return cached;

  try {
    const result = await operation();
    setCached(key, result);
    return result;
  } catch (error) {
    console.error(`Error in cached operation ${key}:`, error);
    return fallback as T;
  }
};

// =============================================================================
// CATEGORY MANAGEMENT
// =============================================================================

const findCategoryId = async (categoryParam: string): Promise<number | null> => {
  const categoryId = parseInt(categoryParam);
  if (!isNaN(categoryId)) return categoryId;

  const { data: categories } = await directusRequest('categories', {
    filter: {
      _or: [
        { slug: { _eq: categoryParam } },
        { title: { _eq: categoryParam } },
        { id: { _eq: categoryParam } },
        { title: { _contains: categoryParam } },
      ],
    },
    limit: 10,
  });

  return (categories?.[0] as any)?.id || null;
};

// =============================================================================
// BLOG POSTS API
// =============================================================================

export const getBlogPosts = async (
  params: {
    category?: string;
    page?: number;
    limit?: number;
  } = {}
) => {
  const key = cacheKey('blog-posts', params);

  return withCache(key, async () => {
    const filter: Record<string, any> = { status: { _eq: 'published' } };

    // Handle category filtering
    if (params.category && params.category !== 'all') {
      const categoryId = await findCategoryId(params.category);
      if (categoryId) {
        filter.category = { _eq: categoryId };
      } else {
        return {
          data: [],
          pagination: {
            current: params.page || 1,
            total: 0,
            limit: params.limit || 12,
          },
        };
      }
    }

    const { data: posts, meta } = await directusRequest('blog_posts', {
      filter,
      sort: ['-published_at'],
      limit: params.limit || 12,
      offset: ((params.page || 1) - 1) * (params.limit || 12),
      fields: ['*', 'category.*', 'featured_image.*'],
    });

    return {
      data: posts || [],
      pagination: {
        current: params.page || 1,
        total: meta?.filter_count || 0,
        limit: params.limit || 12,
      },
    };
  });
};

export const getBlogPost = async (slug: string) => {
  const key = cacheKey('blog-post', { slug });

  return withCache(key, async () => {
    const decodedSlug = decodeURIComponent(slug);
    const { data: post } = await directusRequest('blog_posts', {
      filter: { slug: { _eq: decodedSlug } },
      limit: 1,
      fields: ['*', 'category.*', 'featured_image.*', 'related.*.*'],
    });

    const result = (post?.[0] as any) || null;
    if (!result) return null;

    // Handle related posts
    if (result.related?.length > 0) {
      const relatedIds = result.related
        .map(
          (relation: any) => relation.related_blog_posts_id?.id || relation.related_blog_posts_id
        )
        .filter(Boolean);

      if (relatedIds.length > 0) {
        const { data: relatedPosts } = await directusRequest('blog_posts', {
          filter: {
            id: { _in: relatedIds },
            status: { _eq: 'published' },
          },
          fields: ['*', 'category.*', 'featured_image.*'],
        });
        result.related = relatedPosts || [];
      } else {
        result.related = [];
      }
    } else {
      // Fallback: fetch posts from same category
      const { data: relatedPosts } = await directusRequest('blog_posts', {
        filter: {
          status: { _eq: 'published' },
          category: { _eq: result.category?.id },
          id: { _neq: result.id },
        },
        sort: ['-published_at'],
        limit: 3,
        fields: ['*', 'category.*', 'featured_image.*'],
      });
      result.related = relatedPosts || [];
    }

    return result;
  });
};

// =============================================================================
// CATEGORIES API
// =============================================================================

export const getCategories = async () => {
  const key = cacheKey('categories');

  return withCache(key, async () => {
    const { data: categories } = await directusRequest('categories', {
      sort: ['order'],
    });
    return { data: categories || [] };
  });
};

// =============================================================================
// TEAM MEMBERS API
// =============================================================================

export const getTeamMembers = async (department: 'leadership' | 'research') => {
  const key = cacheKey('team-members', { department });

  return withCache(key, async () => {
    const { data: members } = await directusRequest('team_members', {
      filter: { department: { _eq: department } },
      sort: ['order'],
      fields: ['*', 'image.*'],
    });
    return members || [];
  });
};

// =============================================================================
// CASE STUDIES API
// =============================================================================

export const getCaseStudies = async () => {
  const key = cacheKey('case-studies');

  return withCache(key, async () => {
    const { data: caseStudies } = await directusRequest('case_studies', {
      filter: { status: { _eq: 'published' } },
      sort: ['-published_at'],
      fields: ['*', 'featured_image.*'],
    });
    return caseStudies || [];
  });
};

export const getCaseStudy = async (slug: string) => {
  const key = cacheKey('case-study', { slug });

  return withCache(key, async () => {
    const decodedSlug = decodeURIComponent(slug);
    const { data: caseStudy } = await directusRequest('case_studies', {
      filter: {
        slug: { _eq: decodedSlug },
        status: { _eq: 'published' },
      },
      limit: 1,
      fields: ['*', 'featured_image.*'],
    });

    const result = (caseStudy?.[0] as any) || null;
    if (!result) return null;

    // Fetch related case studies
    const { data: relatedCaseStudies } = await directusRequest('case_studies', {
      filter: {
        status: { _eq: 'published' },
        id: { _neq: result.id },
      },
      sort: ['-published_at'],
      limit: 3,
      fields: ['*', 'featured_image.*'],
    });

    result.related = relatedCaseStudies || [];
    return result;
  });
};

// =============================================================================
// TESTIMONIALS API
// =============================================================================

export const getTestimonials = async () => {
  const key = cacheKey('testimonials');

  return withCache(key, async () => {
    const { data: testimonials } = await directusRequest('testimonials', {
      filter: { status: { _eq: 'published' } },
      fields: ['*', 'company_logo.*', 'video.*'],
    });
    return testimonials || [];
  });
};
