import { glossary, getTerm } from '@/content/glossary';
import { glossaryTermToMarkdown } from '@/lib/markdown-export';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return glossary.map((term) => ({ slug: term.slug }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const term = getTerm(slug);
  if (!term) return new Response('Not found', { status: 404 });

  return new Response(glossaryTermToMarkdown(term), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
