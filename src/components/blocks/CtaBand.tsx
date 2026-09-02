import { Container, Section, ButtonLink } from '@/components/ui';

export function CtaBand({
  title = 'Tell us what you are building',
  body = 'Send us the problem in a paragraph. You will get a straight answer on whether we can help, and what we would do first.',
  action = 'Book a call',
  href = '/contact',
}: {
  title?: string;
  body?: string;
  action?: string;
  href?: string;
}) {
  return (
    <Section className="border-t border-line">
      <Container>
        <div className="bg-glow relative overflow-hidden rounded-[var(--radius-card)] bg-surface px-6 py-14 text-center ring-line sm:px-12">
          <h2 className="mx-auto max-w-2xl text-[1.75rem] font-semibold sm:text-[2.25rem]">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[0.975rem] leading-relaxed text-ink-muted">
            {body}
          </p>
          <ButtonLink href={href} size="lg" className="mt-8">
            {action}
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
