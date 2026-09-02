import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Rss } from 'lucide-react';

import { PageHeader } from '@/components/blocks/PageHeader';
import { CtaBand } from '@/components/blocks/CtaBand';
import { Container, Section, Card, Badge, SectionHeading } from '@/components/ui';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { getPosts } from '@/lib/content';
import { formatDate, readingTime } from '@/lib/utils';
import { glossary } from '@/content/glossary';

export const metadata: Metadata = {
  title: 'Insights — writing on evals, agents and QA',
  description:
    'Practical writing from DevMations on testing AI systems, building assistants that hold up in production, MCP, and quality assurance for software that behaves differently every run.',
  alternates: { canonical: '/insights' },
};

export default function InsightsPage() {
  const posts = getPosts();
  const [lead, ...rest] = posts;

  // Every distinct tag, so the page shows its own subject range rather than
  // leaving the reader to infer it from two headlines.
  const topics = Array.from(new Set(posts.flatMap((p) => p.tags))).sort();

  // A few glossary entries as a starting point. Real content, and it stops
  // this page looking empty while there are only a handful of posts.
  const startingTerms = glossary
    .filter((t) => ['eval-harness', 'rag', 'llm-as-judge', 'mcp'].includes(t.slug))
    .sort((a, b) => a.term.localeCompare(b.term));

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
        answer="Writing from the DevMations team on testing AI systems, building assistants that hold up with real customers, connecting AI to internal tools, and doing quality assurance on software that answers differently every time."
        breadcrumb={[
          { name: 'Home', href: '/' },
          { name: 'Insights', href: '/insights' },
        ]}
      >
        {topics.length > 0 ? (
          <ul className="flex flex-wrap gap-2 pt-2">
            {topics.map((topic) => (
              <li key={topic}>
                <Badge>{topic}</Badge>
              </li>
            ))}
          </ul>
        ) : null}
      </PageHeader>

      {posts.length === 0 ? (
        <Section>
          <Container>
            <p className="text-ink-muted">Nothing published yet. The first pieces are being written.</p>
          </Container>
        </Section>
      ) : (
        <Section>
          <Container>
            {/* The newest piece gets real weight rather than being one of two
                identical small cards adrift in an empty grid. */}
            <Link href={`/insights/${lead.slug}`} className="group block">
              <Card className="flex flex-col gap-5 transition-colors group-hover:bg-surface-2 sm:p-9">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge tone="brand">Latest</Badge>
                  <span className="font-mono text-[0.6875rem] text-ink-subtle">
                    {formatDate(lead.date)} &middot; {readingTime(lead.body)}
                  </span>
                </div>
                <h2 className="max-w-3xl text-[1.625rem] leading-tight font-semibold sm:text-[2rem]">
                  {lead.title}
                </h2>
                <p className="max-w-2xl text-[1.0625rem] leading-relaxed text-ink-muted">
                  {lead.description}
                </p>
                <span className="inline-flex items-center gap-1.5 font-mono text-xs text-brand-tint">
                  Read it
                  <ArrowRight
                    className="size-3 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Card>
            </Link>

            {rest.length > 0 ? (
              <ul className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {rest.map((post) => (
                  <li key={post.slug}>
                    <Link href={`/insights/${post.slug}`} className="group block h-full">
                      <Card className="flex h-full flex-col gap-3 transition-colors group-hover:bg-surface-2">
                        <span className="font-mono text-[0.6875rem] text-ink-subtle">
                          {formatDate(post.date)} &middot; {readingTime(post.body)}
                        </span>
                        <h3 className="text-[1.125rem] leading-snug font-semibold">{post.title}</h3>
                        <p className="text-sm leading-relaxed text-ink-muted">{post.description}</p>
                        <ul className="mt-auto flex flex-wrap gap-1.5 pt-3">
                          {post.tags.map((tag) => (
                            <li key={tag}>
                              <Badge>{tag}</Badge>
                            </li>
                          ))}
                        </ul>
                      </Card>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}

            <a
              href="/feed.xml"
              className="mt-8 inline-flex items-center gap-2 font-mono text-xs text-ink-subtle transition-colors hover:text-ink-muted"
            >
              <Rss className="size-3.5" aria-hidden="true" />
              Subscribe by RSS
            </a>
          </Container>
        </Section>
      )}

      {/* Cross-link into the glossary. Real content, useful to a reader landing
          cold on a term, and genuine internal linking for search. */}
      <Section className="border-t border-line bg-surface/30">
        <Container>
          <SectionHeading
            eyebrow="Start here"
            title="If a term above was unfamiliar"
            lead="The glossary defines everything we use, in plain language, without assuming you already know it."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {startingTerms.map((term) => (
              <li key={term.slug}>
                <Link href={`/glossary/${term.slug}`} className="group block h-full">
                  <Card className="flex h-full flex-col gap-2 transition-colors group-hover:bg-surface-2">
                    <h3 className="text-[1rem] font-semibold group-hover:text-brand-tint">
                      {term.term}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink-muted">{term.definition}</p>
                  </Card>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/glossary"
            className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs text-brand-tint transition-colors hover:text-brand"
          >
            All {glossary.length} terms
            <ArrowRight className="size-3" aria-hidden="true" />
          </Link>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
