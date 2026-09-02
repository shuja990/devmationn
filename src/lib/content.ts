import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { z } from 'zod';

/**
 * The MDX content layer.
 *
 * Frontmatter is validated with Zod at read time and **throws** on failure.
 * That is deliberate: this runs at build time, so a malformed post fails
 * `next build` rather than shipping a page with a missing date or a broken
 * cover image. A silent fallback here would mean discovering the problem in
 * production.
 *
 * The same parsed records feed the rendered pages, the sitemap, the RSS feed,
 * llms.txt and the Markdown twins -- so those surfaces cannot drift apart.
 */

const CONTENT_DIR = path.join(process.cwd(), 'src', 'content');

const postSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'date must be YYYY-MM-DD'),
  updated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
});

const caseStudySchema = z.object({
  title: z.string().min(1),
  client: z.string().min(1),
  description: z.string().min(1),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'date must be YYYY-MM-DD'),
  service: z.string().min(1),
  industry: z.string().min(1),
  stack: z.array(z.string()).default([]),
  /** Headline outcomes shown as a metric row. */
  results: z
    .array(z.object({ label: z.string(), value: z.string() }))
    .default([]),
  draft: z.boolean().default(false),
});

export type Post = z.infer<typeof postSchema> & { slug: string; body: string };
export type CaseStudy = z.infer<typeof caseStudySchema> & { slug: string; body: string };

function readCollection<T>(dir: string, schema: z.ZodType<T>): (T & { slug: string; body: string })[] {
  const full = path.join(CONTENT_DIR, dir);
  if (!fs.existsSync(full)) return [];

  return fs
    .readdirSync(full)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '');
      const raw = fs.readFileSync(path.join(full, file), 'utf8');
      const { data, content } = matter(raw);

      const parsed = schema.safeParse(data);
      if (!parsed.success) {
        throw new Error(
          `Invalid frontmatter in ${dir}/${file}:\n` +
            parsed.error.issues.map((i) => `  - ${i.path.join('.') || '(root)'}: ${i.message}`).join('\n'),
        );
      }

      return { ...parsed.data, slug, body: content };
    });
}

export function getPosts(): Post[] {
  return readCollection('posts', postSchema)
    .filter((p) => !p.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post | undefined {
  return getPosts().find((p) => p.slug === slug);
}

export function getCaseStudies(): CaseStudy[] {
  return readCollection('case-studies', caseStudySchema)
    .filter((c) => !c.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return getCaseStudies().find((c) => c.slug === slug);
}
