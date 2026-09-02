import { aiServices, engineeringServices, serviceGroupLabels } from '@/content/services';

/**
 * Single source of truth for identity, contact details and navigation.
 * Header, footer, sitemap, llms.txt and every JSON-LD block read from here,
 * so a changed email or a renamed service is a one-line edit.
 */

export const site = {
  name: 'DevMations',
  wordmark: 'devmations',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.devmations.com',
  tagline: 'AI evals, agents and QA',
  description:
    'DevMations is an AI engineering agency that builds agent and RAG systems, evaluation harnesses, QA agents and MCP integrations — and ships the web and mobile products around them.',
  email: 'hello@devmations.com',
  location: 'Islamabad, Pakistan',
  socials: {
    linkedin: 'https://www.linkedin.com/company/devmations',
  },
} as const;

export type NavItem = {
  title: string;
  href: string;
  description?: string;
};

export const primaryNav: NavItem[] = [
  { title: 'Services', href: '/services' },
  { title: 'Work', href: '/work' },
  { title: 'About', href: '/about' },
  { title: 'Insights', href: '/insights' },
  { title: 'Careers', href: '/careers' },
];

export const footerNav: { heading: string; links: NavItem[] }[] = [
  {
    heading: serviceGroupLabels.ai,
    links: aiServices.map((s) => ({ title: s.shortTitle, href: `/services/${s.slug}` })),
  },
  {
    heading: serviceGroupLabels.engineering,
    links: engineeringServices.map((s) => ({ title: s.shortTitle, href: `/services/${s.slug}` })),
  },
  {
    heading: 'Company',
    links: [
      { title: 'About', href: '/about' },
      { title: 'Work', href: '/work' },
      { title: 'Careers', href: '/careers' },
      { title: 'Contact', href: '/contact' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { title: 'Insights', href: '/insights' },
      { title: 'Glossary', href: '/glossary' },
      { title: 'RSS feed', href: '/feed.xml' },
      { title: 'llms.txt', href: '/llms.txt' },
    ],
  },
];
