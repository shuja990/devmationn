'use client';

import { useEffect } from 'react';
import { Container, Section, Button, ButtonLink } from '@/components/ui';
import { site } from '@/content/site';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surfaced to the browser console and any error reporter wired up later.
    console.error('[app] Unhandled error', error);
  }, [error]);

  return (
    <Section className="py-32">
      <Container>
        <div className="flex flex-col items-start gap-6">
          <p className="font-mono text-[0.6875rem] tracking-[0.16em] text-fail uppercase">
            Something broke
          </p>
          <h1 className="max-w-2xl text-[2rem] font-semibold sm:text-[2.5rem]">
            That did not work.
          </h1>
          <p className="max-w-xl text-[1.0625rem] leading-relaxed text-ink-muted">
            An error on our side, not yours. Trying again often clears it. If it does not, tell us
            at{' '}
            <a href={`mailto:${site.email}`} className="text-brand-tint hover:text-brand">
              {site.email}
            </a>{' '}
            and we will fix it.
          </p>
          {error.digest ? (
            <p className="font-mono text-xs text-ink-subtle">Reference: {error.digest}</p>
          ) : null}
          <div className="flex flex-wrap gap-3 pt-2">
            <Button onClick={reset}>Try again</Button>
            <ButtonLink href="/" variant="outline">
              Go home
            </ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
