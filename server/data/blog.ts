export interface BlogPost {
  id: string;
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  content: string;
  featured_image: string;
  published_at: string;
  meta_title?: string;
  meta_description?: string;
  seo_keywords?: string[];
}

export interface BlogCategory {
  title: string;
  value: string;
}

export const BlogCards: BlogPost[] = [
  {
    id: '1',
    slug: 'GDC&PGCSanFrancisco2025',
    category: 'News',
    title: 'GDC & PGC San Francisco 2025',
    subtitle: 'A quick look back at our time in San Francisco during GDC and PGC.',
    content: `
      <p>We recently attended both the Game Developers Conference (GDC) and Pocket Gamer Connects (PGC) in San Francisco, and it was an incredible experience connecting with the gaming community.</p>

      <h2>GDC Highlights</h2>
      <p>At GDC, we showcased our latest AI-powered testing solutions for game developers. The response was overwhelming, with many developers expressing interest in how our technology can streamline their QA processes.</p>

      <h2>PGC Connections</h2>
      <p>PGC provided excellent networking opportunities with mobile game developers and publishers. We had insightful discussions about the future of automated testing in mobile gaming.</p>

      <h2>Key Takeaways</h2>
      <ul>
        <li>Growing demand for automated testing solutions</li>
        <li>Mobile gaming market expansion</li>
        <li>AI integration in game development</li>
        <li>Quality assurance automation trends</li>
      </ul>

      <p>We're excited to continue building relationships with the gaming community and look forward to future events!</p>
    `,
    featured_image: '/img/blogImage1.png',
    published_at: '2025-01-15T10:00:00Z',
    meta_title: 'GDC & PGC San Francisco 2025 - Filuta Blog',
    meta_description: 'A quick look back at our time in San Francisco during GDC and PGC.',
    seo_keywords: ['GDC', 'PGC', 'San Francisco', 'Gaming', 'AI Testing', 'Game Development'],
  },
  {
    id: '2',
    slug: 'WhyManualComplianceNoLongerWorks',
    category: 'Government & Education',
    title: 'Why Manual Compliance No Longer Works',
    subtitle:
      'Manual processes are slow, error-prone, and risky. Discover the hidden costs of outdated workflows — and how automation changes the game.',
    content: `
      <p>In today's fast-paced regulatory environment, manual compliance processes are becoming increasingly unsustainable. Organizations that rely on traditional, paper-based workflows are finding themselves at a significant disadvantage.</p>

      <h2>The Hidden Costs of Manual Compliance</h2>
      <p>Manual compliance processes come with numerous hidden costs that many organizations fail to account for:</p>

      <ul>
        <li><strong>Time Investment:</strong> Manual processes require significant human resources</li>
        <li><strong>Error Rates:</strong> Human error is inevitable in repetitive tasks</li>
        <li><strong>Scalability Issues:</strong> Manual processes don't scale with growth</li>
        <li><strong>Audit Complexity:</strong> Paper trails are difficult to maintain and verify</li>
      </ul>

      <h2>How Automation Changes the Game</h2>
      <p>AI-powered compliance automation offers a solution to these challenges:</p>

      <ul>
        <li>Reduced processing time by up to 80%</li>
        <li>Improved accuracy and consistency</li>
        <li>Better audit trails and reporting</li>
        <li>Scalable solutions that grow with your organization</li>
      </ul>

      <h2>Real-World Impact</h2>
      <p>Organizations that have adopted automated compliance solutions report:</p>

      <ul>
        <li>50% reduction in compliance processing time</li>
        <li>90% decrease in manual errors</li>
        <li>Improved regulatory reporting accuracy</li>
        <li>Enhanced risk management capabilities</li>
      </ul>

      <p>The future of compliance is automated, and organizations that embrace this change will be better positioned for success in an increasingly complex regulatory landscape.</p>
    `,
    featured_image: '/img/blogImage1.png',
    published_at: '2025-05-05T09:00:00Z',
    meta_title: 'Why Manual Compliance No Longer Works - Filuta',
    meta_description:
      'Manual processes are slow, error-prone, and risky. Discover the hidden costs of outdated workflows — and how automation changes the game.',
    seo_keywords: [
      'Compliance',
      'Automation',
      'Manual Processes',
      'Risk Management',
      'Regulatory Compliance',
    ],
  },
  {
    id: '3',
    slug: 'TheFutureofVendorComplianceinK–12Education',
    category: 'Government & Education',
    title: 'The Future of Vendor Compliance in K–12 Education',
    subtitle:
      'How AI-powered solutions are transforming vendor management in educational institutions.',
    content: `
      <p>Educational institutions face unique challenges when it comes to vendor compliance. With thousands of vendors providing services ranging from food services to technology solutions, managing compliance manually is no longer feasible.</p>

      <h2>The Challenge</h2>
      <p>K-12 institutions must ensure that all vendors meet strict compliance requirements while managing limited resources and staff time.</p>

      <h2>The Solution</h2>
      <p>AI-powered vendor compliance solutions offer automated monitoring and reporting capabilities that significantly reduce administrative burden.</p>
    `,
    featured_image: '/img/FeaturedCard1.png',
    published_at: '2025-04-20T14:30:00Z',
    meta_title: 'The Future of Vendor Compliance in K–12 Education - Filuta',
    meta_description:
      'How AI-powered solutions are transforming vendor management in educational institutions.',
    seo_keywords: ['Vendor Compliance', 'K-12 Education', 'AI Solutions', 'Educational Technology'],
  },
];

export const categories: BlogCategory[] = [
  { title: 'All', value: 'all' },
  { title: 'News', value: 'news' },
  { title: 'Government & Education', value: 'government-education' },
  { title: 'Technology', value: 'technology' },
];

export function filteredCards(category: string): BlogPost[] {
  if (category === 'All') {
    return BlogCards;
  }
  return BlogCards.filter(card => card.category === category);
}
