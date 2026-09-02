import type { FullConfig } from '@playwright/test';

/**
 * Waits until the server is genuinely serving before any test runs.
 *
 * Playwright's `webServer.url` check only waits for the root route to answer.
 * On a cold boot the request-only tests -- which fire immediately, without a
 * page load to absorb the delay -- could reach a route handler before it was
 * ready, producing an intermittent failure on two tests out of thirty-six.
 *
 * Measured at roughly one bad run in five, always on the run that built the
 * app first. Fixed here at the source rather than papered over with retries:
 * adding a retry would have hidden the race instead of removing it.
 */
async function globalSetup(config: FullConfig) {
  const baseURL = config.projects[0]?.use?.baseURL ?? 'http://localhost:3000';

  // One route of each kind the suite exercises: a page, a route handler, and
  // a redirect. If all three answer, the server is warm.
  const probes = ['/', '/llms.txt', '/about-us'];
  const deadline = Date.now() + 60_000;

  for (const probe of probes) {
    for (;;) {
      try {
        const res = await fetch(new URL(probe, baseURL), { redirect: 'manual' });
        if (res.status > 0 && res.status < 500) break;
      } catch {
        // Server not up yet.
      }
      if (Date.now() > deadline) {
        throw new Error(`Server never became ready at ${baseURL}${probe}`);
      }
      await new Promise((resolve) => setTimeout(resolve, 250));
    }
  }
}

export default globalSetup;
