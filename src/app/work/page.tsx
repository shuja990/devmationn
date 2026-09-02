import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { PageHeader } from '@/components/blocks/PageHeader';
import { CtaBand } from '@/components/blocks/CtaBand';
import { WorkGrid } from '@/components/blocks/WorkGrid';
import { Container, Section, SectionHeading, Card, Badge } from '@/components/ui';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { projects } from '@/content/projects';
import { services } from '@/content/services';
import { getCaseStudies } from '@/lib/content';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Selected DevMations work: AI assistants, evaluation systems, fintech products, marketplaces and mobile apps. Every project links to a live deployment.',
  alternates: { canonical: '/work' },
};

export default function WorkPage() {
  const caseStudies = getCaseStudies();
  const serviceOptions = services.map((s) => ({ slug: s.slug, label: s.shortTitle }));

  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Work', href: '/work' },
        ])}
      />

      <PageHeader
        eyebrow="Work"
        title="Things we shipped, that you can open"
        answer="DevMations has delivered production applications across AI, fintech, e-commerce, travel, healthcare and government. Every project listed below links to a live deployment rather than a screenshot in a case study deck."
        breadcrumb={[
          { name: 'Home', href: '/' },
          { name: 'Work', href: '/work' },
        ]}
      />

      {caseStudies.length > 0 ? (
        <Section className="border-b border-line bg-surface/30">
          <Container>
            <SectionHeading
              eyebrow="Case studies"
              title="The full story on a few of them"
              lead="What the problem was, what we did, and what changed as a result."
            />
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((study) => (
                <Link key={study.slug} href={`/work/${study.slug}`} className="group block h-full">
                  <Card className="flex h-full flex-col gap-3 transition-colors group-hover:bg-surface-2">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <Badge tone="brand">{study.industry}</Badge>
                      <span className="font-mono text-[0.6875rem] text-ink-subtle">
                        {formatDate(study.date)}
                      </span>
                    </div>
                    <h3 className="text-[1.125rem] font-semibold">{study.title}</h3>
                    <p className="text-sm leading-relaxed text-ink-muted">{study.description}</p>
                    {study.results.length > 0 ? (
                      <dl className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
                        {study.results.slice(0, 2).map((r) => (
                          <div key={r.label}>
                            <dd className="font-display text-lg font-semibold text-brand-tint">
                              {r.value}
                            </dd>
                            <dt className="font-mono text-[0.625rem] text-ink-subtle uppercase">
                              {r.label}
                            </dt>
                          </div>
                        ))}
                      </dl>
                    ) : null}
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-3 font-mono text-xs text-brand-tint">
                      Read the case study
                      <ArrowRight
                        className="size-3 transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </Card>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      <Section>
        <Container>
          <SectionHeading eyebrow="Everything" title="All projects" />
          <div className="mt-10">
            <WorkGrid projects={projects} serviceOptions={serviceOptions} />
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Want something like one of these?"
        body="Point at the project closest to what you have in mind and tell us how yours differs. That is usually enough for a useful first conversation."
      />
    </>
  );
}
