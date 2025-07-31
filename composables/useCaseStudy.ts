export const useCaseStudy = (slug: string) => {
  const { data: caseStudy, pending, error } = useFetch(`/api/case-studies/${slug}`);

  return {
    caseStudy,
    pending,
    error,
  };
};
