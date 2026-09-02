import { cn } from '@/lib/utils';

/**
 * The hero visual: a multi-agent workflow, explained without jargon.
 *
 * The whole point of "multi-agent" is legible the moment you show it as a
 * team doing a job — one thing researches, one prices, one sequences, and
 * nothing real happens until a person approves. Nobody needs the word
 * "orchestration" to understand that, and the approval step is what makes a
 * non-technical buyer comfortable rather than nervous.
 */

type Agent = {
  n: string;
  name: string;
  job: string;
  state: 'done' | 'working' | 'waiting';
};

const agents: Agent[] = [
  { n: '1', name: 'Researcher', job: 'Finds the flights, places to stay, things to do', state: 'done' },
  { n: '2', name: 'Budgeter', job: 'Prices it all up and keeps it under €400', state: 'done' },
  { n: '3', name: 'Planner', job: 'Puts it in an order that actually works', state: 'working' },
];

export function AgentWorkflow({ className }: { className?: string }) {
  return (
    <figure
      className={cn('overflow-hidden rounded-[var(--radius-card)] bg-surface ring-line', className)}
    >
      <div className="border-b border-line px-5 py-4">
        <p className="mb-1.5 font-mono text-[0.625rem] tracking-[0.16em] text-ink-subtle uppercase">
          You ask for one thing
        </p>
        <p className="text-[0.9375rem] text-ink">
          &ldquo;Plan me a weekend in Lisbon for under €400.&rdquo;
        </p>
      </div>

      <div className="px-5 py-4">
        <p className="mb-4 font-mono text-[0.625rem] tracking-[0.16em] text-brand uppercase">
          A team of AI splits up the work
        </p>

        <ol className="flex flex-col gap-3">
          {agents.map((agent) => (
            <li key={agent.n} className="flex items-start gap-3">
              <span
                className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-surface-3 font-mono text-[0.6875rem] text-ink-muted"
                aria-hidden="true"
              >
                {agent.n}
              </span>
              <span className="flex flex-1 flex-col gap-0.5">
                <span className="flex flex-wrap items-baseline justify-between gap-x-3">
                  <span className="text-[0.9375rem] font-medium text-ink">{agent.name}</span>
                  <StateChip state={agent.state} />
                </span>
                <span className="text-[0.8125rem] leading-relaxed text-ink-muted">{agent.job}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>

      <div className="border-t border-line bg-surface-2/60 px-5 py-4">
        <p className="mb-1 flex items-center gap-2 font-mono text-[0.625rem] tracking-[0.16em] text-warm uppercase">
          <span aria-hidden="true">❚❚</span> Then it stops and waits for you
        </p>
        <p className="text-[0.8125rem] leading-relaxed text-ink-muted">
          Nothing gets booked, sent or paid for until you say yes. That approval step is the
          difference between AI that helps and AI you have to clean up after.
        </p>
      </div>
    </figure>
  );
}

function StateChip({ state }: { state: Agent['state'] }) {
  const config = {
    done: { label: 'done', className: 'bg-pass/12 text-pass' },
    working: { label: 'working', className: 'bg-warn/12 text-warn' },
    waiting: { label: 'waiting', className: 'bg-surface-3 text-ink-subtle' },
  }[state];

  return (
    <span
      className={cn(
        'rounded-[var(--radius-pill)] px-2 py-0.5 font-mono text-[0.625rem]',
        config.className,
      )}
    >
      {config.label}
    </span>
  );
}
