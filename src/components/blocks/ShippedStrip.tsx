import Image from 'next/image';
import Link from 'next/link';

import { projects } from '@/content/projects';
import { cn } from '@/lib/utils';

/**
 * A strip of real product screenshots directly under the hero.
 *
 * Deliberately not decoration. The strongest thing this agency has is that
 * every project links to something running, so the hero is followed by actual
 * evidence rather than stock art or invented client logos -- which is what
 * would normally fill this slot and what we have none of.
 *
 * Images are lazy and small: this sits below the fold on most viewports and
 * must not compete with the hero for LCP.
 */

const featured = [
  'lifepilot',
  'f1-rag-chatbot',
  'devmations-ai',
  'banking-app',
  'documents-editor',
  'healthcare-app',
];

export function ShippedStrip({ className }: { className?: string }) {
  const shown = featured
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p) => p !== undefined);

  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="font-mono text-[0.625rem] tracking-[0.16em] text-ink-subtle uppercase">
          Recently shipped — all of these are live
        </p>
        <Link
          href="/work"
          className="font-mono text-[0.6875rem] text-brand-tint transition-colors hover:text-brand"
        >
          See the rest &rarr;
        </Link>
      </div>

      <ul className="grid grid-cols-3 gap-3 sm:grid-cols-6">
        {shown.map((project) => (
          <li key={project.slug}>
            <Link
              href={`/work#${project.slug}`}
              className="group block"
              aria-label={`${project.title} — see it in our work`}
            >
              <span className="relative block aspect-[4/3] overflow-hidden rounded-lg bg-surface-2 ring-1 ring-inset ring-white/8">
                <Image
                  src={project.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 33vw, 16vw"
                  className="object-cover object-top opacity-70 transition-all duration-500 group-hover:scale-[1.04] group-hover:opacity-100"
                />
              </span>
              <span className="mt-1.5 block truncate font-mono text-[0.625rem] text-ink-subtle transition-colors group-hover:text-ink-muted">
                {project.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
