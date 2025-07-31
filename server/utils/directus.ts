// Directus client singleton
let directusUrl: string;
let directusToken: string;

const getDirectusConfig = () => {
  if (!directusUrl) {
    directusUrl = process.env.DIRECTUS_URL || 'http://localhost:8055';
    directusToken = process.env.DIRECTUS_TOKEN || '';
  }
  return { directusUrl, directusToken };
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

// Helper function to make Directus API calls
const directusRequest = async (endpoint: string, params: any = {}) => {
  const { directusUrl, directusToken } = getDirectusConfig();

  const url = new URL(`${directusUrl}/items/${endpoint}`);
  url.searchParams.append('access_token', directusToken);

  // Add other parameters
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      if (key === 'filter') {
        // Handle filter parameters specially
        Object.entries(value).forEach(([filterKey, filterValue]) => {
          if (typeof filterValue === 'object' && filterValue !== null) {
            Object.entries(filterValue).forEach(([operator, operatorValue]) => {
              url.searchParams.append(`filter[${filterKey}][${operator}]`, String(operatorValue));
            });
          } else {
            url.searchParams.append(`filter[${filterKey}]`, String(filterValue));
          }
        });
      } else if (key === 'sort') {
        // Handle sort parameters
        if (Array.isArray(value)) {
          value.forEach((sortItem, index) => {
            url.searchParams.append(`sort[${index}]`, sortItem);
          });
        } else {
          url.searchParams.append('sort', String(value));
        }
      } else {
        // Handle other parameters
        url.searchParams.append(key, String(value));
      }
    }
  });

  console.log('Directus request URL:', url.toString());
  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error(`Directus API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
};

// Blog posts functions
export const getBlogPosts = async (
  params: {
    category?: string;
    page?: number;
    limit?: number;
  } = {}
): Promise<any> => {
  const cacheKey = `blog-posts-${JSON.stringify(params)}`;
  const cached = getCachedData(cacheKey);
  if (cached) return cached;

  try {
    const filter: any = {
      status: { _eq: 'published' },
    };

    // Only add category filter if category is provided and not 'all'
    if (params.category && params.category !== 'all') {
      console.log('Filtering by category:', params.category);

      // Check if the category parameter is a valid ID (number)
      const categoryId = parseInt(params.category);
      if (!isNaN(categoryId)) {
        // If it's a valid ID, use it directly
        console.log('Using category ID directly:', categoryId);
        filter.category = { _eq: categoryId };
      } else {
        // If it's not a valid ID, try to find the category by slug/title
        const { data: categories } = await directusRequest('categories', {
          filter: {
            _or: [
              { slug: { _eq: params.category } },
              { title: { _eq: params.category } },
              { id: { _eq: params.category } },
              { title: { _contains: params.category } },
            ],
          },
          limit: 10,
        });

        console.log('Found categories:', categories);

        if (categories && categories.length > 0) {
          const foundCategoryId = categories[0].id;
          console.log('Using found category ID:', foundCategoryId);
          filter.category = { _eq: foundCategoryId };
        } else {
          // If category not found, return empty results instead of error
          console.warn(`Category not found: ${params.category}`);
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
    }

    const { data: posts, meta } = await directusRequest('blog_posts', {
      filter,
      sort: ['-published_at'],
      limit: params.limit || 12,
      offset: ((params.page || 1) - 1) * (params.limit || 12),
      fields: ['*', 'category.*', 'featured_image.*'],
    });

    console.log('Found posts:', posts?.length || 0);

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

export const getBlogPost = async (slug: string): Promise<any | null> => {
  const cacheKey = `blog-post-${slug}`;
  const cached = getCachedData(cacheKey);
  if (cached) return cached;

  try {
    const decodedSlug = decodeURIComponent(slug);
    const { data: post } = await directusRequest('blog_posts', {
      filter: { slug: { _eq: decodedSlug } },
      limit: 1,
      fields: ['*', 'category.*', 'featured_image.*'],
    });

    const result = post?.[0] || null;
    if (result) {
      // Extract related posts from the many-to-many relationship
      if (result.related && result.related.length > 0) {
        // Transform the related posts to extract the actual blog post data
        const relatedPosts = result.related.map((relation: any) => {
          // Use the related_blog_posts_id which contains the actual related post
          const relatedPost = relation.related_blog_posts_id;
          return {
            id: relatedPost.id,
            title: relatedPost.title,
            slug: relatedPost.slug,
            subtitle: relatedPost.subtitle,
            content: relatedPost.content,
            category: relatedPost.category, // This will be the category ID
            featured_image: relatedPost.featured_image,
            published_at: relatedPost.published_at,
            meta_title: relatedPost.meta_title,
            meta_description: relatedPost.meta_description,
            seo_keywords: relatedPost.seo_keywords,
            status: relatedPost.status,
          };
        });

        result.related = relatedPosts;
      } else {
        // Fallback: fetch posts from the same category
        const { data: relatedPosts } = await directusRequest('blog_posts', {
          filter: {
            status: { _eq: 'published' },
            category: { _eq: result.category?.id },
            id: { _neq: result.id },
          },
          sort: ['-published_at'],
          limit: 3,
        });

        const transformedRelatedPosts = (relatedPosts || []).map((post: any) => ({
          id: post.id,
          title: post.title,
          slug: post.slug,
          subtitle: post.subtitle,
          content: post.content,
          category: post.category,
          featured_image: post.featured_image,
          published_at: post.published_at,
          meta_title: post.meta_title,
          meta_description: post.meta_description,
          seo_keywords: post.seo_keywords,
          status: post.status,
        }));

        result.related = transformedRelatedPosts;
      }

      setCachedData(cacheKey, result);
    }
    return result;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
};

// Categories functions
export const getCategories = async (): Promise<{ data: any[] }> => {
  const cacheKey = 'categories';
  const cached = getCachedData(cacheKey);
  if (cached) return cached;

  try {
    const { data: categories } = await directusRequest('categories', {
      sort: ['order'],
    });

    const result = { data: categories || [] };
    setCachedData(cacheKey, result);
    return result;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return { data: [] };
  }
};

// Team members functions
export const getTeamMembers = async (department: 'about' | 'research'): Promise<any[]> => {
  const cacheKey = `team-members-${department}`;
  const cached = getCachedData(cacheKey);
  if (cached) return cached;

  try {
    const { data: members } = await directusRequest('team_members', {
      filter: { department: { _eq: department } },
      sort: ['order'],
    });

    const result = members || [];
    setCachedData(cacheKey, result);
    return result;
  } catch (error) {
    console.error('Error fetching team members:', error);
    return [];
  }
};
