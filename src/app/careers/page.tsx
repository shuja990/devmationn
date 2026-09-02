import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { PageHeader } from '@/components/blocks/PageHeader';
import { CtaBand } from '@/components/blocks/CtaBand';
import { Container, Section, SectionHeading, Card, Badge } from '@/components/ui';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { openRoles } from '@/content/roles';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Careers — join DevMations',
  description:
    'Open roles at DevMations: AI engineering, QA automation and product engineering. Remote-friendly, based in Islamabad, Pakistan.',
  alternates: { canonical: '/careers' },
};

const whatItIsLike = [
  {
    title: 'You own the outcome',
    body: 'Engineers here talk to clients, scope their own work and ship it. There is no layer translating requirements at you.',
  },
  {
    title: 'Written over verbal',
    body: 'Decisions get written down. It makes the work reviewable, makes async possible, and means you can find out why something is the way it is.',
  },
  {
    title: 'Measured work',
    body: 'You will be asked what the number was before and after. That applies to client work and to how we assess our own.',
  },
  {
    title: 'Small and senior',
    body: 'Fewer people, more scope each. If you want to work on one narrow slice of a large system, this is not the right place.',
  },
];

export default function CareersPage() {
  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Careers', href: '/careers' },
        ])}
      />

      <PageHeader
        eyebrow="Careers"
        title="Work on AI systems that have to actually hold up"
        answer="DevMations hires engineers for AI systems work, QA automation and product engineering. The team is small and senior, based in Islamabad, Pakistan, and works with clients worldwide."
        breadcrumb={[
          { name: 'Home', href: '/' },
          { name: 'Careers', href: '/careers' },
        ]}
      />

      <Section>
        <Container>
          <SectionHeading eyebrow="Open roles" title={`${openRoles.length} positions open`} />

          {openRoles.length === 0 ? (
            <Card className="mt-10">
              <p className="text-ink-muted">
                No open roles right now. If you do this work well, write to us anyway at{' '}
                <a href={`mailto:${site.email}`} className="text-brand-tint hover:text-brand">
                  {site.email}
                </a>{' '}
                — we keep good applications on file.
              </p>
            </Card>
          ) : (
            <ul className="mt-10 flex flex-col gap-4">
              {openRoles.map((role) => (
                <li key={role.slug}>
                  <Link href={`/careers/${role.slug}`} className="group block">
                    <Card className="flex flex-col gap-3 transition-colors group-hover:bg-surface-2 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge tone="brand">{role.team}</Badge>
                          <span className="font-mono text-[0.6875rem] text-ink-subtle">
                            {role.employmentType.replace('_', '-').toLowerCase()} &middot;{' '}
                            {role.location}
                          </span>
                        </div>
                        <h2 className="text-[1.125rem] font-semibold">{role.title}</h2>
                        <p className="max-w-2xl text-sm leading-relaxed text-ink-muted">
                          {role.summary}
                        </p>
                      </div>
                      <ArrowRight
                        className="size-4 shrink-0 text-brand-tint transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </Card>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Container>
      </Section>

      <Section className="border-t border-line bg-surface/30">
        <Container>
          <SectionHeading eyebrow="What it is like" title="Before you apply" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {whatItIsLike.map((item) => (
              <Card key={item.title} className="flex flex-col gap-2.5">
                <h3 className="text-[1.0625rem] font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">{item.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Not seeing your role?"
        body={`If you are strong at this work and we have nothing listed that fits, write to ${site.email} with something you built and why it was hard.`}
        action="Get in touch"
      />
    </>
  );
}
