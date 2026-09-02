import { site } from '@/content/site';
import type { Service } from '@/content/services';

/**
 * JSON-LD builders.
 *
 * Structured data is the highest-leverage thing on the site for both Google
 * and answer engines: it is the only part of the page that states facts in a
 * form a machine cannot misread. Every builder returns a plain object; the
 * <JsonLd> component below serialises it.
 */

const ORG_ID = `${site.url}/#organization`;
const SITE_ID = `${site.url}/#website`;

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': ORG_ID,
    name: site.name,
    url: site.url,
    email: site.email,
    description: site.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Islamabad',
      addressCountry: 'PK',
    },
    areaServed: 'Worldwide',
    knowsAbout: [
      'AI agents',
      'Retrieval-augmented generation',
      'LLM evaluation',
      'Model Context Protocol',
      'Test automation',
      'Quality assurance',
      'Web application development',
      'Mobile application development',
    ],
    sameAs: [site.socials.linkedin],
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': SITE_ID,
    url: site.url,
    name: site.name,
    description: site.description,
    publisher: { '@id': ORG_ID },
  };
}

export function serviceSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    alternateName: service.technicalTitle,
    description: service.answer,
    url: `${site.url}/services/${service.slug}`,
    serviceType: service.technicalTitle,
    keywords: service.alsoCalled.join(', '),
    provider: { '@id': ORG_ID },
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${service.title} deliverables`,
      itemListElement: service.deliverables.map((d) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: d.title, description: d.description },
      })),
    },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

export function articleSchema({
  title,
  description,
  slug,
  date,
  updated,
  section = 'insights',
}: {
  title: string;
  description: string;
  slug: string;
  date: string;
  updated?: string;
  section?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `${site.url}/${section}/${slug}`,
    datePublished: date,
    dateModified: updated ?? date,
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: `${site.url}/${section}/${slug}`,
  };
}

export function breadcrumbSchema(trail: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: `${site.url}${crumb.href}`,
    })),
  };
}

export function definedTermSchema(term: { slug: string; term: string; definition: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    '@id': `${site.url}/glossary/${term.slug}`,
    name: term.term,
    description: term.definition,
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      '@id': `${site.url}/glossary`,
      name: 'DevMations AI & QA Glossary',
    },
  };
}

export function jobPostingSchema(role: {
  slug: string;
  title: string;
  description: string;
  employmentType: string;
  location: string;
  posted: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: role.title,
    description: role.description,
    employmentType: role.employmentType,
    datePosted: role.posted,
    hiringOrganization: { '@id': ORG_ID },
    jobLocationType: 'TELECOMMUTE',
    applicantLocationRequirements: { '@type': 'Country', name: role.location },
    url: `${site.url}/careers/${role.slug}`,
  };
}
