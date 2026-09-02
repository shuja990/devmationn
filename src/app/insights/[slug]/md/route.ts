import { getPosts, getPost } from '@/lib/content';
import { site } from '@/content/site';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

/** The post body is already Markdown, so this is the source with a header. */
export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return new Response('Not found', { status: 404 });

  const body = [
    `# ${post.title}`,
    '',
    post.description,
    '',
    `Published ${post.date}${post.updated ? `, updated ${post.updated}` : ''}`,
    post.tags.length > 0 ? `Tags: ${post.tags.join(', ')}` : '',
    '',
    post.body.trim(),
    '',
    '---',
    '',
    `Source: ${site.url}/insights/${post.slug}`,
  ]
    .filter((line) => line !== '')
    .join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
