import { createDirectus, rest, staticToken } from '@directus/sdk';

// Interfaces for content types
interface BlogPost {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  content: string;
  category: string;
  meta_title?: string;
  meta_description?: string;
  featured_image?: string;
  published_at: string;
  created_at: string;
  updated_at: string;
}

interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
}

interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    current: number;
    total: number;
    limit: number;
  };
}

// Directus client singleton
let directusClient: any = null;

const getDirectusClient = () => {
  if (!directusClient) {
    const config = useRuntimeConfig();
    directusClient = createDirectus(config.public.directusUrl || 'http://localhost:8055')
      .with(rest())
      .with(staticToken(config.directusToken || ''));
  }
  return directusClient;
};

// Cache for API responses
const cache = new Map<string, { data: any; timestamp: number }>();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

const getCachedData = (key: string) => {
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }
  return null;
};

const setCachedData = (key: string, data: any) => {
  cache.set(key, { data, timestamp: Date.now() });
};

// Blog posts functions
export const getBlogPosts = async (
  params: {
    category?: string;
    page?: number;
    limit?: number;
  } = {}
): Promise<PaginatedResponse<BlogPost>> => {
  const cacheKey = `blog-posts-${JSON.stringify(params)}`;
  const cached = getCachedData(cacheKey);
  if (cached) return cached;

  try {
    const client = getDirectusClient();
    const { data: posts, meta } = await client.items('blog_posts').readByQuery({
      filter: params.category ? { category: { _eq: params.category } } : undefined,
      sort: ['-published_at'],
      limit: params.limit || 12,
      offset: ((params.page || 1) - 1) * (params.limit || 12),
    });

    const result = {
      data: posts || [],
      pagination: {
        current: params.page || 1,
        total: meta?.filter_count || 0,
        limit: params.limit || 12,
      },
    };

    setCachedData(cacheKey, result);
    return result;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    // Return mock data as fallback
    return {
      data: [],
      pagination: {
        current: 1,
        total: 0,
        limit: 12,
      },
    };
  }
};

export const getBlogPost = async (slug: string): Promise<BlogPost | null> => {
  const cacheKey = `blog-post-${slug}`;
  const cached = getCachedData(cacheKey);
  if (cached) return cached;

  try {
    const client = getDirectusClient();
    const { data: post } = await client.items('blog_posts').readByQuery({
      filter: { slug: { _eq: slug } },
      limit: 1,
    });

    const result = post?.[0] || null;
    if (result) {
      setCachedData(cacheKey, result);
    }
    return result;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
};

// Team members functions
export const getTeamMembers = async (teamType: 'about' | 'research'): Promise<TeamMember[]> => {
  const cacheKey = `team-members-${teamType}`;
  const cached = getCachedData(cacheKey);
  if (cached) return cached;

  try {
    const client = getDirectusClient();
    const { data: members } = await client.items('team_members').readByQuery({
      filter: { team_type: { _eq: teamType } },
      sort: ['sort'],
    });

    const result = members || [];
    setCachedData(cacheKey, result);
    return result;
  } catch (error) {
    console.error('Error fetching team members:', error);
    // Return mock data as fallback
    return [];
  }
};
