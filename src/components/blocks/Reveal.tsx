import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * Scroll reveal.
 *
 * A plain server component with a class -- no client JavaScript, no
 * IntersectionObserver, no hydration cost. The animation lives entirely in
 * `globals.css`, where the default state is visible and the motion is layered
 * on only where scroll-driven timelines exist and motion is welcome.
 *
 * This replaced a `motion` implementation that started at opacity 0 and
 * relied on JS to reveal. That version left every card invisible when
 * JavaScript did not run, which is unacceptable on a site built to be read by
 * crawlers.
 *
 * `delay` is kept in the signature so call sites did not all need rewriting;
 * a view-timeline animation is driven by scroll position rather than elapsed
 * time, so a stagger delay has no meaning here and is intentionally ignored.
 */
export function Reveal({
  children,
  className,
  delay: _delay,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return <div className={cn('reveal', className)}>{children}</div>;
}
