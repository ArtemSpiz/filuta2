export interface HeaderNav {
  title: string;
  arrow: boolean;
  href: string;
  links?: HeaderNavLink[];
}

export interface HeaderNavLink {
  icon: string;
  link: string;
  href: string;
  subtitle?: string;
}

export const headerNavs: HeaderNav[] = [
  {
    title: 'Solutions',
    arrow: true,
    href: '#',
    links: [
      {
        icon: 'headerIcon1',
        link: 'Automotive Infotainment',
        href: '#',
      },
      {
        icon: 'headerIcon3',
        link: 'Defence Simulators',
        href: '#',
      },
      {
        icon: 'headerIcon2',
        link: 'Government & Education ',
        href: '/government-education',
      },
    ],
  },
  {
    title: 'Research',
    arrow: false,
    href: '/research',
  },
  {
    title: 'Company',
    arrow: true,
    href: '#',
    links: [
      {
        icon: 'headerIcon6',
        link: 'About us',
        href: '/about-us',
        subtitle: 'Everything you need to know about Filuta',
      },
      {
        icon: 'headerIcon8',
        link: 'Blog ',
        href: '/blog',
        subtitle: 'Read our latest news and updates',
      },
      {
        icon: 'headerIcon7',
        link: 'Career',
        href: '#',
        subtitle: "Let's build the future of AI together",
      },
    ],
  },
];

export const headerCTA = {
  label: 'Get Started',
  to: '/contact', // or your preferred CTA link
};
