import type { Metadata } from 'next';

import { PageHeader } from '@/components/blocks/PageHeader';
import { CtaBand } from '@/components/blocks/CtaBand';
import { Reveal } from '@/components/blocks/Reveal';
import { Container, Section, SectionHeading, Card } from '@/components/ui';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema, faqSchema } from '@/lib/schema';
import { services } from '@/content/services';

export const metadata: Metadata = {
  title: 'About — an AI engineering agency',
  description:
    'DevMations is an AI engineering agency in Islamabad working worldwide. We build AI agents and evaluation systems, and the web and mobile products they live inside.',
  alternates: { canonical: '/about' },
};

const principles = [
  {
    title: 'Measured, not asserted',
    body: 'We would rather tell you a number we can defend than a story that sounds good. If we have not measured something, we say so and tell you what it would take to find out.',
  },
  {
    title: 'The boring solution first',
    body: 'A clever architecture that only its author can debug is a liability you inherit. We reach for the obvious approach unless there is a specific reason it will not hold.',
  },
  {
    title: 'No lock-in by design',
    body: 'Everything ships with tests, documentation and a runbook. If you want to take it in-house six months from now, that should be a decision rather than a project.',
  },
  {
    title: 'Disagreement is cheaper early',
    body: 'If we think the thing you asked for is the wrong thing, you will hear it once, clearly, with reasoning — and then we will build what you decide.',
  },
];

const faqs = [
  {
    question: 'How big is the team?',
    answer:
      'DevMations is a small senior team rather than a large staffing operation. Engagements are staffed with people who write the code, not a layer of coordinators above people who do.',
  },
  {
    question: 'What time zones do you cover?',
    answer:
      'The team is based in Islamabad, Pakistan (UTC+5), with working hours that overlap the European morning through afternoon and the North American morning. Asynchronous written updates are the default rather than standing calls.',
  },
  {
    question: 'What size engagements do you take?',
    answer:
      'From a two-week scoped diagnostic through to multi-month product builds. We would rather start with something small and bounded so both sides can see how the other works before committing further.',
  },
  {
    question: 'Do you sign NDAs and work under client contracts?',
    answer:
      'Yes to both. We also work inside client repositories, issue trackers and CI under their own accounts where preferred.',
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        schema={[
          faqSchema(faqs),
          breadcrumbSchema([
            { name: 'Home', href: '/' },
            { name: 'About', href: '/about' },
          ]),
        ]}
      />

      <PageHeader
        eyebrow="About"
        title="An AI engineering agency that measures its own work"
        answer="DevMations is a software engineering agency specialising in AI systems — agents, retrieval, evaluation and QA automation — alongside the web and mobile products those systems live inside. The team is based in Islamabad, Pakistan and works with clients worldwide."
        breadcrumb={[
          { name: 'Home', href: '/' },
          { name: 'About', href: '/about' },
        ]}
      />

      <Section className="border-b border-line bg-surface/30">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.4fr_0.6fr]">
            <SectionHeading eyebrow="Why we narrowed" title="The gap we kept running into" />
            <div className="flex flex-col gap-5 text-[1.0625rem] leading-relaxed text-ink-muted">
              <p>
                We spent years building web and mobile products. When clients started adding AI
                features, the same thing happened repeatedly: a prototype would impress everyone in
                a meeting, reach real users, and behave in ways nobody could explain or reproduce.
              </p>
              <p>
                The missing piece was never a better model. It was the ordinary engineering
                discipline around it — knowing what &ldquo;working&rdquo; means, measuring it,
                catching it when it slips. That discipline is standard for normal software and
                almost absent for AI, which is why so much of it stalls between demo and launch.
              </p>
              <p>
                So we built the practice around that gap: evaluation, agent engineering, QA. We kept
                the product team because someone still has to build the thing the AI lives inside,
                and the seams show when those are different companies.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading eyebrow="How we work" title="Four things you can hold us to" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {principles.map((principle, i) => (
              <Reveal key={principle.title} delay={i * 0.05}>
                <Card className="flex h-full flex-col gap-2.5">
                  <h3 className="text-[1.0625rem] font-semibold">{principle.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-muted">{principle.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-line bg-surface/30">
        <Container>
          <SectionHeading
            eyebrow="Capability"
            title="What we can take on"
            lead="Eight services across two groups. Most engagements draw on more than one."
          />
          <ul className="mt-10 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {services.map((service) => (
              <li key={service.slug} className="flex items-baseline gap-3 border-b border-line py-3">
                <span className="font-mono text-[0.625rem] text-brand">
                  {service.group === 'ai' ? 'AI' : 'ENG'}
                </span>
                <span className="text-[0.9375rem] text-ink">{service.title}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section className="border-t border-line">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading eyebrow="Questions" title="Practicalities" />
            <dl className="flex flex-col">
              {faqs.map((faq) => (
                <div key={faq.question} className="border-b border-line py-5 first:pt-0">
                  <dt className="mb-2 text-[1.0625rem] font-semibold">{faq.question}</dt>
                  <dd className="text-[0.9375rem] leading-relaxed text-ink-muted">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
