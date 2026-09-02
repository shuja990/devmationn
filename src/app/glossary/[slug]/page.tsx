import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { PageHeader } from '@/components/blocks/PageHeader';
import { CtaBand } from '@/components/blocks/CtaBand';
import { Container, Section } from '@/components/ui';
import { JsonLd } from '@/components/JsonLd';
import { definedTermSchema, breadcrumbSchema } from '@/lib/schema';
import { glossary, getTerm } from '@/content/glossary';

export function generateStaticParams() {
  return glossary.map((term) => ({ slug: term.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const term = getTerm(slug);
  if (!term) return {};

  return {
    title: `${term.term} — definition`,
    description: term.definition,
    alternates: { canonical: `/glossary/${term.slug}` },
    openGraph: {
      title: `${term.term} — definition | DevMations`,
      description: term.definition,
      url: `/glossary/${term.slug}`,
    },
  };
}

export default async function TermPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const term = getTerm(slug);
  if (!term) notFound();

  const related = term.related.map(getTerm).filter((t) => t !== undefined);

  const trail = [
    { name: 'Home', href: '/' },
    { name: 'Glossary', href: '/glossary' },
    { name: term.term, href: `/glossary/${term.slug}` },
  ];

  return (
    <>
      <JsonLd schema={[definedTermSchema(term), breadcrumbSchema(trail)]} />

      <PageHeader
        eyebrow={term.category}
        title={term.term}
        answer={term.definition}
        breadcrumb={trail}
      />

      <Section>
        <Container className="max-w-3xl">
          <p className="text-[1.0625rem] leading-relaxed text-ink-muted">{term.detail}</p>

          {related.length > 0 ? (
            <div className="mt-12 border-t border-line pt-8">
              <p className="mb-4 font-mono text-[0.625rem] tracking-[0.16em] text-ink-subtle uppercase">
                Related terms
              </p>
              <ul className="flex flex-col gap-4">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/glossary/${r.slug}`}
                      className="text-[0.9375rem] font-medium text-ink transition-colors hover:text-brand-tint"
                    >
                      {r.term}
                    </Link>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">{r.definition}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <p className="mt-10">
            <Link href="/glossary" className="font-mono text-xs text-brand-tint hover:text-brand">
              &larr; All terms
            </Link>
          </p>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
