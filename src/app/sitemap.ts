import type { MetadataRoute } from 'next';

import { services } from '@/content/services';
import { glossary } from '@/content/glossary';
import { roles } from '@/content/roles';
import { getPosts, getCaseStudies } from '@/lib/content';
import { site } from '@/content/site';

/**
 * Generated from the same content sources the pages render from, so a new
 * service or post is in the sitemap the moment it exists. Replaces the old
 * next-sitemap package and the committed public/sitemap*.xml files.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${site.url}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${site.url}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${site.url}/work`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${site.url}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${site.url}/insights`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${site.url}/glossary`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${site.url}/careers`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${site.url}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
  ];

  return [
    ...staticRoutes,
    ...services.map((s) => ({
      url: `${site.url}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    ...glossary.map((t) => ({
      url: `${site.url}/glossary/${t.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...getCaseStudies().map((c) => ({
      url: `${site.url}/work/${c.slug}`,
      lastModified: new Date(c.date),
      changeFrequency: 'yearly' as const,
      priority: 0.8,
    })),
    ...getPosts().map((p) => ({
      url: `${site.url}/insights/${p.slug}`,
      lastModified: new Date(p.updated ?? p.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...roles
      .filter((r) => r.open)
      .map((r) => ({
        url: `${site.url}/careers/${r.slug}`,
        lastModified: new Date(r.posted),
        changeFrequency: 'weekly' as const,
        priority: 0.5,
      })),
  ];
}
