export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  content: string;
  featured_image:
    | string
    | {
        id: string;
        filename_download: string;
        width: number;
        height: number;
      };
  category: string;
  published_at: string;
  meta_title?: string;
  meta_description?: string;
  seo_keywords?: string[];
  related?: BlogPost[];
}

export interface BlogPagination {
  current: number;
  total: number;
  limit: number;
  totalPosts: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface BlogData {
  posts: BlogPost[];
  pagination: BlogPagination;
  categories: BlogCategory[];
}

export interface BlogCategory {
  value: string;
  label: string;
}

export function useBlog() {
  const route = useRoute();

  // Reactive data
  const selectedCategory = ref('all');
  const currentPage = ref(parseInt(route.query.page as string) || 1);
  const postsPerPage = 12;

  // Fetch data from API
  const {
    data: blogData,
    pending,
    error,
    refresh,
  } = useFetch('/api/blog', {
    query: computed(() => ({
      category: selectedCategory.value,
      page: currentPage.value,
      limit: postsPerPage,
    })),
    default: () => ({
      posts: [],
      pagination: {
        current: 1,
        total: 1,
        limit: postsPerPage,
        totalPosts: 0,
        hasNext: false,
        hasPrev: false,
      },
      categories: [],
    }),
  });

  const displayPosts = computed(() => {
    if (!blogData.value?.posts) return [];

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
    // No navigation - just update the filter
  };

  const changePage = (page: number) => {
    currentPage.value = page;
    // Scroll to top when changing pages
    if (process.client) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const refreshData = () => {
    refresh();
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
    categories: computed(() => blogData.value?.categories || []),
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
    refresh: refreshData,
  };
}

export function useBlogPost(slug: string) {
  // Fetch single post from API
  const {
    data: post,
    pending,
    error,
  } = useFetch(`/api/blog/${slug}`, {
    default: () => null,
  });

  return {
    post: computed(() => post.value),
    pending,
    error,
    relatedPosts: computed(() => post.value?.related || []),
  };
}
