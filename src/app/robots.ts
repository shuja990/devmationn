import type { MetadataRoute } from 'next';
import { site } from '@/content/site';

/**
 * AI crawlers are named explicitly and allowed.
 *
 * This is the load-bearing part. Several of these bots are blocked by default
 * on common hosting stacks and CDN bot-protection rulesets, and being
 * invisible to answer engines is the entire failure mode this site is trying
 * to avoid. Listing them by name makes the intent auditable rather than
 * accidental.
 */
const aiCrawlers = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'CCBot',
  'Bytespider',
  'meta-externalagent',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/'] },
      ...aiCrawlers.map((userAgent) => ({ userAgent, allow: '/' })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
