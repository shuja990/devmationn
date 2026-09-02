import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { PageHeader } from '@/components/blocks/PageHeader';
import { CtaBand } from '@/components/blocks/CtaBand';
import { Reveal } from '@/components/blocks/Reveal';
import { ServiceIcon } from '@/components/brand/ServiceIcon';
import { Container, Section, Card } from '@/components/ui';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { aiServices, engineeringServices, serviceGroupLabels } from '@/content/services';

export const metadata: Metadata = {
  title: 'Services — AI agents, evals, QA and product engineering',
  description:
    'DevMations services: AI assistants and agents (RAG), AI testing and evals, AI-driven QA, MCP integrations, AI content quality, automated software testing, and web and mobile app development.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
        ])}
      />

      <PageHeader
        eyebrow="Services"
        title="What we build, and what it is for"
        answer="DevMations offers eight services across two groups. The AI group builds assistants that work with your own data, proves they are giving correct answers, uses AI to find bugs in your software, and connects AI tools safely to your internal systems. The engineering group builds the web and mobile products all of that lives inside."
        breadcrumb={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
        ]}
      />

      <Section>
        <Container>
          <ServiceGroup
            label={serviceGroupLabels.ai}
            note="This is the practice. If you have AI in production and cannot say confidently whether it is working, start here."
            services={aiServices}
            accent="text-brand"
          />

          <div className="mt-20">
            <ServiceGroup
              label={serviceGroupLabels.engineering}
              note="The team that ships the product around the AI. Also available on its own, if what you need is simply a well-built application."
              services={engineeringServices}
              accent="text-warm"
            />
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}

function ServiceGroup({
  label,
  note,
  services,
  accent,
}: {
  label: string;
  note: string;
  services: typeof aiServices;
  accent: string;
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <p className={`font-mono text-[0.625rem] tracking-[0.16em] uppercase ${accent}`}>{label}</p>
        <p className="max-w-2xl text-[0.9375rem] leading-relaxed text-ink-muted">{note}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {services.map((service, i) => (
          <Reveal key={service.slug} delay={i * 0.04}>
            <Link href={`/services/${service.slug}`} className="group block h-full">
              <Card className="flex h-full flex-col gap-3 transition-colors group-hover:bg-surface-2">
                <span className="flex size-10 items-center justify-center rounded-lg bg-brand/12 text-brand-tint">
                  <ServiceIcon name={service.icon} className="size-5" />
                </span>
                <h2 className="text-[1.125rem] font-semibold">{service.title}</h2>
                <p className="font-mono text-[0.6875rem] text-ink-subtle">
                  {service.technicalTitle}
                </p>
                <p className="text-sm leading-relaxed text-ink-muted">{service.blurb}</p>
                <div className="flex flex-wrap gap-x-3 gap-y-1 pt-1">
                  {service.deliverables.slice(0, 3).map((d) => (
                    <span key={d.title} className="font-mono text-[0.6875rem] text-ink-subtle">
                      {d.title}
                    </span>
                  ))}
                </div>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-3 font-mono text-xs text-brand-tint">
                  Read more
                  <ArrowRight
                    className="size-3 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Card>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
