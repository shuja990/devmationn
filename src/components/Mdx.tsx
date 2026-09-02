import { compile, run } from '@mdx-js/mdx';
import * as runtime from 'react/jsx-runtime';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';

import { EvalScorecard } from '@/components/blocks/EvalScorecard';
import { TerminalBlock } from '@/components/blocks/TerminalBlock';
import { AgentFlow } from '@/components/blocks/AgentFlow';
import { AgentWorkflow } from '@/components/blocks/AgentWorkflow';
import { AnswerComparison } from '@/components/blocks/AnswerComparison';
import { Badge } from '@/components/ui';

/**
 * MDX body renderer.
 *
 * Compiles and runs MDX directly via @mdx-js/mdx rather than through
 * next-mdx-remote. That is not a preference -- next-mdx-remote@6 silently
 * drops every non-string JSX attribute in the RSC path, so
 * `<EvalScorecard rows={[...]} />` arrived with `rows` undefined and no
 * warning at all. Verified by instrumenting a component during a build:
 * `simple="hello"` came through, `num={42}` and `arr={[...]}` did not.
 *
 * Compiling here means expression props work, one dependency is gone, and a
 * malformed expression fails the build loudly instead of rendering a broken
 * component.
 *
 * This runs at build time inside a server component, so the `new Function`
 * used by `run()` never reaches a browser, and the source is our own content
 * rather than user input.
 */

const components = {
  EvalScorecard,
  TerminalBlock,
  AgentFlow,
  AgentWorkflow,
  AnswerComparison,
  Badge,
};

export async function Mdx({ source }: { source: string }) {
  const compiled = String(
    await compile(source, {
      outputFormat: 'function-body',
      development: false,
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [rehypePrettyCode as any, { theme: 'github-dark-default', keepBackground: false }],
      ],
    }),
  );

  const { default: Content } = await run(compiled, {
    ...runtime,
    baseUrl: import.meta.url,
  });

  return <Content components={components} />;
}
