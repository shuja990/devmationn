import { Container, Section, SectionHeading } from '@/components/ui';

/**
 * FAQ list.
 *
 * Rendered as a definition list with the answer always in the DOM rather than
 * behind a disclosure. Two reasons: an answer engine cannot reliably extract
 * text hidden behind JavaScript, and the FAQPage schema on the page must
 * match what a crawler can actually see.
 */
export function Faq({
  faqs,
  title = 'Common questions',
  eyebrow = 'Questions',
}: {
  faqs: { question: string; answer: string }[];
  title?: string;
  eyebrow?: string;
}) {
  if (faqs.length === 0) return null;

  return (
    <Section className="border-t border-line">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow={eyebrow} title={title} />
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
  );
}
