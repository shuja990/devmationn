import { Container, Section, ButtonLink } from '@/components/ui';
import { Logo } from '@/components/brand/Logo';

export default function NotFound() {
  return (
    <Section className="py-32">
      <Container>
        <div className="flex flex-col items-start gap-6">
          <Logo variant="mark" className="h-10 w-10" />
          <p className="font-mono text-[0.6875rem] tracking-[0.16em] text-brand uppercase">
            404 — not found
          </p>
          <h1 className="max-w-2xl text-[2rem] font-semibold sm:text-[2.5rem]">
            That page is not here.
          </h1>
          <p className="max-w-xl text-[1.0625rem] leading-relaxed text-ink-muted">
            The site was rebuilt recently and a few old links changed. Most of them redirect
            automatically — this one did not. Try the services or the work from here.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <ButtonLink href="/">Home</ButtonLink>
            <ButtonLink href="/services" variant="outline">
              Services
            </ButtonLink>
            <ButtonLink href="/work" variant="outline">
              Work
            </ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
