'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

import { Badge, Card } from '@/components/ui';
import { cn } from '@/lib/utils';
import type { Project } from '@/content/projects';

/**
 * The work grid, filterable by service and by industry.
 *
 * Two facets rather than one: service is the primary filter because it maps
 * to what someone is shopping for, industry is secondary because it is what
 * they use to check we have worked in their world. Filtering is plain
 * useState -- this many items does not warrant a library or URL-state dependency.
 */
export function WorkGrid({
  projects,
  serviceOptions,
}: {
  projects: Project[];
  serviceOptions: { slug: string; label: string }[];
}) {
  const [service, setService] = useState<string>('all');
  const [industry, setIndustry] = useState<string>('all');

  const industryOptions = useMemo(
    () => Array.from(new Set(projects.map((p) => p.industry))).sort(),
    [projects],
  );

  const filtered = useMemo(
    () =>
      projects.filter(
        (p) =>
          (service === 'all' || p.service === service) &&
          (industry === 'all' || p.industry === industry),
      ),
    [projects, service, industry],
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <FilterRow
          label="Service"
          value={service}
          onChange={setService}
          options={[{ value: 'all', label: 'All work' }].concat(
            serviceOptions
              .filter((s) => projects.some((p) => p.service === s.slug))
              .map((s) => ({ value: s.slug, label: s.label })),
          )}
        />
        <FilterRow
          label="Industry"
          value={industry}
          onChange={setIndustry}
          options={[{ value: 'all', label: 'All industries' }].concat(
            industryOptions.map((i) => ({ value: i, label: i })),
          )}
        />
      </div>

      <p aria-live="polite" className="sr-only">
        Showing {filtered.length} of {projects.length} projects
      </p>

      {filtered.length === 0 ? (
        <p className="py-12 text-center text-ink-muted">
          Nothing matches that combination. Try widening one of the filters.
        </p>
      ) : (
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <li key={project.slug} id={project.slug} className="group scroll-mt-24">
              <Card className="flex h-full flex-col gap-0 overflow-hidden p-0 transition-colors hover:bg-surface-2">
                <div className="relative aspect-[16/10] overflow-hidden rounded-t-[var(--radius-card)] bg-surface-2">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  {/* Settles bright screenshots into a dark page and gives the
                      card caption something to sit against. */}
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface via-surface/10 to-transparent"
                    aria-hidden="true"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/8"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2.5 p-5">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <Badge tone="brand">{project.industry}</Badge>
                  </div>
                  <h3 className="text-[1.0625rem] font-semibold">{project.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-muted">{project.description}</p>
                  <div className="flex flex-wrap gap-x-2.5 gap-y-1 pt-1">
                    {project.stack.map((tech) => (
                      <span key={tech} className="font-mono text-[0.6875rem] text-ink-subtle">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="mt-auto inline-flex items-center gap-1 pt-3 font-mono text-xs text-brand-tint hover:text-brand"
                    >
                      Open live site
                      <ArrowUpRight className="size-3" aria-hidden="true" />
                    </a>
                  ) : (
                    <span className="mt-auto pt-3 font-mono text-xs text-ink-subtle">
                      Not publicly available
                    </span>
                  )}
                </div>
              </Card>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function FilterRow({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-mono text-[0.625rem] tracking-[0.16em] text-ink-subtle uppercase">
        {label}
      </span>
      <div role="group" aria-label={`Filter by ${label.toLowerCase()}`} className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            aria-pressed={value === option.value}
            className={cn(
              'rounded-[var(--radius-pill)] px-3.5 py-1.5 text-xs transition-colors',
              value === option.value
                ? 'bg-brand text-white'
                : 'bg-surface-2 text-ink-muted hover:bg-surface-3 hover:text-ink',
            )}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
