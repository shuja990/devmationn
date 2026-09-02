import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';
import { cn } from '@/lib/utils';

/* -------------------------------------------------------------------------- */
/* Layout                                                                      */
/* -------------------------------------------------------------------------- */

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn('mx-auto w-full max-w-6xl px-5 sm:px-8', className)}>{children}</div>;
}

export function Section({
  className,
  children,
  id,
}: {
  className?: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className={cn('py-20 sm:py-28', className)}>
      {children}
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Typography                                                                  */
/* -------------------------------------------------------------------------- */

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'font-mono text-[0.6875rem] tracking-[0.16em] text-brand uppercase',
        className,
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  className,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: 'left' | 'center';
  className?: string;
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-3',
        align === 'center' && 'mx-auto max-w-2xl items-center text-center',
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="text-[1.75rem] font-semibold sm:text-[2.25rem]">{title}</h2>
      {lead ? (
        <p className={cn('max-w-2xl text-[0.975rem] leading-relaxed text-ink-muted')}>{lead}</p>
      ) : null}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Controls                                                                    */
/* -------------------------------------------------------------------------- */

const buttonBase =
  'inline-flex items-center justify-center gap-2 rounded-lg font-display text-sm font-medium transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50';

const buttonVariants = {
  primary: 'bg-brand text-white hover:bg-brand-deep',
  secondary: 'bg-surface-2 text-ink ring-line hover:bg-surface-3',
  ghost: 'text-ink-muted hover:text-ink',
  outline: 'text-ink ring-line hover:bg-surface-2',
} as const;

const buttonSizes = {
  sm: 'h-9 px-3.5',
  md: 'h-11 px-5',
  lg: 'h-12 px-6 text-[0.9375rem]',
} as const;

type ButtonStyleProps = {
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
};

export function buttonClass({ variant = 'primary', size = 'md' }: ButtonStyleProps = {}) {
  return cn(buttonBase, buttonVariants[variant], buttonSizes[size]);
}

export function Button({
  variant,
  size,
  className,
  ...props
}: ButtonStyleProps & ComponentProps<'button'>) {
  return <button className={cn(buttonClass({ variant, size }), className)} {...props} />;
}

export function ButtonLink({
  variant,
  size,
  className,
  ...props
}: ButtonStyleProps & ComponentProps<typeof Link>) {
  return <Link className={cn(buttonClass({ variant, size }), className)} {...props} />;
}

/* -------------------------------------------------------------------------- */
/* Surfaces                                                                    */
/* -------------------------------------------------------------------------- */

export function Card({
  className,
  children,
  as: As = 'div',
}: {
  className?: string;
  children: ReactNode;
  as?: 'div' | 'article' | 'li';
}) {
  return (
    <As className={cn('rounded-[var(--radius-card)] bg-surface ring-line p-6', className)}>
      {children}
    </As>
  );
}

export function Badge({
  children,
  className,
  tone = 'neutral',
}: {
  children: ReactNode;
  className?: string;
  /** `pass`/`fail` are semantic and reserved for real eval outcomes. */
  tone?: 'neutral' | 'brand' | 'pass' | 'fail' | 'warn';
}) {
  const tones = {
    neutral: 'bg-surface-2 text-ink-muted',
    brand: 'bg-brand/12 text-brand-tint',
    pass: 'bg-pass/12 text-pass',
    fail: 'bg-fail/12 text-fail',
    warn: 'bg-warn/12 text-warn',
  } as const;

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-[var(--radius-pill)] px-2.5 py-0.5 font-mono text-[0.6875rem] tracking-wide',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/* Prose — used for MDX bodies                                                 */
/* -------------------------------------------------------------------------- */

export function Prose({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'max-w-none',
        '[&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-[1.5rem] [&_h2]:font-semibold',
        '[&_h3]:mt-9 [&_h3]:mb-3 [&_h3]:text-[1.175rem] [&_h3]:font-semibold',
        '[&_p]:mb-5 [&_p]:leading-[1.75] [&_p]:text-ink-muted',
        '[&_ul]:mb-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:text-ink-muted',
        '[&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5 [&_ol]:text-ink-muted',
        '[&_li]:leading-[1.7]',
        '[&_a]:text-brand-tint [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-brand',
        '[&_strong]:font-semibold [&_strong]:text-ink',
        '[&_blockquote]:my-6 [&_blockquote]:border-l-2 [&_blockquote]:border-brand [&_blockquote]:pl-5 [&_blockquote]:text-ink-muted [&_blockquote]:italic',
        '[&_code]:rounded [&_code]:bg-surface-2 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.85em] [&_code]:text-ink',
        '[&_pre]:my-6 [&_pre]:overflow-x-auto [&_pre]:rounded-[var(--radius-card)] [&_pre]:bg-surface [&_pre]:p-5 [&_pre]:text-[0.85rem] [&_pre]:ring-line',
        '[&_pre_code]:bg-transparent [&_pre_code]:p-0',
        '[&_hr]:my-10 [&_hr]:border-line',
        '[&_table]:my-6 [&_table]:w-full [&_table]:text-left [&_table]:text-sm',
        '[&_th]:border-b [&_th]:border-line [&_th]:pb-2 [&_th]:font-semibold',
        '[&_td]:border-b [&_td]:border-line [&_td]:py-2.5 [&_td]:text-ink-muted',
        '[&_img]:my-6 [&_img]:rounded-[var(--radius-card)]',
        className,
      )}
    >
      {children}
    </div>
  );
}
