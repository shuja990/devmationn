import { MessageSquare, Search, Brain, Zap, ShieldCheck, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * How an AI system we build actually handles a request.
 *
 * This replaced a bare SVG box-and-arrow diagram labelled
 * "Input / Retrieve / Reason / Act / Verify — EVAL FEEDBACK". That is
 * engineering vocabulary, and a founder reading it learns nothing.
 *
 * Every label here is now what the step DOES for the customer, the checking
 * step is visually separated because it is the thing we are actually selling,
 * and the feedback loop is spelled out in a sentence rather than implied by a
 * dashed line. Built in HTML rather than a fixed-viewBox SVG so it reflows
 * properly on a phone instead of shrinking to nothing.
 */

const steps = [
  {
    n: '1',
    icon: MessageSquare,
    title: 'Someone asks',
    body: 'A customer or a colleague asks a question, in their own words.',
  },
  {
    n: '2',
    icon: Search,
    title: 'It finds the facts',
    body: 'It searches your documents and systems for the parts that actually answer it.',
  },
  {
    n: '3',
    icon: Brain,
    title: 'It works out the answer',
    body: 'Using what it found — not what it half-remembers from the internet.',
  },
  {
    n: '4',
    icon: Zap,
    title: 'It does the job',
    body: 'Replies, looks up an order, books the thing. Whatever you asked it to handle.',
  },
];

const check = {
  icon: ShieldCheck,
  title: 'Then we check it',
  body: 'Every answer is scored against what a correct answer looks like. This is the step almost everyone skips.',
};

export function AgentFlow({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-col gap-6', className)}>
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <li
            key={step.n}
            className="relative flex flex-col gap-2.5 rounded-[var(--radius-card)] bg-surface-2 p-5 ring-line"
          >
            <div className="flex items-center gap-2.5">
              <span className="flex size-8 items-center justify-center rounded-lg bg-surface-3 text-ink-muted">
                <step.icon className="size-4" aria-hidden="true" />
              </span>
              <span className="font-mono text-[0.6875rem] text-ink-subtle">{step.n}</span>
            </div>
            <h3 className="text-[0.9375rem] font-semibold text-ink">{step.title}</h3>
            <p className="text-[0.8125rem] leading-relaxed text-ink-muted">{step.body}</p>
          </li>
        ))}
      </ol>

      {/* The checking step is the product, so it gets its own band rather than
          being a fifth identical box in the row. */}
      <div className="relative overflow-hidden rounded-[var(--radius-card)] bg-brand/8 p-5 ring-1 ring-brand/30 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand/15 text-brand-tint">
            <check.icon className="size-5" aria-hidden="true" />
          </span>
          <div className="flex flex-col gap-1.5">
            <h3 className="text-[1.0625rem] font-semibold text-ink">{check.title}</h3>
            <p className="max-w-2xl text-[0.875rem] leading-relaxed text-ink-muted">{check.body}</p>
          </div>
        </div>

        <div className="mt-5 flex items-start gap-3 border-t border-brand/20 pt-4">
          <RotateCcw className="mt-0.5 size-4 shrink-0 text-brand-tint" aria-hidden="true" />
          <p className="text-[0.875rem] leading-relaxed text-ink-muted">
            <span className="text-ink">And what we learn goes straight back in.</span> That loop is
            why the system gets better every week instead of quietly getting worse — and it is the
            difference between AI you can rely on and AI you have to keep apologising for.
          </p>
        </div>
      </div>
    </div>
  );
}
