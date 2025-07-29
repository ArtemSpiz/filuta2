export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const features: Feature[] = [
  {
    id: 1,
    title: 'Intelligent Automation',
    description:
      'AI-powered workflows that automatically handle compliance tasks, reducing manual effort by up to 80%.',
    icon: 'IconAutomation',
  },
  {
    id: 2,
    title: 'Risk Reduction',
    description:
      'Advanced analytics and monitoring to identify and mitigate compliance risks before they become issues.',
    icon: 'IconShield',
  },
  {
    id: 3,
    title: 'Real-time Monitoring',
    description:
      'Continuous monitoring and alerts to ensure compliance standards are maintained across all operations.',
    icon: 'IconMonitor',
  },
  {
    id: 4,
    title: 'Customizable Workflows',
    description:
      'Flexible platform that adapts to your specific compliance requirements and organizational structure.',
    icon: 'IconSettings',
  },
  {
    id: 5,
    title: 'Comprehensive Reporting',
    description:
      'Detailed reports and dashboards providing insights into compliance performance and areas for improvement.',
    icon: 'IconChart',
  },
  {
    id: 6,
    title: 'Expert Support',
    description:
      'Dedicated team of compliance experts to help you implement and optimize your compliance processes.',
    icon: 'IconSupport',
  },
];
