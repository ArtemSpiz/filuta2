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
  category: string | { id: string; title: string };
  published_at: string;
  meta_title?: string;
  meta_description?: string;
  seo_keywords?: string[];
}

export interface BlogCategory {
  value: string;
  label: string;
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
