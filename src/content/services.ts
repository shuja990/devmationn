/**
 * The eight services, in deliberate order.
 *
 * Order is positioning. `ai` runs first and carries the nav weight, the
 * homepage and the SEO. `engineering` is the delivery arm underneath it --
 * framed as the team that ships what the AI work produces, not as generalist
 * outsourcing.
 *
 * ---------------------------------------------------------------------------
 * TWO AUDIENCES, TWO LAYERS
 *
 * A non-technical founder buying an app and a CTO buying an eval harness read
 * the same page. Stripping the jargon loses the CTO; keeping it loses the
 * founder. So the content is layered, and the fields below are ordered by who
 * reads them:
 *
 *   PLAIN LAYER (leads the page, zero jargon)
 *     answer      - what this is, in words anyone can read. Also the sentence
 *                   answer engines quote, so it must stand alone with no
 *                   surrounding context and no backward-pointing pronouns.
 *     problem     - the situation the buyer is actually in, in their words.
 *     outcomes    - what changes for them. Business terms, not features.
 *     deliverables- what lands in their hands, described plainly.
 *     process     - how the engagement runs.
 *     faqs        - what they ask before buying.
 *
 *   TECHNICAL LAYER (further down, labelled "For your engineers")
 *     technical   - the specifics an engineer needs to trust us. This is the
 *                   only place jargon is allowed, and it is allowed here
 *                   because its audience is explicitly named on the page.
 * ---------------------------------------------------------------------------
 */

export type ServiceGroup = 'ai' | 'engineering';

/** Lucide icon name, resolved in ServiceIcon. Kept as a string so this file
 *  stays free of component imports and can be read by the Markdown export. */
export type ServiceIcon =
  | 'bot'
  | 'gauge'
  | 'radar'
  | 'plug'
  | 'fileCheck'
  | 'flaskConical'
  | 'layoutGrid'
  | 'smartphone';

export type Service = {
  slug: string;
  group: ServiceGroup;
  /** Plain-language name. Used for the h1, the nav and every card. */
  title: string;
  /** The industry term. Used in metadata, schema and the SEO surface. */
  technicalTitle: string;
  /** Keyword set shown under the h1 as "Also called". */
  alsoCalled: string[];
  /** Short plain label for nav and cards. */
  shortTitle: string;
  icon: ServiceIcon;
  /** One line, used in the mega-menu and service grid. */
  blurb: string;
  /** Plain-language definition. Leads the page. See note above. */
  answer: string;
  /** The buyer's situation, in their words. */
  problem: string;
  /** What changes for the business. Three, no more. */
  outcomes: string[];
  deliverables: { title: string; description: string }[];
  process: { step: string; title: string; description: string }[];
  /** The engineer-facing layer. Jargon permitted here and nowhere else. */
  technical: { title: string; description: string }[];
  tools: string[];
  faqs: { question: string; answer: string }[];
  /** Project slugs from projects.ts to feature on this page. */
  relatedProjects: string[];
};

export const services: Service[] = [
  {
    slug: 'ai-agents-rag',
    icon: 'bot',
    group: 'ai',
    title: 'AI Assistants & Agents',
    technicalTitle: 'AI Agents & RAG Systems',
    alsoCalled: ['RAG', 'retrieval-augmented generation', 'agentic AI', 'AI copilots', 'LLM applications'],
    shortTitle: 'AI Assistants & Agents',
    blurb: 'AI assistants that work with your own data — and hold up with real customers.',
    answer:
      'An AI agent is a system that answers questions or completes tasks using your own documents and software, rather than general knowledge from the internet. DevMations builds these so they give accurate answers on real customer questions, not just on the handful someone tried in a demo.',
    problem:
      'You have seen a demo where the AI answered five questions beautifully, so you built one. Then real customers arrived. It confidently gave a wrong answer. It missed something that was clearly in your documents. It got stuck repeating itself. And the bill was four times what anyone estimated. Nobody on the team can tell you why, because nothing was ever measured.',
    outcomes: [
      'Customers get correct answers from your own information, not invented ones',
      'You can see, in a weekly report, whether it is getting better or worse',
      'Running costs are predictable instead of a surprise at the end of the month',
    ],
    deliverables: [
      {
        title: 'An assistant that knows your business',
        description:
          'It searches your documents, policies, product data or support history and answers from those — so it says what your company would say, not what the internet says.',
      },
      {
        title: 'The ability to actually do things',
        description:
          'Not just answering, but looking up an order, checking availability, or starting a process in your existing systems — with safeguards so it cannot do anything destructive.',
      },
      {
        title: 'Sensible behaviour when it does not know',
        description:
          'It says so, or hands over to a person, instead of inventing something plausible. This is the single biggest cause of AI embarrassing a company in public.',
      },
      {
        title: 'A cost you can plan around',
        description:
          'We measure what each conversation costs and how long it takes, then bring both down. You get a number you can budget against.',
      },
      {
        title: 'Proof it works',
        description:
          'A test suite that runs automatically and tells you the quality score every time anything changes.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'We read your material',
        description:
          'Your actual documents and your actual customer questions, before we propose anything. Most disappointing AI is a problem with how the information was prepared, not with the AI.',
      },
      {
        step: '02',
        title: 'We measure where you are now',
        description:
          'A score for the current state. Without it, nobody can tell later whether the work was worth paying for.',
      },
      {
        step: '03',
        title: 'We build it',
        description:
          'With the testing in place from the first week, so quality is visible the whole way through rather than assessed at the end.',
      },
      {
        step: '04',
        title: 'We tune it and hand it over',
        description:
          'Accuracy up, cost and waiting time down, then handed over with documentation your team can work from.',
      },
    ],
    technical: [
      {
        title: 'Retrieval pipeline',
        description:
          'Chunking strategy, embedding model choice and index design fitted to the corpus. Hybrid retrieval with re-ranking where it measurably beats plain vector similarity on a golden set.',
      },
      {
        title: 'Tool and function layer',
        description:
          'Tool schemas scoped to intent rather than to your database shape, with argument validation, idempotency on write paths, and graceful degradation when a downstream service is unavailable.',
      },
      {
        title: 'Orchestration',
        description:
          'Step limits, retry policy, timeout budgets and explicit human handoff, so a stuck agent terminates rather than looping through your token budget.',
      },
      {
        title: 'Cost and latency',
        description:
          'Per-request cost and p95 latency tracked as first-class metrics. Prompt caching, model routing to smaller models for easy requests, and context trimming applied where measurement shows they pay.',
      },
      {
        title: 'Guardrails',
        description:
          'Input and output filtering, prompt-injection resistance on retrieved content treated as an explicit eval category, and refusal behaviour tuned to your risk posture.',
      },
    ],
    tools: [
      'OpenAI',
      'Anthropic Claude',
      'LangChain',
      'LlamaIndex',
      'Pinecone',
      'pgvector',
      'Redis',
      'Python',
      'TypeScript',
    ],
    faqs: [
      {
        question: 'How do you know it is giving the right answers?',
        answer:
          'We build a set of real questions where we already know the correct answer, and run the whole set automatically every time anything changes. You get a score. When the score drops, the change does not go live.',
      },
      {
        question: 'Can you reduce what we are already spending on this?',
        answer:
          'Usually. The common savings are storing repeated information instead of re-sending it, using a cheaper model for the easy questions, and trimming instructions that have quietly grown over time. We measure the bill before and after, so the saving is a fact rather than a claim.',
      },
      {
        question: 'Which AI provider should we use?',
        answer:
          'Whichever one meets your quality bar most cheaply on your specific task — which is rarely the one topping public leaderboards. We build the testing that answers this for you, so the decision can be revisited as new models come out.',
      },
      {
        question: 'Will it make things up?',
        answer:
          'All AI can. The engineering job is to make it rare and to make it visible: give it the right source material, teach it to say when it does not know, and test for invented answers as a specific scored category rather than hoping.',
      },
    ],
    relatedProjects: ['lifepilot', 'f1-rag-chatbot', 'devmations-ai'],
  },
  {
    slug: 'ai-evals',
    icon: 'gauge',
    group: 'ai',
    title: 'Testing Your AI',
    technicalTitle: 'AI Evals & LLM Quality',
    alsoCalled: ['evals', 'LLM evaluation', 'AI quality assurance', 'model regression testing'],
    shortTitle: 'Testing Your AI',
    blurb: 'Prove your AI works — before your customers find out it does not.',
    answer:
      'AI evaluation means regularly testing an AI system against a fixed set of real questions, scoring the answers, and blocking any release that scores worse than the last one. DevMations builds that testing for teams who need to know their AI is working rather than hope it is.',
    problem:
      'Someone changed the wording to fix a complaint. Did that break anything else? Nobody knows. So either you ship nervously and find out from a customer, or you stop shipping. Normal software testing cannot help here, because the AI words its answer differently every time and there is no simple right-or-wrong to check against.',
    outcomes: [
      'A single number for whether your AI is working, updated automatically',
      'Changes stop being a gamble — a bad one is caught before customers see it',
      'Your team can improve the AI quickly, because they can tell if they made it worse',
    ],
    deliverables: [
      {
        title: 'A set of real test questions',
        description:
          'Built from your actual customer traffic and the failures already reported to you — not invented examples. The problems you have already had become the things that can never happen again.',
      },
      {
        title: 'A scoring method you agree with',
        description:
          'We write down what a good answer looks like for your business, in enough detail that two different people grade the same answer the same way.',
      },
      {
        title: 'Automatic grading, checked against people',
        description:
          'Scoring at volume costs almost nothing if a machine does it — but only if we first prove the machine agrees with your team. We measure that agreement and show you the figure.',
      },
      {
        title: 'A safety catch on releases',
        description:
          'The tests run every time anything changes, and a change that lowers the score cannot go live. This is the part that actually changes how a team behaves.',
      },
      {
        title: 'A quality report',
        description:
          'Score over time, broken down by category, so a slow decline is visible to you long before a customer complains.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'We collect what has gone wrong',
        description:
          'Support tickets, bad answers, the screenshots in your team chat. Those become the first tests, because those are the failures you already know cost you something.',
      },
      {
        step: '02',
        title: 'We agree what good looks like',
        description:
          'Written down properly. This is usually the first time a team has had that conversation, and it is often the most valuable part of the whole engagement.',
      },
      {
        step: '03',
        title: 'We build and check the scoring',
        description:
          'Automatic grading, validated against how your own people score the same answers. If the two disagree, we fix that before trusting any number.',
      },
      {
        step: '04',
        title: 'We connect it to your release process',
        description:
          'So it runs by itself, forever, without anyone remembering to. Handed over with documentation your team can extend.',
      },
    ],
    technical: [
      {
        title: 'Golden dataset construction',
        description:
          'Stratified sampling from production traffic plus a curated failure corpus. Versioned alongside the code so a change to the dataset is reviewable.',
      },
      {
        title: 'Grader selection per task',
        description:
          'Deterministic and structural assertions where output is constrained, LLM-as-judge where it is not, human review sampled where the stakes justify it. Mixing these correctly is most of the work.',
      },
      {
        title: 'Judge calibration',
        description:
          'Agreement between the model judge and human labels measured with Cohen’s kappa on a held-out sample, and reported alongside every judge-derived metric. An uncalibrated judge is not a score.',
      },
      {
        title: 'CI regression gates',
        description:
          'Suites wired into GitHub Actions or your existing pipeline, with thresholds tuned to catch real regressions without blocking on noise. Per-category thresholds where the aggregate would hide a problem.',
      },
      {
        title: 'Observability',
        description:
          'Trace-level logging via Langfuse or equivalent, so a failing case can be opened and inspected rather than guessed at.',
      },
    ],
    tools: [
      'Promptfoo',
      'Braintrust',
      'DeepEval',
      'Ragas',
      'Langfuse',
      'Python',
      'GitHub Actions',
    ],
    faqs: [
      {
        question: 'How many test questions do we need?',
        answer:
          'Fewer than most people expect. Fifty well-chosen questions covering the ways your AI actually fails catch more problems than a thousand generic ones, and can be put together in about a week.',
      },
      {
        question: 'Can a machine really judge the answers?',
        answer:
          'Only once we have proved it agrees with your people. We have your team grade a sample by hand, compare that to the machine, and report how closely they match. If they do not match well enough, we fix the scoring rules before relying on any number from it.',
      },
      {
        question: 'We already built our AI. Is it too late?',
        answer:
          'No — that is the most common way this starts. We work with what you already have. Nothing needs rebuilding for us to begin measuring it.',
      },
      {
        question: 'How long before we see something?',
        answer:
          'A first working set of tests and an initial score typically inside two to three weeks. You get a real number early, because that number is what makes every later decision cheaper.',
      },
    ],
    relatedProjects: ['devmations-ai', 'mock-interview-ai', 'intellisummarizer'],
  },
  {
    slug: 'qa-agents',
    icon: 'radar',
    group: 'ai',
    title: 'AI That Tests Your Software',
    technicalTitle: 'QA Agents & Autonomous Testing',
    alsoCalled: ['QA agents', 'autonomous testing', 'AI-driven QA', 'self-healing tests'],
    shortTitle: 'AI Software Testers',
    blurb: 'AI testers that use your product like a customer would, and report what breaks.',
    answer:
      'A QA agent is an AI tester that explores your website or app the way a real person would — clicking through it, trying things, and reporting what looks broken — instead of following a fixed script. DevMations builds these to catch the problems your existing tests were never written to look for.',
    problem:
      'Your automated tests only check the things someone thought to check. So the bugs that reach customers are, almost by definition, the ones nobody imagined. Meanwhile the tests you do have break every time the design changes, until the team quietly stops trusting them and just clicks "run again".',
    outcomes: [
      'Bugs get found by a tester that never gets bored, at 3am, before customers do',
      'Less time spent maintaining tests that break for no real reason',
      'A clear report of what was tested, so coverage is a fact rather than a feeling',
    ],
    deliverables: [
      {
        title: 'AI testers for your key journeys',
        description:
          'They work through signup, checkout, or whatever actually makes you money — varying what they try, the way a real customer does.',
      },
      {
        title: 'Tests that stop breaking constantly',
        description:
          'They find buttons and fields the way a person does, so renaming something in the design does not cause an afternoon of false alarms.',
      },
      {
        title: 'Sorted results, not a wall of red',
        description:
          'Each failure is automatically classified as a genuine bug, an environment problem, or a flaky test — which is the work that quietly eats most QA time.',
      },
      {
        title: 'Bugs your developers can act on immediately',
        description:
          'Every finding arrives with a video, the exact steps, and what should have happened — so nobody has to reinvestigate from scratch.',
      },
      {
        title: 'A coverage report',
        description:
          'What was actually exercised, mapped against your real customer journeys.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'We find what matters commercially',
        description:
          'An AI diligently testing your settings page while checkout is broken is worse than useless. We start from the journeys that make or lose you money.',
      },
      {
        step: '02',
        title: 'We teach it what wrong looks like',
        description:
          'Every product has its own definition of a broken screen. That has to be specified, not assumed.',
      },
      {
        step: '03',
        title: 'We run it alongside your existing tests',
        description:
          'For a trial period, so you can compare what it finds and see the noise level before it has any power to stop a release.',
      },
      {
        step: '04',
        title: 'We turn it on properly',
        description:
          'Once it has earned trust, it runs on every release, with a clear route for your team to handle what it reports.',
      },
    ],
    technical: [
      {
        title: 'Agent harness',
        description:
          'Playwright-driven browser control with accessibility-tree state observation, so the agent reasons over semantic structure rather than raw pixels or brittle CSS selectors.',
      },
      {
        title: 'Oracles',
        description:
          'Product-specific correctness checks — visual regression, invariant assertions, and model-judged screen state — since "looks wrong" has to be defined per application.',
      },
      {
        title: 'Failure triage',
        description:
          'Automatic classification into genuine regression, environment fault, or flake, with confidence scores. Precision measured during shadow-run before the agents gate anything.',
      },
      {
        title: 'Artefacts',
        description:
          'Playwright traces, video, DOM snapshots and a minimal reproduction attached to every finding, wired into your issue tracker.',
      },
      {
        title: 'Cost control',
        description:
          'Token spend budgeted per run. Expensive exploratory passes scheduled nightly; cheap deterministic checks on every commit.',
      },
    ],
    tools: ['Playwright', 'Anthropic Claude', 'OpenAI', 'TypeScript', 'GitHub Actions', 'Docker'],
    faqs: [
      {
        question: 'Does this replace our existing tests?',
        answer:
          'No, and be careful of anyone who says it does. Your existing tests are fast and cheap and should stay on the critical paths. The AI testers cover the wider territory around them, where the bugs nobody predicted actually live.',
      },
      {
        question: 'Will it flood us with false alarms?',
        answer:
          'That is the main risk, so we handle it explicitly. There is a trial period where a person reviews everything it reports and we measure how often it is right. It only gets the power to block a release once that figure is good enough to trust.',
      },
      {
        question: 'What does it cost to run each month?',
        answer:
          'We set a budget from the start and design to it — typically by running the thorough, expensive passes overnight and the quick checks continuously. You get the projected monthly figure before we build anything.',
      },
      {
        question: 'Do we need developers to maintain it?',
        answer:
          'Far less than a conventional test suite, which is much of the point. Someone still needs to review what it reports, but that is triage rather than test maintenance.',
      },
    ],
    relatedProjects: ['documents-editor', 'techhirehub', 'analytics-dashboard'],
  },
  {
    slug: 'mcp-servers',
    icon: 'plug',
    group: 'ai',
    title: 'Connecting AI to Your Systems',
    technicalTitle: 'MCP Servers & Integrations',
    alsoCalled: ['MCP', 'Model Context Protocol', 'AI tool integration', 'LLM connectors'],
    shortTitle: 'Connect AI to Your Systems',
    blurb: 'Let AI tools use your internal systems, safely and with a full audit trail.',
    answer:
      'MCP is an open standard that lets AI assistants securely look things up in, and act on, a company’s own systems — its database, its ticketing, its internal tools. DevMations builds these connections so an assistant can be genuinely useful about your business without being handed the keys to everything.',
    problem:
      'Your AI assistant is impressive until someone asks it something about your own company, at which point it knows nothing. Connecting it to your internal systems is the obvious fix and the obvious risk — the careless version gives an AI broad access to your data and hopes for the best. What you need is a narrow, specific, logged connection.',
    outcomes: [
      'Staff can ask an assistant real questions about your business and get real answers',
      'It can only see what the person asking is already allowed to see',
      'Every single thing it accessed is logged, so a security review is straightforward',
    ],
    deliverables: [
      {
        title: 'A secure connection to your systems',
        description:
          'Built to an open standard, so it works with whichever AI assistant you use now and whichever you move to later.',
      },
      {
        title: 'Deliberately limited abilities',
        description:
          'We decide together what the assistant should be able to do — and, more importantly, what it must never be able to do. That conversation is the security design.',
      },
      {
        title: 'Permissions that follow the person',
        description:
          'The assistant can never show someone information they could not have looked up themselves. Your existing access rules carry straight through.',
      },
      {
        title: 'A complete record',
        description:
          'Every request logged with who asked, what was accessed and what came back. This is the evidence your security or compliance review will want.',
      },
      {
        title: 'Documentation your team can build on',
        description:
          'So adding the next capability does not require calling us back.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'We agree what it may and may not do',
        description:
          'Starting with the second half of that sentence. Deciding what is off-limits is quicker and safer than deciding what is allowed.',
      },
      {
        step: '02',
        title: 'We design how it asks',
        description:
          'And test that the AI uses it correctly, because a connection that gets misused is worse than none at all.',
      },
      {
        step: '03',
        title: 'We build it properly',
        description:
          'Access control, rate limits and logging built in from the start, not added after a security review asks for them.',
      },
      {
        step: '04',
        title: 'We deploy and document it',
        description:
          'Onto your infrastructure, with monitoring and a guide for extending it.',
      },
    ],
    technical: [
      {
        title: 'Spec-compliant MCP server',
        description:
          'Tools and resources exposed over the Model Context Protocol, so any MCP-capable client works without a bespoke integration per assistant.',
      },
      {
        title: 'Tool granularity',
        description:
          'Interfaces scoped to user intent rather than mirroring your schema. Tools with a dozen optional parameters produce malformed calls regardless of which model is driving.',
      },
      {
        title: 'Authorisation',
        description:
          'The caller’s identity carried through to each tool invocation and enforced at the data layer — not filtered after retrieval, which leaks through error messages and timing.',
      },
      {
        title: 'Audit logging',
        description:
          'Structured logs of caller, tool, arguments and result size, retained to your policy and queryable.',
      },
      {
        title: 'Deployment',
        description:
          'Containerised, health-checked and monitored, deployed into your own infrastructure rather than ours.',
      },
    ],
    tools: [
      'Model Context Protocol',
      'TypeScript',
      'Python',
      'Node.js',
      'PostgreSQL',
      'Docker',
      'OAuth 2.0',
      'AWS',
    ],
    faqs: [
      {
        question: 'Is it safe to connect AI to our internal data?',
        answer:
          'It is if the connection is built narrowly. The assistant only gets the specific abilities you approve, it can never see more than the person using it is allowed to see, and everything it does is recorded. The unsafe version is the shortcut where an AI is handed broad database access.',
      },
      {
        question: 'What if we change AI providers later?',
        answer:
          'That is the main reason to build it this way. Because it follows an open standard, the same connection works with a different assistant — you are not rebuilding the integration each time you switch.',
      },
      {
        question: 'Our systems have no modern interface. Can you still do it?',
        answer:
          'Usually yes — through the database, an internal service, or a purpose-built adapter. The harder question is normally permissions rather than access, and that is worth taking time over.',
      },
      {
        question: 'Could it delete or change something by accident?',
        answer:
          'Not unless you ask for that ability. By default we only expose actions that read information. Anything that changes data sits behind explicit confirmation and is logged.',
      },
    ],
    relatedProjects: ['devmations-ai', 'analytics-dashboard', 'upbeat-galileo'],
  },
  {
    slug: 'ai-content-evaluation',
    icon: 'fileCheck',
    group: 'ai',
    title: 'Checking AI-Written Content',
    technicalTitle: 'AI Content Evaluation',
    alsoCalled: ['content evals', 'LLM output grading', 'rubric scoring', 'annotation pipelines'],
    shortTitle: 'AI Content Quality',
    blurb: 'Check AI-written content at scale, against a standard that holds up to scrutiny.',
    answer:
      'AI content evaluation is the process of checking machine-generated writing against an agreed standard, using a mix of people and automated scoring, so quality can be tracked at a volume no team could read. DevMations designs the standard, builds the checking process, and proves the scores are consistent.',
    problem:
      'You are producing more content than anyone can read, and "it looks fine" is not a quality process. Two people on your team disagree about the same paragraph. You could have a machine check it, but you have no idea whether the machine shares your standards. And nobody can tell you whether this month was better than last.',
    outcomes: [
      'Content quality becomes a number you can track, not an argument',
      'You catch a drop in quality in days rather than after a customer mentions it',
      'Your team agrees on what good looks like — often for the first time',
    ],
    deliverables: [
      {
        title: 'A written standard',
        description:
          'What good content means for you specifically — the things being judged, the levels, and real examples of each. Detailed enough that two reviewers reach the same verdict.',
      },
      {
        title: 'Checking at full volume',
        description:
          'Automated scoring across everything you produce, with people reviewing a sample rather than trying to read all of it.',
      },
      {
        title: 'Proof the scores mean something',
        description:
          'We measure how often your reviewers agree with each other and with the automated scoring. A standard people cannot apply consistently is a broken standard, and this is how you find out.',
      },
      {
        title: 'A review tool people will use',
        description:
          'Fast, keyboard-driven, and designed so disagreements surface rather than hide.',
      },
      {
        title: 'Quality trends over time',
        description:
          'Split by content type and how it was produced, so when something changes you can tell what caused it.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'We define good, in writing',
        description:
          'With the people who own the content. This takes longer than it sounds and it is where most of the value is.',
      },
      {
        step: '02',
        title: 'We check your reviewers agree',
        description:
          'Several people grade the same sample separately. Where they disagree, the standard gets sharpened until they do not.',
      },
      {
        step: '03',
        title: 'We automate the scoring',
        description:
          'Built against the agreed standard and validated against how your own people scored the same material.',
      },
      {
        step: '04',
        title: 'We run it continuously',
        description:
          'With a sampled human check to keep it honest, and alerts when quality starts to slip.',
      },
    ],
    technical: [
      {
        title: 'Rubric engineering',
        description:
          'Multi-dimensional rubrics with anchored examples per level. Dimensions kept independent so scores remain interpretable rather than collapsing into a single vague impression.',
      },
      {
        title: 'Inter-rater agreement',
        description:
          'Cohen’s kappa or Krippendorff’s alpha depending on the scale, computed between human raters and between humans and the model grader. Reported, not assumed.',
      },
      {
        title: 'Sampling strategy',
        description:
          'Human audit sample sized from the observed agreement and your risk tolerance, rather than a round number picked because it felt right.',
      },
      {
        title: 'Annotation infrastructure',
        description:
          'Label Studio or Argilla, configured with your rubric and wired to a queryable store for trend analysis.',
      },
      {
        title: 'Per-language validation',
        description:
          'Grader quality validated separately for each language rather than extrapolated from English performance.',
      },
    ],
    tools: [
      'Anthropic Claude',
      'OpenAI',
      'Python',
      'Label Studio',
      'Argilla',
      'PostgreSQL',
      'Metabase',
    ],
    faqs: [
      {
        question: 'Do we still need people reviewing content?',
        answer:
          'Some, but far fewer — enough to spot-check that the automated scoring is still behaving. We work out the right sample size from the numbers rather than guessing.',
      },
      {
        question: 'Our reviewers disagree with each other constantly.',
        answer:
          'That is a useful finding rather than a problem with your people. It almost always means the standard is vague about one particular thing. Making that specific is usually the single most valuable result of the work.',
      },
      {
        question: 'Does this work for languages other than English?',
        answer:
          'Yes, with one caveat we take seriously: automated scoring quality varies by language, so we validate each one separately rather than assuming it works because it worked in English.',
      },
    ],
    relatedProjects: ['intellisummarizer', 'podcast-ai', 'devmations-ai'],
  },
  {
    slug: 'automation-testing',
    icon: 'flaskConical',
    group: 'ai',
    title: 'Automated Software Testing',
    technicalTitle: 'Automation Testing & QA Engineering',
    alsoCalled: ['test automation', 'Playwright', 'Cypress', 'CI testing', 'flaky test remediation'],
    shortTitle: 'Automated Testing',
    blurb: 'Automated checks that catch bugs before your customers do — and that your team trusts.',
    answer:
      'Test automation means software that checks your product still works, run automatically every time a developer changes something. DevMations builds these checks, fixes the ones that fail unpredictably, and makes them fast enough that your team waits for the result instead of ignoring it.',
    problem:
      'The checks take forty minutes, fail at random, and everyone has learned to just run them again rather than read what they said. At that point they have stopped protecting you and started costing you — and the team routes around them, which is how bugs reach customers.',
    outcomes: [
      'Bugs caught before release instead of by a customer',
      'Developers ship faster, because they are not waiting on or working around the tests',
      'A green result means something again',
    ],
    deliverables: [
      {
        title: 'Checks on the journeys that matter',
        description:
          'Signup, payment, whatever your business runs on — written clearly enough that whoever debugs one at 2am can follow it.',
      },
      {
        title: 'An end to the random failures',
        description:
          'We find out why tests fail unpredictably and fix the cause, rather than adding retries until the symptom is hidden.',
      },
      {
        title: 'A much faster run',
        description:
          'Split up and run in parallel so it finishes in minutes, not the better part of an hour.',
      },
      {
        title: 'Clean, repeatable test data',
        description:
          'So tests stop failing because of something a previous test left behind — a very common and very confusing cause of false alarms.',
      },
      {
        title: 'A deliberate coverage plan',
        description:
          'Effort spent where the business risk actually is, rather than wherever tests were easiest to write.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'We measure what you have',
        description:
          'How long it takes, how often it fails for no reason, and whether it covers what matters. The unreliability figure is usually the shock.',
      },
      {
        step: '02',
        title: 'We make it trustworthy',
        description:
          'Fix or delete the unreliable tests first. There is no point adding to a suite nobody believes.',
      },
      {
        step: '03',
        title: 'We extend the coverage',
        description:
          'Following the plan, into the places where a failure would actually cost you something.',
      },
      {
        step: '04',
        title: 'We make it fast',
        description:
          'Until the wait is short enough that people stop merging past it.',
      },
    ],
    technical: [
      {
        title: 'Suite architecture',
        description:
          'Playwright or Cypress with page objects kept thin, fixtures over shared setup, and assertions that fail with a message naming the actual problem.',
      },
      {
        title: 'Flake root-causing',
        description:
          'Per-test flake rate measured over repeated runs to find the small number causing most of the pain. Fixed at source — implicit waits, shared state, non-isolated data — rather than retried.',
      },
      {
        title: 'Pipeline performance',
        description:
          'Sharding, parallel workers, dependency and browser caching, and test-impact analysis so a small change does not trigger the full suite.',
      },
      {
        title: 'Test data',
        description:
          'Factory-generated, isolated per test, torn down deterministically. Database seeding via transactions or containers rather than shared fixtures.',
      },
      {
        title: 'Coverage strategy',
        description:
          'An explicit decision about what is verified at unit, integration and end-to-end level, so the slow brittle layer stays small.',
      },
    ],
    tools: [
      'Playwright',
      'Cypress',
      'Jest',
      'Vitest',
      'GitHub Actions',
      'Docker',
      'TypeScript',
      'Allure',
    ],
    faqs: [
      {
        question: 'Our tests fail randomly. Where do you start?',
        answer:
          'By measuring which ones do it and how often. It is almost always a small handful causing most of the disruption, and those get properly fixed or removed before anything new is added.',
      },
      {
        question: 'How much testing is the right amount?',
        answer:
          'Less of the slow kind than most teams assume. Full end-to-end checks are expensive and fragile, so they belong on the journeys that genuinely matter, with faster and cheaper checks doing the bulk of the work underneath.',
      },
      {
        question: 'Can you work with the setup we already have?',
        answer:
          'Yes. We work in GitHub Actions, GitLab, CircleCI and Jenkins, and we would rather improve what you have than move you onto something new for our convenience.',
      },
    ],
    relatedProjects: ['banking-app', 'i-conta', 'documents-editor'],
  },
  {
    slug: 'web-app-development',
    icon: 'layoutGrid',
    group: 'engineering',
    title: 'Web App Development',
    technicalTitle: 'Web Application Development',
    alsoCalled: ['Next.js', 'React', 'Node.js', 'full-stack development'],
    shortTitle: 'Web Apps',
    blurb: 'Web products built properly, with AI built in rather than bolted on.',
    answer:
      'DevMations designs and builds web applications end to end — the interface customers use, the system behind it, and the hosting it runs on. Because the same team builds AI systems, any AI features in your product are engineered rather than demonstrated.',
    problem:
      'An AI feature is not a product. Somebody still has to build the accounts, the payments, the permissions, the admin screens and the hosting around it. When the team doing that does not understand the AI part, the joins show exactly where your customers touch them.',
    outcomes: [
      'A product your customers can actually use, not a prototype',
      'You own it outright — code, documentation and deployment',
      'It stays fast and stable as you add customers',
    ],
    deliverables: [
      {
        title: 'The whole product',
        description:
          'Design, build, and launch — the customer-facing side, the system behind it, and getting it live. Not a stack of tickets for someone else to finish.',
      },
      {
        title: 'AI features that hold up',
        description:
          'Built by the team that also builds AI testing, so any AI in your product has measurable quality on the day it launches.',
      },
      {
        title: 'Payments that work correctly',
        description:
          'Stripe, PayPal and similar, handled properly including the awkward edge cases — the ones that quietly lose money when they are done carelessly.',
      },
      {
        title: 'Speed as a requirement',
        description:
          'Load time and responsiveness are things we sign up to before launch, not something to look at afterwards.',
      },
      {
        title: 'A clean handover',
        description:
          'Documentation, tests and instructions for running it, so your team or another developer can take over without depending on us.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'We agree the shape of it',
        description:
          'How the information is structured, before anything is built. Most expensive rebuilds trace back to a decision made in the first fortnight.',
      },
      {
        step: '02',
        title: 'We build in working pieces',
        description:
          'Each one usable and reviewable, so you see real software early rather than a demonstration at the end.',
      },
      {
        step: '03',
        title: 'We make it ready for real use',
        description:
          'Testing, error handling, monitoring and speed work before launch — not after the first thing goes wrong.',
      },
      {
        step: '04',
        title: 'We launch and hand over',
        description:
          'Live, documented, and explained to whoever is looking after it next.',
      },
    ],
    technical: [
      {
        title: 'Stack',
        description:
          'Next.js App Router with React Server Components, Node.js or NestJS services, PostgreSQL or MongoDB, Redis for caching and queues, deployed to Vercel or AWS.',
      },
      {
        title: 'Data modelling',
        description:
          'Schema and API contracts defined before implementation, with migrations versioned and reversible.',
      },
      {
        title: 'Payments',
        description:
          'Webhook idempotency, replay handling and reconciliation — the parts that fail silently and expensively when skipped.',
      },
      {
        title: 'Performance',
        description:
          'Core Web Vitals as acceptance criteria. Bundle budgets, image optimisation and query profiling as part of the build rather than a later pass.',
      },
      {
        title: 'Delivery',
        description:
          'CI/CD with preview deployments per pull request, automated tests as a merge gate, error tracking wired up from day one.',
      },
    ],
    tools: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'NestJS',
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'AWS',
      'Stripe',
      'Tailwind CSS',
    ],
    faqs: [
      {
        question: 'Can you work on something we already have?',
        answer:
          'Yes, and a good share of our work is exactly that. We start by reviewing what exists so the first change is informed rather than brave.',
      },
      {
        question: 'Can you take over a project another developer started?',
        answer:
          'Yes. Expect a short review phase first — inherited projects usually contain decisions nobody wrote down, and it is much cheaper to find those deliberately than during an incident.',
      },
      {
        question: 'What happens after launch?',
        answer:
          'Whatever suits you. We can hand over completely with documentation and training, or stay on for a support period. We deliberately do not build things that require us to stay.',
      },
      {
        question: 'Who owns the code?',
        answer:
          'You do, entirely, including anything AI-related we build. It lives in your accounts and your repositories from the start.',
      },
    ],
    relatedProjects: ['banking-app', 'documents-editor', 'i-conta', 'pricewatch'],
  },
  {
    slug: 'mobile-app-development',
    icon: 'smartphone',
    group: 'engineering',
    title: 'Mobile App Development',
    technicalTitle: 'Mobile Application Development',
    alsoCalled: ['React Native', 'iOS', 'Android', 'cross-platform apps'],
    shortTitle: 'Mobile Apps',
    blurb: 'iPhone and Android apps from one build, through app store review and out to customers.',
    answer:
      'DevMations builds mobile apps that run on both iPhone and Android from a single codebase, covering design, build, app store submission and updates. The work includes AI features where they belong, built to mobile constraints on speed and battery.',
    problem:
      'Mobile is unforgiving in ways the web is not. Poor signal, older phones, background behaviour, notification permissions, and an app store review that can reject you for something nobody warned you about. None of that appears in a design file, and all of it decides whether people keep the app.',
    outcomes: [
      'One app, both app stores, one build to maintain instead of two',
      'It works on a bad connection and an old phone, not just a new one on office wifi',
      'You can ship a fix without waiting days for app store approval',
    ],
    deliverables: [
      {
        title: 'One app for both platforms',
        description:
          'iPhone and Android from a single build, dropping to platform-specific code only where the phone genuinely requires it.',
      },
      {
        title: 'It works without signal',
        description:
          'Designed for patchy connections from the start, because losing connection is normal use rather than an error.',
      },
      {
        title: 'AI features sized for a phone',
        description:
          'Assistants, search and generation built with battery and waiting time treated as real constraints.',
      },
      {
        title: 'Getting through app store review',
        description:
          'Submission, store listings, and dealing with the rejections — which are common and rarely well explained.',
      },
      {
        title: 'Fast updates after launch',
        description:
          'Many fixes can go straight to users without another review queue, so a problem does not sit live for a week.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'We settle the constraints',
        description:
          'Which platforms, how old a phone you need to support, what the app needs from the device. These shape everything else.',
      },
      {
        step: '02',
        title: 'We build the core',
        description:
          'The main screens and flows, running on real phones from the first week rather than only on a developer’s simulator.',
      },
      {
        step: '03',
        title: 'We test it where it fails',
        description:
          'Older devices and poor connections — where apps actually break, and where testing is usually skipped.',
      },
      {
        step: '04',
        title: 'We ship it',
        description:
          'App store submission, update process, and monitoring so you learn about crashes before your reviews do.',
      },
    ],
    technical: [
      {
        title: 'Stack',
        description:
          'React Native with Expo where its constraints fit, native modules where they do not. TypeScript throughout.',
      },
      {
        title: 'Offline and sync',
        description:
          'Local persistence with explicit conflict resolution, and an outbox for writes made without connectivity.',
      },
      {
        title: 'Performance',
        description:
          'Profiled on low-end hardware. List virtualisation, image caching and bridge traffic minimised where it matters.',
      },
      {
        title: 'Release pipeline',
        description:
          'Fastlane for signing and submission, over-the-air updates for JavaScript-level fixes, Sentry for crash reporting.',
      },
      {
        title: 'Backend',
        description:
          'API designed for mobile constraints — payload size, retry semantics and pagination — since most mobile performance problems are API design problems.',
      },
    ],
    tools: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'Node.js', 'Fastlane', 'Sentry'],
    faqs: [
      {
        question: 'Should we build one app or two separate ones?',
        answer:
          'One, for most products — it is roughly half the cost to build and to maintain, and users cannot tell. Two separate native apps earn their cost when the product is built around something heavy like continuous camera processing or live audio.',
      },
      {
        question: 'Whose app store accounts do we publish under?',
        answer:
          'Yours, and we would push back if you suggested otherwise. Your company should own the store listings, the reviews and the signing keys.',
      },
      {
        question: 'Do you build the system behind the app too?',
        answer:
          'Yes. Most mobile problems turn out to be problems with the system feeding the app, so it helps considerably that the same team owns both.',
      },
      {
        question: 'How long does app store approval take?',
        answer:
          'Usually a few days once the submission is correct, but first submissions are frequently rejected for reasons that are not obvious. We handle that back-and-forth and build the timeline around it.',
      },
    ],
    relatedProjects: ['banking-app', 'healthcare-app', 'events-app', 'hardcore-villani'],
  },
];

export const aiServices = services.filter((s) => s.group === 'ai');
export const engineeringServices = services.filter((s) => s.group === 'engineering');

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const serviceGroupLabels: Record<ServiceGroup, string> = {
  ai: 'AI & Automation',
  engineering: 'Product Engineering',
};
