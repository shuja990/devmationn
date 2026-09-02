import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';

import { PageHeader } from '@/components/blocks/PageHeader';
import { Faq } from '@/components/blocks/Faq';
import { CtaBand } from '@/components/blocks/CtaBand';
import { Reveal } from '@/components/blocks/Reveal';
import { Container, Section, SectionHeading, Card, ButtonLink, Badge } from '@/components/ui';
import { JsonLd } from '@/components/JsonLd';
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/schema';
import { services, getService } from '@/content/services';
import { resolveProjects } from '@/content/projects';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    // The technical term leads in metadata: this is the search surface, and
    // "AI Evals & LLM Quality" is what a technical buyer actually types.
    title: `${service.title} — ${service.technicalTitle}`,
    description: service.answer,
    keywords: service.alsoCalled,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} (${service.technicalTitle}) | DevMations`,
      description: service.answer,
      url: `/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = resolveProjects(service.relatedProjects);
  const trail = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: service.shortTitle, href: `/services/${service.slug}` },
  ];

  return (
    <>
      <JsonLd
        schema={[serviceSchema(service), faqSchema(service.faqs), breadcrumbSchema(trail)]}
      />

      <PageHeader
        eyebrow={service.group === 'ai' ? 'AI & Automation' : 'Product Engineering'}
        title={service.title}
        answer={service.answer}
        breadcrumb={trail}
      >
        {/* The industry terms, kept on the page for the technical reader and
            for search, without making a founder decode them first. */}
        <p className="max-w-2xl text-[0.8125rem] leading-relaxed text-ink-subtle">
          <span className="font-mono text-[0.6875rem] tracking-[0.12em] text-ink-subtle uppercase">
            Also called
          </span>{' '}
          {service.alsoCalled.join(' · ')}
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <ButtonLink href="/contact">Discuss this work</ButtonLink>
          <ButtonLink href="/work" variant="outline">
            See related work
          </ButtonLink>
        </div>
      </PageHeader>

      {/* The problem, in the buyer's own words. */}
      <Section className="border-b border-line bg-surface/30">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.4fr_0.6fr]">
            <SectionHeading eyebrow="The problem" title="Why teams call us about this" />
            <p className="text-[1.0625rem] leading-relaxed text-ink-muted">{service.problem}</p>
          </div>
        </Container>
      </Section>

      {/* What changes for the business. Plain language, no jargon. */}
      <Section className="border-b border-line py-16">
        <Container>
          <SectionHeading eyebrow="What changes" title="What you get out of it" />
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {service.outcomes.map((outcome, i) => (
              <Reveal key={outcome} delay={i * 0.05}>
                <li className="flex h-full gap-3 rounded-[var(--radius-card)] bg-surface p-5 ring-line">
                  <span
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-brand"
                    aria-hidden="true"
                  />
                  <span className="text-[0.9375rem] leading-relaxed text-ink">{outcome}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* What you get. */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="What we hand over"
            title="What you actually receive"
            lead="Working software and documentation — not a report recommending that somebody else build it."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {service.deliverables.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.04}>
                <Card className="flex h-full flex-col gap-2">
                  <h3 className="text-[1.0625rem] font-semibold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-muted">{item.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process. */}
      <Section className="border-t border-line bg-surface/30">
        <Container>
          <SectionHeading eyebrow="How it runs" title="The engagement" />
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.05}>
                <li className="flex h-full flex-col gap-2.5 rounded-[var(--radius-card)] bg-surface p-6 ring-line">
                  <span className="font-mono text-xs text-brand">{step.step}</span>
                  <h3 className="text-[1.0625rem] font-semibold">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-muted">{step.description}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      {/* The technical layer. Explicitly addressed to a different reader, so
          a non-technical visitor knows this section is not for them. */}
      <Section className="border-t border-line">
        <Container>
          <div className="rounded-[var(--radius-card)] bg-surface p-6 ring-line sm:p-10">
            <div className="flex flex-col gap-2 border-b border-line pb-6">
              <span className="font-mono text-[0.6875rem] tracking-[0.16em] text-warm uppercase">
                For your engineers
              </span>
              <h2 className="text-[1.5rem] font-semibold">Under the hood</h2>
              <p className="max-w-2xl text-[0.9375rem] leading-relaxed text-ink-muted">
                The specifics, for whoever on your side will be reviewing this. If that is not you,
                nothing below changes what you get — skip to the work.
              </p>
            </div>
            <dl className="mt-6 flex flex-col">
              {service.technical.map((item) => (
                <div key={item.title} className="border-b border-line py-4 last:border-0 last:pb-0">
                  <dt className="mb-1.5 font-mono text-[0.8125rem] text-brand-tint">{item.title}</dt>
                  <dd className="text-[0.9375rem] leading-relaxed text-ink-muted">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </Section>

      {/* Tooling. */}
      <Section className="border-t border-line py-16">
        <Container>
          <p className="mb-6 font-mono text-[0.625rem] tracking-[0.16em] text-ink-subtle uppercase">
            What we use
          </p>
          <ul className="flex flex-wrap gap-2">
            {service.tools.map((tool) => (
              <li key={tool}>
                <Badge>{tool}</Badge>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Related work. */}
      {related.length > 0 ? (
        <Section className="border-t border-line">
          <Container>
            <SectionHeading
              eyebrow="Related work"
              title="Where we have done this"
              lead="Live deployments you can open."
            />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((project, i) => (
                <Reveal key={project.slug} delay={i * 0.05}>
                  <Card className="flex h-full flex-col gap-3 p-0">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-t-[var(--radius-card)] bg-surface-2">
                      <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-2 p-5 pt-1">
                      <h3 className="text-[1rem] font-semibold">{project.title}</h3>
                      <p className="text-sm leading-relaxed text-ink-muted">{project.description}</p>
                      {project.href ? (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="mt-auto inline-flex items-center gap-1 pt-3 font-mono text-xs text-brand-tint hover:text-brand"
                        >
                          Open live site
                          <ArrowUpRight className="size-3" aria-hidden="true" />
                        </a>
                      ) : null}
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      <Faq faqs={service.faqs} title={`${service.shortTitle} — questions`} />

      {/* Cross-links to the rest of the practice: real internal linking, which
          both search and answer engines reward. */}
      <Section className="border-t border-line py-14">
        <Container>
          <p className="mb-4 font-mono text-[0.625rem] tracking-[0.16em] text-ink-subtle uppercase">
            Other services
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {services
              .filter((s) => s.slug !== service.slug)
              .map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
          </ul>
        </Container>
      </Section>

      <CtaBand
        title={`Thinking about ${service.shortTitle}?`}
        body="Describe what you have and what is going wrong with it. We will tell you what we would do first, and whether it is worth doing."
      />
    </>
  );
}
