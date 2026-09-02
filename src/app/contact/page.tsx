import type { Metadata } from 'next';

import { PageHeader } from '@/components/blocks/PageHeader';
import { ContactForm } from '@/components/blocks/ContactForm';
import { Container, Section } from '@/components/ui';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { site } from '@/content/site';
import { LinkedinIcon } from '@/components/brand/SocialIcons';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with DevMations about AI agents, evaluation, QA automation, or a web or mobile build. We reply within one working day.',
  alternates: { canonical: '/contact' },
};

const expectations = [
  {
    title: 'A reply within one working day',
    body: 'From someone who has read what you wrote, not an automated acknowledgement.',
  },
  {
    title: 'A straight answer on fit',
    body: 'If this is not something we should be doing, we will say so and point you somewhere better. That is cheaper for both of us than three exploratory calls.',
  },
  {
    title: 'No sales sequence',
    body: 'You will not be added to a mailing list or chased for a quarter. One reply, and then it is your move.',
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Contact', href: '/contact' },
        ])}
      />

      <PageHeader
        eyebrow="Contact"
        title="Tell us what you are trying to do"
        answer="Get in touch with DevMations about an AI system, a testing problem, or a web or mobile build. Describe what you have and what is going wrong with it, and you will get a straight answer within one working day."
        breadcrumb={[
          { name: 'Home', href: '/' },
          { name: 'Contact', href: '/contact' },
        ]}
      />

      <Section>
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <ContactForm />

            <aside className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <h2 className="font-mono text-[0.625rem] tracking-[0.16em] text-ink-subtle uppercase">
                  What happens next
                </h2>
                <dl className="flex flex-col gap-5">
                  {expectations.map((item) => (
                    <div key={item.title}>
                      <dt className="mb-1 text-[0.9375rem] font-semibold text-ink">{item.title}</dt>
                      <dd className="text-[0.875rem] leading-relaxed text-ink-muted">{item.body}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="flex flex-col gap-4 border-t border-line pt-8">
                <h2 className="font-mono text-[0.625rem] tracking-[0.16em] text-ink-subtle uppercase">
                  Or reach us directly
                </h2>
                <a
                  href={`mailto:${site.email}`}
                  className="text-[0.9375rem] text-brand-tint transition-colors hover:text-brand"
                >
                  {site.email}
                </a>
                <p className="text-[0.875rem] text-ink-muted">{site.location}</p>
                <div className="flex items-center gap-2 pt-1">
                  <a
                    href={site.socials.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="LinkedIn"
                    className="inline-flex size-9 items-center justify-center rounded-lg bg-surface-2 text-ink-muted transition-colors hover:bg-surface-3 hover:text-ink"
                  >
                    <LinkedinIcon className="size-4" />
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
