import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { PageHeader } from '@/components/blocks/PageHeader';
import { CtaBand } from '@/components/blocks/CtaBand';
import { Mdx } from '@/components/Mdx';
import { Container, Section, Prose, Badge } from '@/components/ui';
import { JsonLd } from '@/components/JsonLd';
import { articleSchema, breadcrumbSchema } from '@/lib/schema';
import { getCaseStudies, getCaseStudy } from '@/lib/content';
import { formatDate } from '@/lib/utils';

export function generateStaticParams() {
  return getCaseStudies().map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  return {
    title: study.title,
    description: study.description,
    alternates: { canonical: `/work/${study.slug}` },
    openGraph: {
      type: 'article',
      title: `${study.title} | DevMations`,
      description: study.description,
      url: `/work/${study.slug}`,
      publishedTime: study.date,
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const trail = [
    { name: 'Home', href: '/' },
    { name: 'Work', href: '/work' },
    { name: study.title, href: `/work/${study.slug}` },
  ];

  return (
    <>
      <JsonLd
        schema={[
          articleSchema({
            title: study.title,
            description: study.description,
            slug: study.slug,
            date: study.date,
            section: 'work',
          }),
          breadcrumbSchema(trail),
        ]}
      />

      <PageHeader
        eyebrow={`Case study — ${study.client}`}
        title={study.title}
        answer={study.description}
        breadcrumb={trail}
      >
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <Badge tone="brand">{study.industry}</Badge>
          <span className="font-mono text-xs text-ink-subtle">{formatDate(study.date)}</span>
        </div>
      </PageHeader>

      {study.results.length > 0 ? (
        <Section className="border-b border-line bg-surface/30 py-12">
          <Container>
            <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {study.results.map((result) => (
                <div key={result.label} className="flex flex-col gap-1">
                  <dd className="font-display text-[2rem] leading-none font-semibold text-brand-tint">
                    {result.value}
                  </dd>
                  <dt className="font-mono text-[0.6875rem] tracking-wide text-ink-subtle uppercase">
                    {result.label}
                  </dt>
                </div>
              ))}
            </dl>
          </Container>
        </Section>
      ) : null}

      <Section>
        <Container className="max-w-3xl">
          <Prose>
            <Mdx source={study.body} />
          </Prose>

          {study.stack.length > 0 ? (
            <div className="mt-14 border-t border-line pt-8">
              <p className="mb-4 font-mono text-[0.625rem] tracking-[0.16em] text-ink-subtle uppercase">
                Built with
              </p>
              <ul className="flex flex-wrap gap-2">
                {study.stack.map((tech) => (
                  <li key={tech}>
                    <Badge>{tech}</Badge>
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
