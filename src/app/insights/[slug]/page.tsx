import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { PageHeader } from '@/components/blocks/PageHeader';
import { CtaBand } from '@/components/blocks/CtaBand';
import { Mdx } from '@/components/Mdx';
import { Container, Section, Prose, Badge } from '@/components/ui';
import { JsonLd } from '@/components/JsonLd';
import { articleSchema, breadcrumbSchema } from '@/lib/schema';
import { getPosts, getPost } from '@/lib/content';
import { formatDate, readingTime } from '@/lib/utils';

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/insights/${post.slug}` },
    openGraph: {
      type: 'article',
      title: `${post.title} | DevMations`,
      description: post.description,
      url: `/insights/${post.slug}`,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      tags: post.tags,
    },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const others = getPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const trail = [
    { name: 'Home', href: '/' },
    { name: 'Insights', href: '/insights' },
    { name: post.title, href: `/insights/${post.slug}` },
  ];

  return (
    <>
      <JsonLd
        schema={[
          articleSchema({
            title: post.title,
            description: post.description,
            slug: post.slug,
            date: post.date,
            updated: post.updated,
          }),
          breadcrumbSchema(trail),
        ]}
      />

      <PageHeader eyebrow="Insights" title={post.title} answer={post.description} breadcrumb={trail}>
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <span className="font-mono text-xs text-ink-subtle">
            {formatDate(post.date)}
            {post.updated ? ` · updated ${formatDate(post.updated)}` : ''}
          </span>
          <span className="font-mono text-xs text-ink-subtle">{readingTime(post.body)}</span>
        </div>
      </PageHeader>

      <Section>
        <Container className="max-w-3xl">
          <Prose>
            <Mdx source={post.body} />
          </Prose>

          {post.tags.length > 0 ? (
            <ul className="mt-12 flex flex-wrap gap-2 border-t border-line pt-8">
              {post.tags.map((tag) => (
                <li key={tag}>
                  <Badge>{tag}</Badge>
                </li>
              ))}
            </ul>
          ) : null}

          {others.length > 0 ? (
            <div className="mt-12 border-t border-line pt-8">
              <p className="mb-4 font-mono text-[0.625rem] tracking-[0.16em] text-ink-subtle uppercase">
                Read next
              </p>
              <ul className="flex flex-col gap-3">
                {others.map((other) => (
                  <li key={other.slug}>
                    <Link
                      href={`/insights/${other.slug}`}
                      className="text-[0.9375rem] text-ink-muted transition-colors hover:text-ink"
                    >
                      {other.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
