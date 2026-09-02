import { cn } from '@/lib/utils';

/**
 * The hero visual.
 *
 * Replaced an eval scorecard here. The scorecard is honest and engineers like
 * it, but it asks a non-technical visitor to understand pass rates and
 * thresholds before they understand what we sell. A conversation does not:
 * everyone has read a chat, and everyone immediately grasps that one of these
 * answers is invented and the other is not.
 *
 * The scorecard still exists -- it belongs on the evals service page, in the
 * section explicitly addressed to engineers.
 */
export function AnswerComparison({ className }: { className?: string }) {
  return (
    <figure
      className={cn(
        'overflow-hidden rounded-[var(--radius-card)] bg-surface ring-line',
        className,
      )}
    >
      <div className="border-b border-line px-5 py-4">
        <p className="mb-1.5 font-mono text-[0.625rem] tracking-[0.16em] text-ink-subtle uppercase">
          A customer asks
        </p>
        <p className="text-[0.9375rem] text-ink">
          &ldquo;Can I still return this? I ordered it 40 days ago.&rdquo;
        </p>
      </div>

      <div className="flex flex-col gap-px bg-line">
        <Answer
          tone="fail"
          verdict="Most AI, out of the box"
          text="Yes — our returns window is 60 days, so you are still covered."
          note="Made up. Your policy says 30 days. Now you either honour it or argue with a customer."
        />
        <Answer
          tone="pass"
          verdict="Built properly"
          text="Our returns window is 30 days, so that order is just outside it. I can pass this to the team to look at as an exception."
          note="Taken from your actual returns policy. And when it is unsure, it says so instead of guessing."
        />
      </div>
    </figure>
  );
}

function Answer({
  tone,
  verdict,
  text,
  note,
}: {
  tone: 'pass' | 'fail';
  verdict: string;
  text: string;
  note: string;
}) {
  const isPass = tone === 'pass';

  return (
    <div className="bg-surface px-5 py-4">
      <div className="mb-2 flex items-center gap-2">
        <span
          className={cn(
            'flex size-4 items-center justify-center rounded-full text-[0.625rem] font-bold',
            isPass ? 'bg-pass/15 text-pass' : 'bg-fail/15 text-fail',
          )}
          aria-hidden="true"
        >
          {isPass ? '✓' : '✕'}
        </span>
        <span
          className={cn(
            'font-mono text-[0.6875rem] tracking-wide',
            isPass ? 'text-pass' : 'text-fail',
          )}
        >
          {verdict}
        </span>
      </div>
      <p className="mb-2 text-[0.9375rem] leading-relaxed text-ink">{text}</p>
      <p className="text-[0.8125rem] leading-relaxed text-ink-subtle">{note}</p>
    </div>
  );
}
