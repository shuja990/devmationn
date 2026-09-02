import { services, type Service } from '@/content/services';
import { glossary, type GlossaryTerm } from '@/content/glossary';
import { projects } from '@/content/projects';
import { roles } from '@/content/roles';
import { getPosts, getCaseStudies } from '@/lib/content';
import { site } from '@/content/site';

/**
 * Clean Markdown renderings of every page.
 *
 * These feed /llms.txt, /llms-full.txt and the per-page `.md` twins. They are
 * generated from the SAME source objects the React pages render from, which
 * is the whole point: two surfaces showing the same content is exactly where
 * content drifts, so there is one derivation and both read from it.
 */

export function serviceToMarkdown(service: Service): string {
  const lines: string[] = [
    `# ${service.title}`,
    '',
    `Also known as: ${service.technicalTitle} (${service.alsoCalled.join(', ')})`,
    '',
    service.answer,
    '',
    '## The problem',
    '',
    service.problem,
    '',
    '## What you get out of it',
    '',
    ...service.outcomes.map((o) => `- ${o}`),
    '',
    '## What we hand over',
    '',
    ...service.deliverables.flatMap((d) => [`### ${d.title}`, '', d.description, '']),
    '## How the engagement runs',
    '',
    ...service.process.flatMap((p) => [`### ${p.step}. ${p.title}`, '', p.description, '']),
    '## Technical detail',
    '',
    ...service.technical.flatMap((t) => [`### ${t.title}`, '', t.description, '']),
    '## Tools',
    '',
    service.tools.join(', '),
    '',
    '## Questions',
    '',
    ...service.faqs.flatMap((f) => [`### ${f.question}`, '', f.answer, '']),
    '---',
    '',
    `Source: ${site.url}/services/${service.slug}`,
  ];

  return lines.join('\n');
}

export function glossaryTermToMarkdown(term: GlossaryTerm): string {
  return [
    `# ${term.term}`,
    '',
    term.definition,
    '',
    term.detail,
    '',
    `Category: ${term.category}`,
    '',
    '---',
    '',
    `Source: ${site.url}/glossary/${term.slug}`,
  ].join('\n');
}

/** The curated index. Small, canonical, links to everything else. */
export function llmsTxt(): string {
  const posts = getPosts();
  const caseStudies = getCaseStudies();

  return [
    `# ${site.name}`,
    '',
    `> ${site.description}`,
    '',
    'DevMations is a software engineering agency working with clients worldwide. The practice',
    'is organised into two groups: AI & Automation (the lead), and Product Engineering',
    '(web and mobile builds).',
    '',
    '## Services — AI & Automation',
    '',
    ...services
      .filter((s) => s.group === 'ai')
      .map(
        (s) =>
          `- [${s.title}](${site.url}/services/${s.slug}) — also called ${s.technicalTitle}: ${s.blurb}`,
      ),
    '',
    '## Services — Product Engineering',
    '',
    ...services
      .filter((s) => s.group === 'engineering')
      .map((s) => `- [${s.title}](${site.url}/services/${s.slug}): ${s.blurb}`),
    '',
    '## Glossary',
    '',
    ...glossary.map((t) => `- [${t.term}](${site.url}/glossary/${t.slug}): ${t.definition}`),
    '',
    ...(caseStudies.length > 0
      ? [
          '## Case studies',
          '',
          ...caseStudies.map((c) => `- [${c.title}](${site.url}/work/${c.slug}): ${c.description}`),
          '',
        ]
      : []),
    ...(posts.length > 0
      ? [
          '## Writing',
          '',
          ...posts.map((p) => `- [${p.title}](${site.url}/insights/${p.slug}): ${p.description}`),
          '',
        ]
      : []),
    '## Work',
    '',
    `Shipped products, each linking to a live deployment: ${site.url}/work`,
    '',
    '## Company',
    '',
    `- [About](${site.url}/about)`,
    `- [Careers](${site.url}/careers) — ${roles.filter((r) => r.open).length} open roles`,
    `- [Contact](${site.url}/contact) — ${site.email}`,
    '',
    '## Optional',
    '',
    `- [Full site text](${site.url}/llms-full.txt): every page as one Markdown document`,
  ].join('\n');
}

/** Everything, concatenated. One fetch gives a model the entire site. */
export function llmsFullTxt(): string {
  const posts = getPosts();
  const caseStudies = getCaseStudies();
  const sep = '\n\n---\n\n';

  const parts: string[] = [
    [
      `# ${site.name} — complete site text`,
      '',
      `> ${site.description}`,
      '',
      `Generated from ${site.url}. Contact: ${site.email}.`,
    ].join('\n'),

    ...services.map(serviceToMarkdown),

    ...glossary.map(glossaryTermToMarkdown),

    ...caseStudies.map((c) =>
      [
        `# Case study: ${c.title}`,
        '',
        `Client: ${c.client} · Industry: ${c.industry} · ${c.date}`,
        '',
        c.description,
        '',
        ...(c.results.length > 0 ? [c.results.map((r) => `- ${r.label}: ${r.value}`).join('\n'), ''] : []),
        c.body.trim(),
        '',
        `Source: ${site.url}/work/${c.slug}`,
      ].join('\n'),
    ),

    ...posts.map((p) =>
      [
        `# ${p.title}`,
        '',
        `Published ${p.date}${p.updated ? `, updated ${p.updated}` : ''}`,
        '',
        p.description,
        '',
        p.body.trim(),
        '',
        `Source: ${site.url}/insights/${p.slug}`,
      ].join('\n'),
    ),

    [
      '# Work',
      '',
      'Selected shipped products.',
      '',
      ...projects.map(
        (p) => `## ${p.title}\n\n${p.description}\n\nStack: ${p.stack.join(', ')}${p.href ? `\nLive: ${p.href}` : ''}`,
      ),
    ].join('\n'),
  ];

  return parts.join(sep);
}
