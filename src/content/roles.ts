/**
 * Open roles.
 *
 * PLACEHOLDER CONTENT -- see CONTENT-TODO.md. These are plausible roles for
 * the practice described on the site, not confirmed openings. Set `open: false`
 * on anything you are not actually hiring for; the careers page renders an
 * honest empty state when nothing is open.
 */

export type Role = {
  slug: string;
  title: string;
  team: 'AI Engineering' | 'QA Engineering' | 'Product Engineering';
  employmentType: 'FULL_TIME' | 'PART_TIME' | 'CONTRACTOR';
  location: string;
  posted: string;
  summary: string;
  about: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  open: boolean;
};

export const roles: Role[] = [
  {
    slug: 'ai-engineer',
    title: 'AI Engineer — Agents & RAG',
    team: 'AI Engineering',
    employmentType: 'FULL_TIME',
    location: 'Pakistan',
    posted: '2026-08-01',
    summary:
      'Build retrieval pipelines and agent systems for client products, and the evaluation harnesses that prove they work.',
    about:
      'You will own AI systems end to end: reading a client’s corpus, designing the retrieval strategy, building the agent loop, and measuring the result. The work is judged on whether the system holds up with real users, not on whether the demo is impressive.',
    responsibilities: [
      'Design and build retrieval pipelines — chunking, embedding, hybrid search, re-ranking',
      'Implement agent orchestration with step limits, retries and human handoff',
      'Build eval suites and wire them into CI alongside the systems they measure',
      'Track and reduce per-request cost and p95 latency as first-class metrics',
      'Write up findings for clients in language a non-engineer can act on',
    ],
    requirements: [
      '3+ years building production software, with at least one LLM system shipped to real users',
      'Strong Python or TypeScript',
      'Practical experience with vector search and a retrieval framework',
      'Comfortable measuring things rather than asserting them',
    ],
    niceToHave: [
      'Experience with MCP or similar tool-calling protocols',
      'Published writing or open-source work on evals or retrieval',
    ],
    open: true,
  },
  {
    slug: 'qa-automation-engineer',
    title: 'QA Automation Engineer',
    team: 'QA Engineering',
    employmentType: 'FULL_TIME',
    location: 'Pakistan',
    posted: '2026-08-01',
    summary:
      'Build and stabilise Playwright suites, kill flake at the root, and help develop our QA agent tooling.',
    about:
      'You will work across client codebases where the test suite has stopped being trusted, and turn it back into something people rely on. Part of the role is conventional automation; part of it is building the agent-driven exploratory testing we ship as a service.',
    responsibilities: [
      'Build end-to-end suites in Playwright that other engineers can read and debug',
      'Root-cause flaky tests rather than papering over them with retries',
      'Parallelise and shard CI pipelines so suites finish inside a team’s patience',
      'Contribute to our QA agent harness and its triage tooling',
    ],
    requirements: [
      '3+ years in test automation with strong Playwright or Cypress experience',
      'Solid TypeScript',
      'Experience diagnosing flake — timing, shared state, test data isolation',
      'CI/CD experience in GitHub Actions or equivalent',
    ],
    niceToHave: ['Experience with LLM-driven testing tools', 'Performance or load testing background'],
    open: true,
  },
  {
    slug: 'full-stack-engineer',
    title: 'Full-Stack Engineer',
    team: 'Product Engineering',
    employmentType: 'FULL_TIME',
    location: 'Pakistan',
    posted: '2026-08-01',
    summary:
      'Build the products our AI work lives inside — Next.js and Node, from schema design through deployment.',
    about:
      'You will ship complete products rather than tickets: data model, API, frontend, deployment. Much of the work involves integrating AI features built by the AI engineering team, so you will be close to that work without needing to have done it before.',
    responsibilities: [
      'Design data models and API contracts at the start of a project, not after',
      'Build and ship vertical slices that are deployable and reviewable',
      'Integrate payments, third-party APIs and webhooks correctly, including idempotency',
      'Treat Core Web Vitals as acceptance criteria',
    ],
    requirements: [
      '3+ years with React and Node.js in production',
      'Strong TypeScript',
      'Comfortable with PostgreSQL or MongoDB, including query performance work',
      'Have owned a deployment, not just a pull request',
    ],
    niceToHave: ['React Native experience', 'AWS infrastructure experience'],
    open: true,
  },
];

export function getRole(slug: string) {
  return roles.find((r) => r.slug === slug);
}

export const openRoles = roles.filter((r) => r.open);
