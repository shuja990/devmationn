import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { PageHeader } from '@/components/blocks/PageHeader';
import { CtaBand } from '@/components/blocks/CtaBand';
import { Container, Section, Card } from '@/components/ui';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { glossary, glossaryCategories } from '@/content/glossary';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Glossary — AI evaluation, agents and QA terms',
  description:
    'Plain definitions of the terms used in AI evaluation, agent engineering and QA automation: eval harness, LLM-as-judge, golden dataset, MCP, agentic RAG, flake rate and more.',
  alternates: { canonical: '/glossary' },
};

/**
 * The index carries DefinedTermSet schema listing every term, so a crawler
 * gets the whole vocabulary from a single fetch.
 */
function definedTermSetSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    '@id': `${site.url}/glossary`,
    name: 'DevMations AI & QA Glossary',
    description:
      'Definitions of terms used in AI evaluation, agent engineering, MCP and QA automation.',
    hasDefinedTerm: glossary.map((term) => ({
      '@type': 'DefinedTerm',
      '@id': `${site.url}/glossary/${term.slug}`,
      name: term.term,
      description: term.definition,
    })),
  };
}

export default function GlossaryPage() {
  return (
    <>
      <JsonLd
        schema={[
          definedTermSetSchema(),
          breadcrumbSchema([
            { name: 'Home', href: '/' },
            { name: 'Glossary', href: '/glossary' },
          ]),
        ]}
      />

      <PageHeader
        eyebrow="Glossary"
        title="The vocabulary, defined plainly"
        answer="This glossary defines the terms used in AI evaluation, agent engineering, the Model Context Protocol and QA automation. Each entry states what the term means and why it matters in practice, without assuming prior knowledge."
        breadcrumb={[
          { name: 'Home', href: '/' },
          { name: 'Glossary', href: '/glossary' },
        ]}
      >
        {/* Jump links. With twenty terms across four groups, landing on a wall
            of definitions and scrolling to find one is the wrong experience. */}
        <nav aria-label="Glossary sections" className="flex flex-wrap gap-2 pt-3">
          {glossaryCategories.map((category) => {
            const count = glossary.filter((t) => t.category === category).length;
            if (count === 0) return null;
            return (
              <a
                key={category}
                href={`#${category.toLowerCase()}`}
                className="rounded-[var(--radius-pill)] bg-surface-2 px-3.5 py-1.5 text-xs text-ink-muted transition-colors hover:bg-surface-3 hover:text-ink"
              >
                {category}
                <span className="ml-1.5 font-mono text-ink-subtle">{count}</span>
              </a>
            );
          })}
        </nav>
      </PageHeader>

      <Section>
        <Container>
          <div className="flex flex-col gap-16">
            {glossaryCategories.map((category) => {
              const terms = glossary.filter((t) => t.category === category);
              if (terms.length === 0) return null;

              return (
                <section
                  key={category}
                  id={category.toLowerCase()}
                  className="flex scroll-mt-24 flex-col gap-6"
                >
                  <div className="flex items-baseline gap-3 border-b border-line pb-3">
                    <h2 className="font-mono text-[0.6875rem] tracking-[0.16em] text-brand uppercase">
                      {category}
                    </h2>
                    <span className="font-mono text-[0.6875rem] text-ink-subtle">
                      {terms.length} terms
                    </span>
                  </div>

                  <ul className="grid gap-4 md:grid-cols-2">
                    {terms.map((term) => (
                      <li key={term.slug}>
                        <Link href={`/glossary/${term.slug}`} className="group block h-full">
                          <Card className="flex h-full flex-col gap-2 transition-colors group-hover:bg-surface-2">
                            <h3 className="text-[1.0625rem] font-semibold group-hover:text-brand-tint">
                              {term.term}
                            </h3>
                            <p className="text-sm leading-relaxed text-ink-muted">
                              {term.definition}
                            </p>
                            <span className="mt-auto inline-flex items-center gap-1.5 pt-3 font-mono text-xs text-brand-tint">
                              Read more
                              <ArrowRight
                                className="size-3 transition-transform group-hover:translate-x-0.5"
                                aria-hidden="true"
                              />
                            </span>
                          </Card>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Need someone who knows this vocabulary?"
        body="If you are hiring for it or buying it, we can help with either. Tell us what you are trying to do."
      />
    </>
  );
}
