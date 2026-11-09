import { SiteContent } from '@/models/content';
import { SystemSettings } from '@/models/settings';

export const WEBSITE_DOMAIN = 'hedobec.com';

export const THEME_COLOR = '#0962f1b1';

export const SITE_CONTENT: SiteContent = {
  home: {
    section1: {
      title:
        'Engineering design and project execution support for critical industries',
      body: 'HEDO-BEC Engineering and Construction Limited supports oil and gas, maritime, energy, and construction projects with engineering design, procurement, manpower, instrumentation, piping, and logistics management services.',
      image: '/images/placeholder.jpg',
    },
  },
  about: {
    section1: {
      title: 'About Us',
      body: 'Learn more about HEDO-BEC Engineering and Construction Limited, our delivery approach, and the values that guide our project execution.',
    },
  },
  contact: {
    section1: {
      title: 'Contact Us',
      body: 'Speak with HEDO-BEC about engineering, supply, manpower, and project execution support for your next opportunity.',
    },
  },
  blog: {
    section1: {
      title: 'Insights & Updates',
      body: 'Follow company updates, project insights, and engineering perspectives from HEDO-BEC.',
    },
  },
  termsOfService: {
    section1: {
      title: 'Terms of Service',
      body: 'Review the terms that govern access to and use of the HEDO-BEC website.',
    },
  },
  privacyPolicy: {
    section1: {
      title: 'Privacy Policy',
      body: 'Understand how HEDO-BEC handles visitor information and website-related data.',
    },
  },
};

export const SYSTEM_SETTINGS: SystemSettings = {
  siteName: 'HEDO-BEC Engineering and Construction Limited',
  siteDescription:
    'HEDO-BEC Engineering and Construction Limited provides engineering design, procurement and supply, manpower supply, instrumentation, piping, logistics and management, and steel detailing services for the oil and gas, maritime, energy, and construction sectors.',
  siteLogo: `https://${WEBSITE_DOMAIN}/images/logo.svg`,
  siteIcon: `https://${WEBSITE_DOMAIN}/images/icon.svg`,
  siteUrl: `https://${WEBSITE_DOMAIN}`,
  siteSlogan:
    'Quality, cost-effective, reliable, and global-standard engineering services.',
  siteGraphImage: `https://${WEBSITE_DOMAIN}/images/og-image.jpg`,
  siteKeywords: [
    'HEDO-BEC',
    'engineering and construction',
    'engineering design',
    'procurement and supply',
    'manpower supply',
    'instrumentation',
    'piping',
    'logistics and management',
    'oil and gas',
    'maritime',
    'energy',
    'construction',
    'Nigeria',
  ],
  siteAuthor: 'HEDO-BEC Engineering and Construction Limited',
  siteLocale: 'en_NG',
  siteType: 'website',
  ogTitle: 'HEDO-BEC Engineering and Construction Limited',
  ogDescription:
    'Engineering design, procurement, manpower, instrumentation, piping, logistics, steel detailing, and project support for oil and gas, maritime, energy, and construction clients.',
  ogImage: `https://${WEBSITE_DOMAIN}/images/og-image.jpg`,
  ogImageAlt: 'HEDO-BEC Engineering and Construction Limited',
  twitterCard: 'summary_large_image',
  twitterSite: '',
  twitterCreator: '',
  twitterTitle: 'HEDO-BEC Engineering and Construction Limited',
  twitterDescription:
    'Engineering design, procurement, manpower, instrumentation, piping, logistics, and steel detailing services in Nigeria.',
  twitterImage: `https://${WEBSITE_DOMAIN}/images/og-image.jpg`,
  maintenanceMode: false,
  headerLinks: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'About Us',
      href: '/about',
    },
    {
      label: 'Our Services',
      href: '/services',
      dropdown: [
        {
          label: 'Engineering Design',
          href: '/services/engineering-design',
        },
        {
          label: 'Procurement / Supply',
          href: '/services/procurement',
        },
        {
          label: 'Manpower Supply',
          href: '/services/manpower',
        },
        {
          label: 'Instrumentation',
          href: '/services/instrumentation',
        },
        {
          label: 'Piping',
          href: '/services/piping',
        },
        {
          label: 'Logistics & Management',
          href: '/services/logistics',
        },
      ],
    },
    {
      label: 'Industries',
      href: '/industries',
    },
    {
      label: 'Blog',
      href: '/blog',
    },
    {
      label: 'Contact Us',
      href: '/contact',
      isButton: true,
    },
  ],
  footerLinks: [
    {
      section: 'Company',
      links: [
        {
          label: 'About Us',
          href: '/about',
        },
        {
          label: 'Services',
          href: '/services',
        },
        {
          label: 'Industries',
          href: '/industries',
        },
        {
          label: 'Blog',
          href: '/blog',
        },
      ],
    },
    {
      section: 'Services',
      links: [
        {
          label: 'Engineering Design',
          href: '/services/engineering-design',
        },
        {
          label: 'Procurement / Supply',
          href: '/services/procurement',
        },
        {
          label: 'Manpower Supply',
          href: '/services/manpower',
        },
        {
          label: 'Instrumentation',
          href: '/services/instrumentation',
        },
        {
          label: 'Piping',
          href: '/services/piping',
        },
        {
          label: 'Logistics & Management',
          href: '/services/logistics',
        },
      ],
    },
    {
      section: 'Legal',
      links: [
        {
          label: 'Privacy Policy',
          href: '/privacy-policy',
        },
        {
          label: 'Terms of Service',
          href: '/terms-of-service',
        },
      ],
    },
    {
      section: 'Contact Us',
      links: [],
    },
  ],
  socialLinks: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/hedo-bec-engineering-and-construction-limited',
      target: '_blank',
    },
  ],
  contact: {
    email: '',
    phones: ['+2348035008813'],
    whatsappPhone: '',
    addresses: [
      {
        country: 'Nigeria',
        phone: '+2348035008813',
        address: 'Enugu, Enugu State, Nigeria',
      },
    ],
    map: '',
  },
};
