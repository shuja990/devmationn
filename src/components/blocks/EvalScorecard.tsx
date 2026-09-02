import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui';

/**
 * The house component. Renders an eval suite result the way one actually
 * looks: named cases, a pass rate, and a bar per category.
 *
 * This is the one place green and red are allowed, and they mean exactly
 * one thing here -- passing and failing. That reservation is why the brand
 * accent elsewhere is violet.
 */

export type EvalRow = {
  label: string;
  /** 0-100. */
  score: number;
  /** Cases run for this category. */
  cases: number;
};

function toneFor(score: number) {
  if (score >= 90) return 'pass' as const;
  if (score >= 75) return 'warn' as const;
  return 'fail' as const;
}

const barColor = {
  pass: 'bg-pass',
  warn: 'bg-warn',
  fail: 'bg-fail',
} as const;

export function EvalScorecard({
  title = 'retrieval-quality.eval.ts',
  rows,
  threshold = 90,
  className,
}: {
  title?: string;
  rows: EvalRow[];
  threshold?: number;
  className?: string;
}) {
  const totalCases = rows.reduce((sum, r) => sum + r.cases, 0);
  const weighted = rows.reduce((sum, r) => sum + r.score * r.cases, 0) / Math.max(totalCases, 1);
  const overall = Math.round(weighted * 10) / 10;
  const passing = overall >= threshold;

  return (
    <div
      className={cn('overflow-hidden rounded-[var(--radius-card)] bg-surface ring-line', className)}
    >
      <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-3.5">
        <span className="truncate font-mono text-xs text-ink-muted">{title}</span>
        <Badge tone={passing ? 'pass' : 'fail'}>{passing ? 'PASS' : 'FAIL'}</Badge>
      </div>

      <div className="flex items-baseline gap-3 px-5 pt-5">
        <span
          className={cn(
            'font-display text-[2.75rem] leading-none font-semibold tracking-tight tabular-nums',
            passing ? 'text-pass' : 'text-fail',
          )}
        >
          {overall.toFixed(1)}%
        </span>
        <span className="font-mono text-xs text-ink-subtle">
          {totalCases} cases &middot; threshold {threshold}%
        </span>
      </div>

      <ul className="flex flex-col gap-3.5 px-5 py-5">
        {rows.map((row) => {
          const tone = toneFor(row.score);
          return (
            <li key={row.label} className="flex flex-col gap-1.5">
              <div className="flex items-baseline justify-between gap-3">
                <span className="truncate text-[0.8125rem] text-ink-muted">{row.label}</span>
                <span className="font-mono text-xs tabular-nums text-ink">{row.score}%</span>
              </div>
              <div
                className="h-1.5 w-full overflow-hidden rounded-full bg-surface-3"
                role="img"
                aria-label={`${row.label}: ${row.score} percent passing across ${row.cases} cases`}
              >
                <div
                  className={cn('h-full rounded-full', barColor[tone])}
                  style={{ width: `${row.score}%` }}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
