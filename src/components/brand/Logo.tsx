import { cn } from '@/lib/utils';

/**
 * The DevMations mark: "Ascent".
 *
 * One unbroken stroke, drawn as an asymmetric M whose second peak overshoots
 * the first and whose end point sits higher than its start. It reads as the M
 * of DevMations, as an eval score climbing, and as a signal trace.
 *
 * Deliberately NOT a checkmark and deliberately not built from connected
 * dots. Checkmark marks are heavily contested in software testing (Checkmarx,
 * Checkly, Check Point) and node-and-dot marks are stock-vector generic; a
 * single continuous stroke avoids both, holds its shape down to 16px, and
 * needs only one colour.
 *
 * Everything is `currentColor`, so one component serves the header, footer,
 * light theme, dark theme and the knocked-out-on-brand treatment.
 */

const ASCENT_PATH = 'M3.5 26 L9 11.5 L16 20 L23 5 L28.5 21';

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={cn('h-8 w-8 shrink-0 text-brand', className)}
    >
      <path
        d={ASCENT_PATH}
        stroke="currentColor"
        strokeWidth="2.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * The small cut. A single stroke scales cleanly, so this only thickens the
 * line to keep the same optical weight at tab and avatar sizes.
 */
export function MarkCompact({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={cn('h-5 w-5 shrink-0 text-brand', className)}
    >
      <path
        d={ASCENT_PATH}
        stroke="currentColor"
        strokeWidth="3.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type LogoProps = {
  /** `full` pairs the mark with the wordmark; `mark` is the mark alone. */
  variant?: 'full' | 'mark';
  className?: string;
  /** Use the heavier small-size cut. */
  compact?: boolean;
};

export function Logo({ variant = 'full', className, compact = false }: LogoProps) {
  if (variant === 'mark') {
    return compact ? <MarkCompact className={className} /> : <Mark className={className} />;
  }

  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <Mark />
      <span className="font-display text-[1.35rem] leading-none font-semibold tracking-[-0.04em] text-ink">
        devmations
      </span>
    </span>
  );
}
