import Link from 'next/link';
import { Container, Eyebrow } from '@/components/ui';

/**
 * Standard page header.
 *
 * `answer` is rendered as the first paragraph under the h1 and is styled
 * larger than body copy on purpose: it is the self-contained definition that
 * answer engines lift, and the first thing a human reads. Everything else on
 * the page is subordinate to it.
 */
export function PageHeader({
  eyebrow,
  title,
  answer,
  breadcrumb,
  children,
}: {
  eyebrow?: string;
  title: string;
  answer?: string;
  breadcrumb?: { name: string; href: string }[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="bg-grid absolute inset-0 opacity-25" aria-hidden="true" />
      <Container className="relative">
        <div className="flex flex-col gap-5 py-16 sm:py-20">
          {breadcrumb ? (
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1.5 font-mono text-[0.6875rem] text-ink-subtle">
                {breadcrumb.map((crumb, i) => (
                  <li key={crumb.href} className="flex items-center gap-1.5">
                    {i > 0 ? <span aria-hidden="true">/</span> : null}
                    <Link href={crumb.href} className="transition-colors hover:text-ink-muted">
                      {crumb.name}
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          ) : null}

          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}

          <h1 className="max-w-3xl text-[2.125rem] leading-[1.1] font-semibold sm:text-[2.875rem]">
            {title}
          </h1>

          {answer ? (
            <p className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-muted">{answer}</p>
          ) : null}

          {children}
        </div>
      </Container>
    </section>
  );
}
