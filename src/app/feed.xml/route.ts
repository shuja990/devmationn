import { getPosts } from '@/lib/content';
import { site } from '@/content/site';

export const dynamic = 'force-static';

/** Escapes the five XML entities. Post titles are authored, not user input, but this is cheap. */
function esc(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function GET() {
  const posts = getPosts();
  const updated = posts[0]?.date ?? new Date().toISOString().slice(0, 10);

  const items = posts
    .map((post) =>
      [
        '    <item>',
        `      <title>${esc(post.title)}</title>`,
        `      <link>${site.url}/insights/${post.slug}</link>`,
        `      <guid isPermaLink="true">${site.url}/insights/${post.slug}</guid>`,
        `      <description>${esc(post.description)}</description>`,
        `      <pubDate>${new Date(`${post.date}T00:00:00Z`).toUTCString()}</pubDate>`,
        ...post.tags.map((tag) => `      <category>${esc(tag)}</category>`),
        '    </item>',
      ].join('\n'),
    )
    .join('\n');

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    '  <channel>',
    `    <title>${esc(site.name)} — Insights</title>`,
    `    <link>${site.url}/insights</link>`,
    `    <description>${esc('Writing on LLM evaluation, AI agents, MCP and testing AI systems in production.')}</description>`,
    '    <language>en</language>',
    `    <lastBuildDate>${new Date(`${updated}T00:00:00Z`).toUTCString()}</lastBuildDate>`,
    `    <atom:link href="${site.url}/feed.xml" rel="self" type="application/rss+xml"/>`,
    items,
    '  </channel>',
    '</rss>',
  ].join('\n');

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
