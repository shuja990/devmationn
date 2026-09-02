import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Container, Section, SectionHeading, Eyebrow, ButtonLink, Card, Badge } from '@/components/ui';
import { AgentWorkflow } from '@/components/blocks/AgentWorkflow';
import { AnswerComparison } from '@/components/blocks/AnswerComparison';
import { EvalScorecard } from '@/components/blocks/EvalScorecard';
import { TerminalBlock } from '@/components/blocks/TerminalBlock';
import { AgentFlow } from '@/components/blocks/AgentFlow';
import { Reveal } from '@/components/blocks/Reveal';
import { ServiceIcon } from '@/components/brand/ServiceIcon';
import { JsonLd } from '@/components/JsonLd';
import { faqSchema } from '@/lib/schema';
import { aiServices, engineeringServices, serviceGroupLabels } from '@/content/services';
import { projects } from '@/content/projects';

const homeFaqs = [
  {
    question: 'What does DevMations do?',
    answer:
      'DevMations is an AI engineering agency. We build AI assistants and agents that work with your own data, the testing that proves they behave correctly, automated quality checks for software generally, and secure connections between AI tools and your internal systems. We also build the web and mobile products all of that lives inside.',
  },
  {
    question: 'How do you engage with clients?',
    answer:
      'Most start small: we review what you already have — the AI, the tests, or the codebase — and give you a written answer on what is wrong and what we would do about it. From there you can have us build it, or take the plan to your own team. There is no long contract to get started.',
  },
  {
    question: 'Do you work with teams that already have AI in production?',
    answer:
      'Yes — that is the most common reason people call. Something works in a demo and behaves unpredictably once real customers use it. We start by measuring what it is actually doing, which makes everything after that a lot cheaper to fix.',
  },
  {
    question: 'How do we work together across time zones?',
    answer:
      'We work with clients worldwide, with hours that overlap the European and North American mornings. Written updates are the default rather than standing calls, so progress is visible without needing everyone in a room at the same time.',
  },
];

const evalRows = [
  { label: 'Finds the right information', score: 96, cases: 240 },
  { label: 'Answers stay true to the source', score: 94, cases: 240 },
  { label: 'Uses your systems correctly', score: 99, cases: 180 },
  { label: 'Says “I don’t know” when it should', score: 88, cases: 96 },
  { label: 'Resists being tricked', score: 92, cases: 120 },
];

const terminalLines = [
  { text: 'npx devmations-evals run --suite support-agent', prompt: true, tone: 'default' as const },
  { text: '', tone: 'muted' as const },
  { text: '  ✓ retrieval relevance      230/240', tone: 'pass' as const },
  { text: '  ✓ answer faithfulness      226/240', tone: 'pass' as const },
  { text: '  ✓ tool call validity       178/180', tone: 'pass' as const },
  { text: '  ! refusal handling          84/96', tone: 'warn' as const },
  { text: '  ✓ injection resistance     110/120', tone: 'pass' as const },
  { text: '', tone: 'muted' as const },
  { text: '  94.2% overall · threshold 90% · PASS', tone: 'brand' as const },
  { text: '  regression vs main: none', tone: 'muted' as const },
];

const principles = [
  {
    step: '01',
    title: 'Measure before you build',
    body: 'We start by turning where you are now into a number. Without that, "better" is just an opinion, and nobody can tell whether the money was well spent.',
  },
  {
    step: '02',
    title: 'Nothing ships unchecked',
    body: 'Quality checks run automatically from the first week, and a change that makes things worse cannot go live. A standard nobody enforces is a wish, not a standard.',
  },
  {
    step: '03',
    title: 'You are not stuck with us',
    body: 'Documentation and instructions are part of what we deliver. If you want to bring the work in-house next year, that should be a decision, not a project.',
  },
  {
    step: '04',
    title: 'We tell you what we do not know',
    body: 'You will hear which numbers we measured and which we estimated, and what would change our advice. Sounding certain is easy; it is also how projects go wrong quietly.',
  },
];

const stack = [
  'OpenAI',
  'Anthropic Claude',
  'LangChain',
  'Model Context Protocol',
  'Playwright',
  'Pinecone',
  'pgvector',
  'Next.js',
  'React Native',
  'PostgreSQL',
  'AWS',
  'GitHub Actions',
];

export default function HomePage() {
  const featured = projects.filter((p) =>
    ['lifepilot', 'devmations-ai', 'documents-editor', 'banking-app'].includes(p.slug),
  );

  return (
    <>
      <JsonLd schema={faqSchema(homeFaqs)} />

      {/* ---------------------------------------------------------------- Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="bg-grid absolute inset-0 opacity-[0.35]" aria-hidden="true" />
        <div className="bg-glow absolute inset-0" aria-hidden="true" />
        <Container className="relative">
          <div className="grid items-center gap-14 py-20 sm:py-28 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col items-start gap-6">
              <Eyebrow>AI assistants &middot; testing &middot; automation</Eyebrow>
              <h1 className="text-[2.5rem] leading-[1.05] font-semibold sm:text-[3.5rem]">
                Ship AI you can <span className="text-gradient">actually trust</span>.
              </h1>
              <p className="max-w-xl text-[1.0625rem] leading-relaxed text-ink-muted">
                We build AI that does real work for you — a team of them, splitting a job up and
                checking each other. Then we prove it is working, in plain numbers, every week.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <ButtonLink href="/contact" size="lg">
                  Book a call
                </ButtonLink>
                <ButtonLink href="/work" variant="outline" size="lg">
                  See our work
                </ButtonLink>
              </div>
              <p className="pt-2 font-mono text-xs text-ink-subtle">
                Working with teams worldwide
              </p>
            </div>

            <Reveal delay={0.1}>
              <AgentWorkflow />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------ Services */}
      <Section id="services">
        <Container>
          <SectionHeading
            eyebrow="What we do"
            title="Two things, in this order"
            lead="The AI work is what we are known for. The engineering team builds the actual product it lives inside — because an AI feature on its own is not something your customers can use."
          />

          <div className="mt-12 flex flex-col gap-3">
            <p className="font-mono text-[0.625rem] tracking-[0.16em] text-brand uppercase">
              {serviceGroupLabels.ai}
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {aiServices.map((service, i) => (
                <Reveal key={service.slug} delay={i * 0.05}>
                  <Link href={`/services/${service.slug}`} className="group block h-full">
                    <Card className="flex h-full flex-col gap-3 transition-colors group-hover:bg-surface-2">
                      <span className="flex size-9 items-center justify-center rounded-lg bg-brand/12 text-brand-tint">
                        <ServiceIcon name={service.icon} className="size-4.5" />
                      </span>
                      <h3 className="text-[1.0625rem] font-semibold">{service.shortTitle}</h3>
                      <p className="text-sm leading-relaxed text-ink-muted">{service.blurb}</p>
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

          <div className="mt-10 flex flex-col gap-3">
            <p className="font-mono text-[0.625rem] tracking-[0.16em] text-warm uppercase">
              {serviceGroupLabels.engineering}
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {engineeringServices.map((service, i) => (
                <Reveal key={service.slug} delay={i * 0.05}>
                  <Link href={`/services/${service.slug}`} className="group block h-full">
                    <Card className="flex h-full flex-col gap-3 transition-colors group-hover:bg-surface-2">
                      <span className="flex size-9 items-center justify-center rounded-lg bg-brand/12 text-brand-tint">
                        <ServiceIcon name={service.icon} className="size-4.5" />
                      </span>
                      <h3 className="text-[1.0625rem] font-semibold">{service.shortTitle}</h3>
                      <p className="text-sm leading-relaxed text-ink-muted">{service.blurb}</p>
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
        </Container>
      </Section>

      {/* --------------------------------------------------------- Eval band */}
      <Section className="border-y border-line bg-surface/30">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-5">
              <SectionHeading
                eyebrow="How we know it works"
                title="A score, not a shrug"
                lead="Ask most teams whether their AI is working and you get a shrug and an anecdote. We set up a standing test — hundreds of real questions, run automatically every time anything changes. If quality slips, the release stops before your customers see it."
              />
              <div className="flex flex-col items-start gap-3">
                <ButtonLink href="/services/ai-evals" variant="outline">
                  How this works
                </ButtonLink>
                <details className="w-full">
                  <summary className="cursor-pointer font-mono text-[0.6875rem] text-ink-subtle transition-colors hover:text-ink-muted">
                    For engineers: show the scores and CI output
                  </summary>
                  <div className="mt-4 flex flex-col gap-4">
                    <EvalScorecard rows={evalRows} title="Support assistant — weekly report" />
                    <TerminalBlock label="ci · evals" lines={terminalLines} />
                  </div>
                </details>
              </div>
            </div>
            <Reveal>
              <AnswerComparison />
            </Reveal>
          </div>

          <Reveal>
            <div className="mt-16 rounded-[var(--radius-card)] bg-surface p-6 ring-line sm:p-10">
              <div className="mb-8 flex flex-col gap-2">
                <p className="font-mono text-[0.625rem] tracking-[0.16em] text-brand uppercase">
                  What actually happens
                </p>
                <h3 className="text-[1.375rem] font-semibold">
                  What one request looks like, start to finish
                </h3>
              </div>
              <AgentFlow />
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ------------------------------------------------------------ Process */}
      <Section>
        <Container>
          <SectionHeading eyebrow="How we work" title="Four commitments" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.06}>
                <Card className="flex h-full flex-col gap-2.5">
                  <span className="font-mono text-xs text-brand">{p.step}</span>
                  <h3 className="text-[1.0625rem] font-semibold">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-muted">{p.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* --------------------------------------------------------------- Work */}
      <Section className="border-t border-line">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Selected work"
              title="Things we actually shipped"
              lead="Every project below is a live deployment you can open."
            />
            <ButtonLink href="/work" variant="outline">
              See all our work
            </ButtonLink>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {featured.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.05}>
                <Link href={`/work#${project.slug}`} className="group block h-full">
                  <Card className="flex h-full flex-col gap-3 transition-colors group-hover:bg-surface-2">
                    <div className="flex items-center gap-2">
                      <Badge tone="brand">{project.industry}</Badge>
                    </div>
                    <h3 className="text-[1.125rem] font-semibold">{project.title}</h3>
                    <p className="text-sm leading-relaxed text-ink-muted">{project.description}</p>
                    <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
                      {project.stack.slice(0, 4).map((tech) => (
                        <span key={tech} className="font-mono text-[0.6875rem] text-ink-subtle">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Card>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* -------------------------------------------------------------- Stack */}
      <Section className="border-t border-line py-16">
        <Container>
          <p className="mb-6 text-center font-mono text-[0.625rem] tracking-[0.16em] text-ink-subtle uppercase">
            For the technical reader — what we build with
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {stack.map((tech) => (
              <li key={tech} className="font-mono text-sm text-ink-muted">
                {tech}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* ---------------------------------------------------------------- FAQ */}
      <Section className="border-t border-line">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading eyebrow="Questions" title="Before you get in touch" />
            <dl className="flex flex-col">
              {homeFaqs.map((faq) => (
                <div key={faq.question} className="border-b border-line py-5 first:pt-0">
                  <dt className="mb-2 text-[1.0625rem] font-semibold">{faq.question}</dt>
                  <dd className="text-[0.9375rem] leading-relaxed text-ink-muted">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </Section>

      {/* ---------------------------------------------------------------- CTA */}
      <Section className="border-t border-line">
        <Container>
          <div className="bg-glow relative overflow-hidden rounded-[var(--radius-card)] bg-surface px-6 py-14 text-center ring-line sm:px-12">
            <h2 className="mx-auto max-w-2xl text-[1.75rem] font-semibold sm:text-[2.25rem]">
              Have an AI system you cannot vouch for?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[0.975rem] leading-relaxed text-ink-muted">
              Tell us what it does and where it goes wrong. We will tell you whether the problem is
              retrieval, prompting, tooling or something else — before you spend anything.
            </p>
            <ButtonLink href="/contact" size="lg" className="mt-8">
              Book a call
            </ButtonLink>
          </div>
        </Container>
      </Section>
    </>
  );
}
