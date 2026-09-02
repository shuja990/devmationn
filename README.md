# DevMations

Agency site for DevMations — AI assistants and agents, AI testing, QA automation,
and the web and mobile products those live inside.

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind 4 · MDX

## Running it

```bash
npm install
cp .env.example .env.local   # fill in before using the contact form
npm run dev                  # http://localhost:3000
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server |
| `npm run build` | Production build. Lint and types gate it. |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |
| `npm test` | Playwright suite (builds and serves automatically) |

Node 20.9+ required.

## Where things live

```
src/content/       All copy and data. Edit here, not in components.
  services.ts      The 8 services — see the naming note below
  projects.ts      Portfolio. Every entry is a real, live deployment.
  glossary.ts      20 term definitions
  roles.ts         Open positions
  site.ts          Identity, contact, navigation
  posts/*.mdx      Insights articles
  case-studies/*.mdx
src/components/
  ui/              Primitives (Button, Card, Section, …)
  blocks/          Composed sections (EvalScorecard, AgentFlow, WorkGrid, …)
  brand/           Logo, service icons
src/lib/
  content.ts       MDX loading + Zod frontmatter validation
  schema.ts        JSON-LD builders
  markdown-export.ts  Generates llms.txt and the .md twins
```

## Two things worth knowing before editing

**1. Copy is layered for two audiences.** A non-technical founder and a CTO read the
same page. Each service therefore carries a plain `title` ("Testing Your AI"), a
`technicalTitle` used for metadata and schema ("AI Evals & LLM Quality"), and an
`alsoCalled` keyword list rendered under the h1. Body copy is plain throughout; the
jargon lives in one clearly-labelled *"For your engineers"* block per service page.
Keep it that way — removing the technical terms costs search traffic, and leading with
them costs conversions.

**2. `answer` fields are load-bearing.** The paragraph under each h1 is what AI answer
engines quote. It must be a self-contained definition that survives being lifted out of
the page with no surrounding context — no pronouns pointing backwards, no "we also do
this".

## Machine-readable surfaces

Generated from the same source objects the pages render from, so they cannot drift:

- `/llms.txt` — curated index
- `/llms-full.txt` — every page as one Markdown document
- `/services/<slug>/md`, `/glossary/<slug>/md`, `/insights/<slug>/md` — page twins
- `/sitemap.xml`, `/robots.txt` (names the AI crawlers explicitly), `/feed.xml`

## Deploying

Vercel. Set the variables from `.env.example` in the project settings.

**Read `CONTENT-TODO.md` first.** Both case studies and several homepage figures are
illustrative placeholders. Do not point the production domain at this build until that
file is worked through.

## Conventions

- Colour, spacing and type come from tokens in `src/app/globals.css`. No hardcoded hex.
- Green and red are semantic — passing and failing — never decorative.
- Content must be visible without JavaScript. Scroll reveals animate transform only,
  never opacity; there is a regression test for this.
