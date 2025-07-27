import { BlogCards, categories as mockCategories, filteredCards } from '@/content/blogData';

export interface BlogPost {
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

export interface BlogPagination {
  current: number;
  total: number;
  limit: number;
}

export interface BlogData {
  posts: BlogPost[];
  pagination: BlogPagination;
}

export interface BlogCategory {
  value: string;
  label: string;
}

export function useBlog() {
  const route = useRoute();

  // Categories from mock data
  const categories: BlogCategory[] = mockCategories.map(cat => ({
    value: cat.title.toLowerCase(),
    label: cat.title,
  }));

  // Reactive data
  const selectedCategory = ref('all');
  const currentPage = ref(parseInt(route.query.page as string) || 1);
  const postsPerPage = 12;

  // Use mock data instead of API call
  const blogData = computed<BlogData>(() => {
    const filteredPosts = filteredCards(
      selectedCategory.value === 'all' ? 'All' : selectedCategory.value
    );
    const totalPosts = filteredPosts.length;
    const totalPages = Math.ceil(totalPosts / postsPerPage);
    const startIndex = (currentPage.value - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

    return {
      posts: paginatedPosts,
      pagination: {
        current: currentPage.value,
        total: totalPages,
        limit: postsPerPage,
      },
    };
  });

  const pending = ref(false);
  const error = ref(null);

  // Computed properties
  const displayPosts = computed(() => {
    if (!blogData.value?.posts) return [];

    // If it's the news category, skip the first post as it's featured
    if (selectedCategory.value === 'news' && blogData.value.posts.length > 0) {
      return blogData.value.posts.slice(1);
    }

    return blogData.value.posts;
  });

  const visiblePages = computed(() => {
    if (!blogData.value?.pagination) return [];

    const { current, total } = blogData.value.pagination;
    const pages = [];
    const maxVisible = 5;

    let start = Math.max(1, current - Math.floor(maxVisible / 2));
    const end = Math.min(total, start + maxVisible - 1);

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  });

  // Methods
  const selectCategory = (category: string) => {
    selectedCategory.value = category;
    currentPage.value = 1;
  };

  const changePage = (page: number) => {
    currentPage.value = page;
    // Scroll to top when changing pages
    if (process.client) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const refresh = () => {
    // No-op for mock data
  };

  // Watch for route changes to update pagination
  watch(
    () => route.query.page,
    newPage => {
      if (newPage && typeof newPage === 'string') {
        currentPage.value = parseInt(newPage) || 1;
      }
    }
  );

  // Update URL when page changes
  watch(currentPage, newPage => {
    navigateTo(
      {
        query: {
          ...route.query,
          page: newPage.toString(),
        },
      },
      { replace: true }
    );
  });

  return {
    // Data
    categories,
    selectedCategory,
    currentPage,
    blogData,
    pending,
    error,

    // Computed
    displayPosts,
    visiblePages,

    // Methods
    selectCategory,
    changePage,
    refresh,
  };
}

export function useBlogPost(slug: string) {
  // Use mock data instead of API call
  const post = computed(() => {
    return BlogCards.find(card => card.slug === slug);
  });

  const pending = ref(false);
  const error = ref(null);

  // Get related posts from mock data
  const relatedPosts = computed(() => {
    if (!post.value) return [];

    const currentCategory = post.value.category;
    const related = BlogCards.filter(
      card => card.category === currentCategory && card.slug !== slug
    ).slice(0, 3);

    return related;
  });

  return {
    post,
    pending,
    error,
    relatedPosts,
  };
}
