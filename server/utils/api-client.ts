// =============================================================================
// API CLIENT - HTTP Requests & URL Building
// =============================================================================

interface DirectusConfig {
  directusUrl: string;
  directusToken: string;
}

interface ApiParams {
  filter?: Record<string, any>;
  fields?: string[];
  sort?: string | string[];
  limit?: number;
  offset?: number;
}

interface ApiResponse<T> {
  data: T[];
  meta?: {
    filter_count?: number;
  };
}

// =============================================================================
// CONFIGURATION MANAGEMENT
// =============================================================================

let config: DirectusConfig | null = null;

const getConfig = (): DirectusConfig => {
  if (!config) {
    const runtimeConfig = useRuntimeConfig();
    config = {
      directusUrl: runtimeConfig.directusUrl,
      directusToken: runtimeConfig.directusToken || '',
    };
  }
  return config;
};

// =============================================================================
// URL BUILDING
// =============================================================================

export const buildDirectusUrl = (endpoint: string, params: ApiParams): URL => {
  const { directusUrl, directusToken } = getConfig();
  const url = new URL(`${directusUrl}/items/${endpoint}`);
  url.searchParams.append('access_token', directusToken);

  // Add filters
  if (params.filter) {
    Object.entries(params.filter).forEach(([key, value]) => {
      if (typeof value === 'object' && value !== null) {
        Object.entries(value).forEach(([operator, operatorValue]) => {
          url.searchParams.append(`filter[${key}][${operator}]`, String(operatorValue));
        });
      } else {
        url.searchParams.append(`filter[${key}]`, String(value));
      }
    });
  }

  // Add fields
  if (params.fields) {
    url.searchParams.append('fields', params.fields.join(','));
  }

  // Add sorting
  if (params.sort) {
    if (Array.isArray(params.sort)) {
      params.sort.forEach((item, index) => {
        url.searchParams.append(`sort[${index}]`, item);
      });
    } else {
      url.searchParams.append('sort', params.sort);
    }
  }

  // Add pagination
  if (params.limit) {
    url.searchParams.append('limit', String(params.limit));
  }
  if (params.offset) {
    url.searchParams.append('offset', String(params.offset));
  }

  return url;
};

// =============================================================================
// HTTP CLIENT
// =============================================================================

export const directusRequest = async <T>(
  endpoint: string,
  params: ApiParams = {}
): Promise<ApiResponse<T>> => {
  const url = buildDirectusUrl(endpoint, params);
  const response = await fetch(url.toString());

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`Directus API error for ${endpoint}:`, errorText);
    throw new Error(`Directus API error: ${response.status} ${response.statusText}`);
  }

  return await response.json();
};
