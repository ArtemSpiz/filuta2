import { ref, computed } from 'vue';
import blogImageNews from '@/assets/img/blogImage1.png';
import blogImage1 from '@/assets/img/blogImage1.png';
// Using existing images as placeholders for missing blogImage2.png and blogImage3.png
import blogImage2 from '@/assets/img/FeaturedCard1.png';
import blogImage3 from '@/assets/img/FeaturedCard2.png';

export const BlogCards = [
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
    featured_image: blogImageNews,
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
    featured_image: blogImage1,
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
      'Manual processes are slow, error-prone, and risky. Discover the hidden costs of outdated workflows — and how automation changes the game.',
    content: `
      <p>The K–12 education sector faces unique challenges when it comes to vendor compliance. With increasing regulatory requirements and limited resources, school districts need innovative solutions to manage vendor relationships effectively.</p>

      <h2>Current Challenges in K–12 Vendor Management</h2>
      <p>School districts across the country are struggling with:</p>

      <ul>
        <li>Complex vendor onboarding processes</li>
        <li>Difficulty tracking compliance requirements</li>
        <li>Limited visibility into vendor performance</li>
        <li>Resource constraints for manual oversight</li>
      </ul>

      <h2>The Role of AI in Vendor Compliance</h2>
      <p>Artificial intelligence is revolutionizing how school districts manage vendor compliance:</p>

      <ul>
        <li><strong>Automated Screening:</strong> AI can quickly assess vendor qualifications</li>
        <li><strong>Continuous Monitoring:</strong> Real-time compliance tracking</li>
        <li><strong>Risk Assessment:</strong> Proactive identification of potential issues</li>
        <li><strong>Document Management:</strong> Automated processing of compliance documents</li>
      </ul>

      <h2>Benefits for School Districts</h2>
      <p>Implementing AI-powered vendor compliance solutions provides:</p>

      <ul>
        <li>Reduced administrative burden on staff</li>
        <li>Improved compliance accuracy</li>
        <li>Better resource allocation</li>
        <li>Enhanced transparency and accountability</li>
      </ul>

      <h2>Looking Ahead</h2>
      <p>As regulatory requirements continue to evolve, school districts that embrace technology-driven compliance solutions will be better positioned to meet their obligations while focusing on their primary mission: educating students.</p>

      <p>The future of vendor compliance in K–12 education is automated, intelligent, and efficient.</p>
    `,
    featured_image: blogImage2,
    published_at: '2025-05-05T10:00:00Z',
    meta_title: 'The Future of Vendor Compliance in K–12 Education - Filuta',
    meta_description:
      'Manual processes are slow, error-prone, and risky. Discover the hidden costs of outdated workflows — and how automation changes the game.',
    seo_keywords: [
      'K-12 Education',
      'Vendor Compliance',
      'School Districts',
      'Education Technology',
      'Compliance Automation',
    ],
  },
  {
    id: '4',
    slug: '5SignsYourDistrictNeedsaComplianceUpgrade',
    category: 'Research',
    title: '5 Signs Your District Needs a Compliance Upgrade',
    subtitle: 'A quick look back at our time in San Francisco during GDC and PGC.',
    content: `
      <p>School districts across the country are facing increasing pressure to modernize their compliance processes. But how do you know when it's time to upgrade your compliance systems?</p>

      <h2>Sign #1: Manual Processes Are Slowing You Down</h2>
      <p>If your staff is spending more time on paperwork than on student-focused activities, it's a clear sign that your compliance processes need modernization. Manual processes are not only time-consuming but also prone to errors.</p>

      <h2>Sign #2: Compliance Audits Are Stressful</h2>
      <p>When preparing for compliance audits becomes a major source of stress and requires significant preparation time, your current systems aren't working effectively. Modern compliance solutions should make audits routine and straightforward.</p>

      <h2>Sign #3: You're Missing Important Deadlines</h2>
      <p>If your district frequently misses compliance deadlines or struggles to meet reporting requirements, your current processes aren't keeping up with your obligations.</p>

      <h2>Sign #4: Limited Visibility Into Compliance Status</h2>
      <p>If you can't quickly assess your district's compliance status or identify potential issues before they become problems, you need better monitoring and reporting capabilities.</p>

      <h2>Sign #5: Growing Administrative Burden</h2>
      <p>When compliance-related administrative tasks are consuming an increasing amount of your staff's time and resources, it's time to consider automation solutions.</p>

      <h2>Next Steps</h2>
      <p>If you're experiencing any of these signs, consider exploring modern compliance solutions that can:</p>

      <ul>
        <li>Automate routine compliance tasks</li>
        <li>Provide real-time compliance monitoring</li>
        <li>Improve accuracy and reduce errors</li>
        <li>Free up staff time for student-focused activities</li>
      </ul>

      <p>Modernizing your compliance processes isn't just about meeting requirements—it's about creating more efficient, effective school districts that can focus on their primary mission: educating students.</p>
    `,
    featured_image: blogImage3,
    published_at: '2025-05-05T11:00:00Z',
    meta_title: '5 Signs Your District Needs a Compliance Upgrade - Filuta',
    meta_description: 'A quick look back at our time in San Francisco during GDC and PGC.',
    seo_keywords: [
      'School Districts',
      'Compliance Upgrade',
      'Education Compliance',
      'District Management',
      'Compliance Automation',
    ],
  },
  {
    id: '5',
    slug: '5SignsYourDistrictNeedsaComplianceUpgrade2',
    category: 'Government & Education',
    title: '5 Signs Your District Needs a Compliance Upgrade',
    subtitle: 'A quick look back at our time in San Francisco during GDC and PGC.',
    content: `
      <p>School districts across the country are facing increasing pressure to modernize their compliance processes. But how do you know when it's time to upgrade your compliance systems?</p>

      <h2>Sign #1: Manual Processes Are Slowing You Down</h2>
      <p>If your staff is spending more time on paperwork than on student-focused activities, it's a clear sign that your compliance processes need modernization. Manual processes are not only time-consuming but also prone to errors.</p>

      <h2>Sign #2: Compliance Audits Are Stressful</h2>
      <p>When preparing for compliance audits becomes a major source of stress and requires significant preparation time, your current systems aren't working effectively. Modern compliance solutions should make audits routine and straightforward.</p>

      <h2>Sign #3: You're Missing Important Deadlines</h2>
      <p>If your district frequently misses compliance deadlines or struggles to meet reporting requirements, your current processes aren't keeping up with your obligations.</p>

      <h2>Sign #4: Limited Visibility Into Compliance Status</h2>
      <p>If you can't quickly assess your district's compliance status or identify potential issues before they become problems, you need better monitoring and reporting capabilities.</p>

      <h2>Sign #5: Growing Administrative Burden</h2>
      <p>When compliance-related administrative tasks are consuming an increasing amount of your staff's time and resources, it's time to consider automation solutions.</p>

      <h2>Next Steps</h2>
      <p>If you're experiencing any of these signs, consider exploring modern compliance solutions that can:</p>

      <ul>
        <li>Automate routine compliance tasks</li>
        <li>Provide real-time compliance monitoring</li>
        <li>Improve accuracy and reduce errors</li>
        <li>Free up staff time for student-focused activities</li>
      </ul>

      <p>Modernizing your compliance processes isn't just about meeting requirements—it's about creating more efficient, effective school districts that can focus on their primary mission: educating students.</p>
    `,
    featured_image: blogImage3,
    published_at: '2025-05-05T12:00:00Z',
    meta_title: '5 Signs Your District Needs a Compliance Upgrade - Filuta',
    meta_description: 'A quick look back at our time in San Francisco during GDC and PGC.',
    seo_keywords: [
      'School Districts',
      'Compliance Upgrade',
      'Education Compliance',
      'District Management',
      'Compliance Automation',
    ],
  },
];

export const orderedCategories = ['News', 'Government & Education', 'Research'];

export function filteredCards(category) {
  if (category === 'All') return BlogCards;
  return BlogCards.filter(card => card.category.toLowerCase() === category.toLowerCase());
}

export const categories = [
  {
    title: 'All',
  },
  {
    title: 'News',
  },
  {
    title: 'Research',
  },
  {
    title: 'Government & Education',
  },
];

export const activeIndex = ref(0);

export function setActive(index) {
  activeIndex.value = index;
}

export const activeCategory = computed(() => categories[activeIndex.value].title);

export const filteredCardsByCategory = category => {
  if (category.toLowerCase() === 'all') return BlogCards;
  return BlogCards.filter(card => card.category.toLowerCase() === category.toLowerCase());
};

export const categoriesToShow = computed(() => {
  if (activeCategory.value.toLowerCase() === 'all') {
    return orderedCategories;
  } else {
    return [activeCategory.value];
  }
});
