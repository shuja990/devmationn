import type { Metadata } from 'next';
import Link from 'next/link';

import { PageHeader } from '@/components/blocks/PageHeader';
import { CtaBand } from '@/components/blocks/CtaBand';
import { Container, Section, Card, Badge } from '@/components/ui';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { getPosts } from '@/lib/content';
import { formatDate, readingTime } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Insights — writing on evals, agents and QA',
  description:
    'Practical writing from DevMations on LLM evaluation, agent architecture, MCP, and testing AI systems in production.',
  alternates: { canonical: '/insights' },
};

export default function InsightsPage() {
  const posts = getPosts();

  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Insights', href: '/insights' },
        ])}
      />

      <PageHeader
        eyebrow="Insights"
        title="What we have learned doing this"
        answer="Writing from the DevMations team on evaluating LLM systems, building agents that hold up in production, the Model Context Protocol, and testing software that behaves differently every run."
        breadcrumb={[
          { name: 'Home', href: '/' },
          { name: 'Insights', href: '/insights' },
        ]}
      />

      <Section>
        <Container>
          {posts.length === 0 ? (
            <p className="py-8 text-ink-muted">
              Nothing published yet. The first pieces are being written.
            </p>
          ) : (
            <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/insights/${post.slug}`} className="group block h-full">
                    <Card className="flex h-full flex-col gap-3 transition-colors group-hover:bg-surface-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-[0.6875rem] text-ink-subtle">
                          {formatDate(post.date)}
                        </span>
                        <span className="font-mono text-[0.6875rem] text-ink-subtle">
                          &middot; {readingTime(post.body)}
                        </span>
                      </div>
                      <h2 className="text-[1.125rem] leading-snug font-semibold">{post.title}</h2>
                      <p className="text-sm leading-relaxed text-ink-muted">{post.description}</p>
                      {post.tags.length > 0 ? (
                        <ul className="mt-auto flex flex-wrap gap-1.5 pt-3">
                          {post.tags.map((tag) => (
                            <li key={tag}>
                              <Badge>{tag}</Badge>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </Card>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          <p className="mt-10 font-mono text-xs text-ink-subtle">
            <a href="/feed.xml" className="hover:text-ink-muted">
              RSS feed
            </a>
          </p>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
