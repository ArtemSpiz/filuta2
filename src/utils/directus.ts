// Directus Configuration Constants
const BLOG_CONFIG = {
  DEFAULT_LIMIT: 12,
  DEFAULT_PAGE: 1,
} as const;

const DIRECTUS_COLLECTIONS = {
  BLOG_POSTS: 'blog_posts',
  CATEGORIES: 'categories',
  TEAM_MEMBERS: 'team_members',
} as const;

const DIRECTUS_FIELDS = {
  STATUS: 'status',
  PUBLISHED: 'published',
  CATEGORY: 'category',
  FEATURED_IMAGE: 'featured_image',
  ORDER: 'order',
} as const;

// Types
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  content: string;
  category: {
    id: string;
    title: string;
    value: string;
  };
  meta_title?: string;
  meta_description?: string;
  seo_keywords?: string[];
  featured_image?: {
    id: string;
    filename_download: string;
    width: number;
    height: number;
  };
  published_at: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: string;
  title: string;
  value: string;
  order: number;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image?: {
    id: string;
    filename_download: string;
    width: number;
    height: number;
  };
  department: string;
  order: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    current: number;
    total: number;
    limit: number;
  };
}

// Directus API Client
class DirectusClient {
  private baseUrl: string;
  private token: string;

  constructor() {
    this.baseUrl = process.env.DIRECTUS_URL || '';
    this.token = process.env.DIRECTUS_TOKEN || '';
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${this.token}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`Directus API error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  // Blog Posts
  async getBlogPosts(
    params: {
      category?: string;
      page?: number;
      limit?: number;
    } = {}
  ): Promise<{ data: BlogPost[]; meta: any }> {
    const { category, page = BLOG_CONFIG.DEFAULT_PAGE, limit = BLOG_CONFIG.DEFAULT_LIMIT } = params;

    let filter = `filter[${DIRECTUS_FIELDS.STATUS}][_eq]=${DIRECTUS_FIELDS.PUBLISHED}`;
    if (category && category !== 'all') {
      // Map category values to category IDs based on the actual data
      const categoryMap: { [key: string]: number } = {
        news: 4,
        'government & education': 5,
        research: 6,
        'government-education': 5, // Handle both formats
      };
      const categoryId = categoryMap[category.toLowerCase()];
      if (categoryId) {
        filter += `&filter[${DIRECTUS_FIELDS.CATEGORY}][_eq]=${categoryId}`;
      }
    }

    const endpoint = `/items/${DIRECTUS_COLLECTIONS.BLOG_POSTS}?${filter}&sort=-published_at&limit=${limit}&offset=${(page - 1) * limit}&fields=*,${DIRECTUS_FIELDS.CATEGORY}.*,${DIRECTUS_FIELDS.FEATURED_IMAGE}.*`;

    return this.request(endpoint);
  }

  async getBlogPost(slug: string): Promise<BlogPost | null> {
    const endpoint = `/items/${DIRECTUS_COLLECTIONS.BLOG_POSTS}?filter[slug][_eq]=${slug}&fields=*,${DIRECTUS_FIELDS.CATEGORY}.*,${DIRECTUS_FIELDS.FEATURED_IMAGE}.*`;
    const response = await this.request<{ data: BlogPost[] }>(endpoint);
    return response.data?.[0] || null;
  }

  // Categories
  async getCategories(): Promise<{ data: Category[] }> {
    const endpoint = `/items/${DIRECTUS_COLLECTIONS.CATEGORIES}?sort=${DIRECTUS_FIELDS.ORDER}`;
    return this.request(endpoint);
  }

  // Team Members
  async getTeamMembers(department: 'about' | 'research'): Promise<TeamMember[]> {
    const endpoint = `/items/${DIRECTUS_COLLECTIONS.TEAM_MEMBERS}?filter[department][_eq]=${department}&sort=${DIRECTUS_FIELDS.ORDER}&fields=*,${DIRECTUS_FIELDS.FEATURED_IMAGE}.*`;
    const response = await this.request<{ data: TeamMember[] }>(endpoint);
    return response.data || [];
  }
}

// Singleton instance
export const directusClient = new DirectusClient();

// Helper function for optimized image URLs
export function getOptimizedImageUrl(
  imageId: string,
  options: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'webp' | 'jpg' | 'png';
    fit?: 'cover' | 'contain' | 'inside' | 'outside';
  } = {}
): string {
  const params = new URLSearchParams();
  if (options.width) params.append('width', options.width.toString());
  if (options.height) params.append('height', options.height.toString());
  if (options.quality) params.append('quality', options.quality.toString());
  if (options.format) params.append('format', options.format);
  if (options.fit) params.append('fit', options.fit);

  const directusUrl = process.env.DIRECTUS_URL || '';
  return `${directusUrl}/assets/${imageId}?${params.toString()}`;
}
