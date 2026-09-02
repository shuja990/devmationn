import { services, getService } from '@/content/services';
import { serviceToMarkdown } from '@/lib/markdown-export';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

/**
 * Markdown twin of the service page, at /services/<slug>/md.
 * An LLM fetching this gets clean prose instead of parsing rendered React.
 * Generated from the same object the page renders, so the two cannot drift.
 */
export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return new Response('Not found', { status: 404 });

  return new Response(serviceToMarkdown(service), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
