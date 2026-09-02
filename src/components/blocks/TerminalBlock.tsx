import { cn } from '@/lib/utils';

/**
 * A static terminal transcript. Used to show what an eval run or an MCP
 * handshake actually looks like, rather than describing it in prose.
 *
 * Not a live terminal and not animated -- it is a figure. Lines carry a tone
 * so pass/fail colouring stays consistent with EvalScorecard.
 */

export type TerminalLine = {
  text: string;
  tone?: 'default' | 'muted' | 'brand' | 'pass' | 'fail' | 'warn';
  /** Renders a `$` prompt before the line. */
  prompt?: boolean;
};

const toneClass = {
  default: 'text-ink',
  muted: 'text-ink-subtle',
  brand: 'text-brand-tint',
  pass: 'text-pass',
  fail: 'text-fail',
  warn: 'text-warn',
} as const;

export function TerminalBlock({
  label,
  lines,
  className,
}: {
  label?: string;
  lines: TerminalLine[];
  className?: string;
}) {
  return (
    <div
      className={cn('overflow-hidden rounded-[var(--radius-card)] bg-surface ring-line', className)}
    >
      {label ? (
        <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="size-2 rounded-full bg-surface-3" />
            <span className="size-2 rounded-full bg-surface-3" />
            <span className="size-2 rounded-full bg-surface-3" />
          </span>
          <span className="ml-1 font-mono text-[0.6875rem] tracking-wide text-ink-subtle">
            {label}
          </span>
        </div>
      ) : null}

      <pre className="overflow-x-auto px-4 py-4 font-mono text-[0.75rem] leading-[1.75]">
        <code>
          {lines.map((line, i) => (
            <span key={i} className={cn('block', toneClass[line.tone ?? 'default'])}>
              {line.prompt ? <span className="text-brand select-none">$ </span> : null}
              {line.text}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}
