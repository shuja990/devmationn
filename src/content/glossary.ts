/**
 * The glossary.
 *
 * This is the cheapest reliable route into AI answer engines for a small
 * site: definition pages are exactly what gets quoted, they carry
 * `DefinedTerm` schema, and they age well. Each `definition` is written to
 * stand alone -- lifted out of the page with no surrounding context, it must
 * still be a correct, complete sentence.
 */

export type GlossaryTerm = {
  slug: string;
  term: string;
  /** The extractable one-or-two-sentence definition. */
  definition: string;
  /** Longer context, rendered under the definition. */
  detail: string;
  category: 'Evaluation' | 'Agents' | 'Testing' | 'Infrastructure';
  related: string[];
};

export const glossary: GlossaryTerm[] = [
  {
    slug: 'eval-harness',
    term: 'Eval harness',
    definition:
      'An eval harness is the test infrastructure for a non-deterministic AI system: a dataset of representative inputs, a method for scoring each output, and a threshold that determines whether a run passes or fails.',
    detail:
      'Unlike a traditional test suite, an eval harness cannot rely on exact output matching, because the same input produces different text on each run. It therefore scores outputs against a rubric — structurally, by exact match on constrained fields, by a model judge, or by human review — and reports an aggregate pass rate. The harness becomes useful the moment it runs in CI and can block a merge.',
    category: 'Evaluation',
    related: ['golden-dataset', 'llm-as-judge', 'regression-gate'],
  },
  {
    slug: 'llm-as-judge',
    term: 'LLM-as-judge',
    definition:
      'LLM-as-judge is an evaluation technique where one language model scores another model’s output against a written rubric, replacing human graders for tasks where output quality cannot be checked by exact match.',
    detail:
      'It is cheap and scales, which is why it is popular, and it is untrustworthy until calibrated. Calibration means measuring how often the judge agrees with human labels on a sample of the same data. A judge with poor agreement is not producing a quality score; it is producing a number that looks like one. Report the agreement figure alongside any judge-derived metric.',
    category: 'Evaluation',
    related: ['eval-harness', 'inter-rater-agreement', 'rubric'],
  },
  {
    slug: 'golden-dataset',
    term: 'Golden dataset',
    definition:
      'A golden dataset is a curated set of inputs paired with known-correct outputs, used as the fixed reference against which an AI system’s quality is measured over time.',
    detail:
      'The value is in the curation, not the size. Fifty cases drawn from real traffic and real reported failures catch more regressions than a thousand synthetic ones, and can be assembled in days. A golden set should grow every time a new failure mode is found in production — that is what stops the same bug shipping twice.',
    category: 'Evaluation',
    related: ['eval-harness', 'regression-gate'],
  },
  {
    slug: 'regression-gate',
    term: 'Regression gate',
    definition:
      'A regression gate is a CI check that fails a build when an evaluation suite’s pass rate drops below a defined threshold, preventing a prompt or model change from shipping a quality regression.',
    detail:
      'The gate is what converts evals from a reporting exercise into a control. Teams that run evals manually stop running them within a month. Teams whose merge is blocked by a failing suite keep the suite healthy, because it is now in the path of everything they do.',
    category: 'Evaluation',
    related: ['eval-harness', 'golden-dataset'],
  },
  {
    slug: 'rubric',
    term: 'Rubric',
    definition:
      'A rubric is a written, testable definition of output quality — the dimensions being judged, the scale for each, and worked examples at each level — used so that two different graders reach the same score.',
    detail:
      'Writing the rubric is usually the highest-value part of an evaluation engagement, because it is the first time a team is forced to agree on what "good" means. Persistent disagreement between graders is not a people problem; it is a sign the rubric is ambiguous on a specific dimension, and fixing that ambiguity is the deliverable.',
    category: 'Evaluation',
    related: ['inter-rater-agreement', 'llm-as-judge'],
  },
  {
    slug: 'inter-rater-agreement',
    term: 'Inter-rater agreement',
    definition:
      'Inter-rater agreement measures how consistently two or more independent graders assign the same score to the same content, and is the standard check on whether a quality rubric is applied reliably.',
    detail:
      'It is reported with statistics such as Cohen’s kappa or Krippendorff’s alpha, which correct for agreement that would occur by chance. Low agreement invalidates every downstream number: if humans cannot apply the rubric consistently, a model grader trained or validated against it inherits the same noise.',
    category: 'Evaluation',
    related: ['rubric', 'llm-as-judge'],
  },
  {
    slug: 'agentic-rag',
    term: 'Agentic RAG',
    definition:
      'Agentic RAG is a retrieval-augmented generation architecture in which the model decides when and what to retrieve — issuing its own queries, evaluating results, and retrieving again — rather than receiving a single fixed retrieval before generating.',
    detail:
      'It handles questions that plain RAG cannot: multi-hop reasoning, queries needing several distinct lookups, and cases where the first retrieval returns nothing useful. The cost is latency and unpredictability, since the number of retrieval rounds varies per request. Step limits and per-request budgets are not optional.',
    category: 'Agents',
    related: ['rag', 'tool-use', 'context-window'],
  },
  {
    slug: 'rag',
    term: 'RAG (retrieval-augmented generation)',
    definition:
      'Retrieval-augmented generation is a technique where relevant documents are fetched from an external store and inserted into a language model’s prompt, so the model answers from that specific source material rather than from its training data alone.',
    detail:
      'RAG is the standard way to make a model answer about private or current information. Most RAG failures are retrieval failures, not generation failures: the model answered faithfully from the wrong passage. This is why retrieval quality should be measured separately from answer quality — otherwise you tune the prompt to fix a chunking problem.',
    category: 'Agents',
    related: ['agentic-rag', 'vector-database', 'chunking'],
  },
  {
    slug: 'chunking',
    term: 'Chunking',
    definition:
      'Chunking is the process of splitting source documents into smaller passages for embedding and retrieval, and the chunk size and boundary strategy largely determine how well a RAG system can find relevant information.',
    detail:
      'Chunks that are too small lose the context needed to answer; chunks that are too large dilute the embedding and retrieve imprecisely. Splitting on semantic boundaries — sections, headings, paragraphs — generally beats fixed character counts. It is the single most common root cause of disappointing RAG performance.',
    category: 'Agents',
    related: ['rag', 'vector-database'],
  },
  {
    slug: 'vector-database',
    term: 'Vector database',
    definition:
      'A vector database stores text as numerical embeddings and retrieves entries by semantic similarity rather than keyword match, forming the retrieval layer of most RAG systems.',
    detail:
      'Options range from dedicated services such as Pinecone to extensions on databases you already run, such as pgvector on PostgreSQL. For most applications the choice matters far less than the chunking and re-ranking strategy around it, and running one fewer piece of infrastructure is worth a great deal.',
    category: 'Infrastructure',
    related: ['rag', 'chunking', 'hybrid-search'],
  },
  {
    slug: 'hybrid-search',
    term: 'Hybrid search',
    definition:
      'Hybrid search combines semantic vector similarity with traditional keyword search, then merges the two result sets, so that a retrieval system handles both conceptual questions and exact terms like product codes or error strings.',
    detail:
      'Pure vector search is weak precisely where exactness matters — part numbers, function names, proper nouns. Hybrid retrieval with a re-ranking pass over the merged candidates is usually the single largest quality improvement available to a struggling RAG system, and it is measurable on a golden set.',
    category: 'Agents',
    related: ['rag', 'vector-database'],
  },
  {
    slug: 'tool-use',
    term: 'Tool use',
    definition:
      'Tool use is a language model’s ability to call defined external functions — querying a database, sending a request, performing a calculation — by emitting a structured call that an application executes and returns results for.',
    detail:
      'The reliability of tool use depends far more on schema design than on model choice. Tools scoped to user intent, with clear names and few required arguments, are called correctly. Tools that mirror a database schema, or that take a dozen optional parameters, produce malformed calls no matter which model is driving.',
    category: 'Agents',
    related: ['mcp', 'agentic-rag', 'function-calling'],
  },
  {
    slug: 'function-calling',
    term: 'Function calling',
    definition:
      'Function calling is the mechanism by which a language model returns a structured, schema-conforming request to invoke a named function, instead of returning free text.',
    detail:
      'It is the foundation of agent behaviour and of any reliable structured output. Validation still belongs on the application side: a model can emit a call that satisfies the schema and is still semantically wrong, so arguments should be checked before anything irreversible happens.',
    category: 'Agents',
    related: ['tool-use', 'mcp'],
  },
  {
    slug: 'mcp',
    term: 'MCP (Model Context Protocol)',
    definition:
      'The Model Context Protocol is an open standard that defines how AI applications connect to external tools and data sources through a server interface, so one integration works across any MCP-compatible client.',
    detail:
      'Before MCP, each assistant needed its own bespoke integration with each internal system. An MCP server exposes tools and resources once, against a defined protocol, and any compatible client can use it. The engineering questions that matter are authorisation scoping, tool granularity and audit logging — not the transport.',
    category: 'Infrastructure',
    related: ['mcp-server', 'tool-use'],
  },
  {
    slug: 'mcp-server',
    term: 'MCP server',
    definition:
      'An MCP server is a program that exposes a specific system — a database, an API, a document store — to AI clients as a set of typed tools and resources defined by the Model Context Protocol.',
    detail:
      'A well-built MCP server carries per-user authorisation through to each tool call, so the assistant can never read what the person driving it could not. It also logs every call with caller, arguments and result size, which is the record a security review will ask for.',
    category: 'Infrastructure',
    related: ['mcp', 'tool-use'],
  },
  {
    slug: 'qa-agent',
    term: 'QA agent',
    definition:
      'A QA agent is an LLM-driven tester that explores an application by reading its interface, deciding what to try next, and reporting what appears broken — covering exploratory testing that fixed scripts cannot.',
    detail:
      'It complements rather than replaces a scripted suite. Scripted tests are fast, cheap and deterministic and belong on critical paths; agents cover the surrounding space where the unimagined bugs live. Their precision must be measured during a shadow-run period before they are allowed to gate a release.',
    category: 'Testing',
    related: ['flake-rate', 'self-healing-tests', 'eval-harness'],
  },
  {
    slug: 'flake-rate',
    term: 'Flake rate',
    definition:
      'Flake rate is the proportion of test runs that fail intermittently without any change to the code under test, and it is the primary measure of whether a test suite can be trusted.',
    detail:
      'Above roughly one percent, engineers begin re-running failures instead of reading them, and the suite stops functioning as a safety net. Flake is nearly always caused by timing assumptions, shared state between tests, or test data that is not isolated — and it is fixable, though usually by deleting or rewriting rather than by adding retries.',
    category: 'Testing',
    related: ['self-healing-tests', 'qa-agent'],
  },
  {
    slug: 'self-healing-tests',
    term: 'Self-healing tests',
    definition:
      'Self-healing tests use resilient element location strategies — and often a model to resolve ambiguity — so that an automated test continues to work when the underlying markup changes but the user-facing behaviour does not.',
    detail:
      'The goal is to remove the largest maintenance cost in UI automation: a class rename breaking fifty tests that were otherwise correct. The risk to manage is a test that heals itself into passing against genuinely broken behaviour, so healing events should be logged and reviewed rather than silently applied.',
    category: 'Testing',
    related: ['flake-rate', 'qa-agent'],
  },
  {
    slug: 'context-window',
    term: 'Context window',
    definition:
      'A context window is the maximum amount of text, measured in tokens, that a language model can consider in a single request, covering the prompt, any retrieved documents, the conversation history and the generated response together.',
    detail:
      'A large window removes a hard limit but does not remove the need for good retrieval: models attend unevenly across long contexts, and cost scales with what you send. Retrieving fewer, better passages usually outperforms filling the window, and it is cheaper.',
    category: 'Agents',
    related: ['rag', 'chunking', 'prompt-injection'],
  },
  {
    slug: 'prompt-injection',
    term: 'Prompt injection',
    definition:
      'Prompt injection is an attack in which instructions embedded in content the model reads — a retrieved document, a web page, a user message — cause it to ignore its original instructions and act on the injected ones instead.',
    detail:
      'It is the defining security problem of retrieval and agent systems, because retrieved content is untrusted input that arrives in the same channel as instructions. There is no complete fix; mitigation means treating retrieved text as data, constraining what tools can do, and testing injection resistance as an explicit eval category rather than assuming it.',
    category: 'Agents',
    related: ['context-window', 'tool-use', 'eval-harness'],
  },
];

export function getTerm(slug: string) {
  return glossary.find((t) => t.slug === slug);
}

export const glossaryCategories = [
  'Evaluation',
  'Agents',
  'Testing',
  'Infrastructure',
] as const;
