export interface FooterPartner {
  logo: string;
  title: string;
  subtitle: string;
}

export interface FooterLink {
  title: string;
  subtitles: FooterSubtitle[];
}

export interface FooterSubtitle {
  subtitle: string;
  href: string;
}

export const FooterPartnersLinks: FooterPartner[] = [
  {
    logo: 'footerAirLogo',
    title: 'AIPlan4EU',
    subtitle:
      'The AIPlan4EU project is funded by the European Commission – H2020 research and innovation programme under grant agreement No 101016442',
  },
  {
    logo: 'footerTechLogo',
    title: 'CzechInvest',
    subtitle: 'We were supported by the system project Technological Incubation',
  },
];

export const FooterLinks: FooterLink[] = [
  {
    title: 'Solutions',
    subtitles: [
      { subtitle: 'Government & Education', href: '/government-education' },
      { subtitle: 'Manufacturing', href: '#' },
      { subtitle: 'Logistics', href: '#' },
    ],
  },
  {
    title: 'Links',
    subtitles: [
      { subtitle: 'Platform', href: '#' },
      { subtitle: 'Research', href: '/research' },
      { subtitle: 'Team', href: '#' },
      { subtitle: 'Career', href: '#' },
      { subtitle: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Socials',
    subtitles: [{ subtitle: 'LinkedIn', href: '#' }],
  },
];
