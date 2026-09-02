import { defineConfig, devices } from '@playwright/test';

/**
 * Tests run against a production build on their OWN port.
 *
 * Port 3100, not 3000, and deliberately so: with `reuseExistingServer` on the
 * default port, Playwright would adopt whatever was already there -- usually a
 * dev server. Dev compiles routes on demand, so the request-only tests (which
 * fire instantly, with no page load to absorb the delay) intermittently beat
 * the compiler and failed. Measured at roughly one bad run in five.
 *
 * Isolating the port means these tests always exercise a real production
 * build, and never collide with a dev server someone has open.
 */
const PORT = Number(process.env.TEST_PORT ?? 3100);
const baseURL = process.env.BASE_URL ?? `http://localhost:${PORT}`;

export default defineConfig({
  testDir: './tests',
  // Waits for the server to be genuinely warm; see the file for why.
  globalSetup: './tests/global-setup.ts',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  reporter: process.env.CI ? [['github'], ['list']] : 'list',
  use: {
    baseURL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: process.env.BASE_URL
    ? undefined
    : {
        command: `npm run build && npx next start --port ${PORT}`,
        url: baseURL,
        reuseExistingServer: !process.env.CI,
        timeout: 240_000,
      },
});
