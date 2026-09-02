import { test, expect, type Page } from '@playwright/test';

/**
 * Smoke suite.
 *
 * An agency that sells test automation should have tests. These are also the
 * checks that caught real defects during the rebuild: content left invisible
 * without JavaScript, and Markdown surfaces leaking HTML.
 */

const pages = [
  { path: '/', heading: /Ship AI you can/i },
  { path: '/services', heading: /What we build/i },
  { path: '/services/ai-agents-rag', heading: /AI Assistants & Agents/i },
  { path: '/services/mobile-app-development', heading: /Mobile App Development/i },
  { path: '/work', heading: /Things we shipped/i },
  { path: '/about', heading: /AI engineering agency/i },
  { path: '/insights', heading: /What we have learned/i },
  { path: '/glossary', heading: /vocabulary/i },
  { path: '/glossary/eval-harness', heading: /Eval harness/i },
  { path: '/careers', heading: /Work on AI systems/i },
  { path: '/contact', heading: /Tell us what you are trying to do/i },
];

test.describe('pages render', () => {
  for (const { path, heading } of pages) {
    test(`${path} returns 200 with its h1 and no console errors`, async ({ page }) => {
      const errors: string[] = [];
      page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
      page.on('pageerror', (e) => errors.push(e.message));

      const res = await page.goto(path);
      expect(res?.status()).toBe(200);
      await expect(page.locator('h1').first()).toHaveText(heading);
      expect(errors, `console errors on ${path}`).toEqual([]);
    });
  }
});

test('unknown routes 404 rather than erroring', async ({ page }) => {
  const res = await page.goto('/no-such-page');
  expect(res?.status()).toBe(404);
  await expect(page.locator('h1')).toContainText('not here');
});

test.describe('responsive', () => {
  test('no horizontal overflow at 390px', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    for (const { path } of pages) {
      await page.goto(path);
      const { scrollWidth, clientWidth } = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
      }));
      expect(scrollWidth, `${path} overflows horizontally`).toBeLessThanOrEqual(clientWidth + 1);
    }
  });
});

test.describe('content is visible without JavaScript', () => {
  // This is a regression test for a real bug: the original scroll reveal used
  // an IntersectionObserver with initial opacity 0, so with JS disabled every
  // card stayed invisible -- including to crawlers.
  test.use({ javaScriptEnabled: false });

  test('service cards render at full opacity with JS off', async ({ page }) => {
    await page.goto('/');
    // Structural rather than text-matching: renaming a service must not be
    // able to silently disable this regression check.
    const result = await page.evaluate(() => {
      const reveals = [...document.querySelectorAll('#services .reveal')];
      return {
        count: reveals.length,
        opacities: [...new Set(reveals.map((el) => getComputedStyle(el).opacity))],
      };
    });
    expect(result.count, 'service cards should be present in the served HTML').toBeGreaterThan(4);
    expect(result.opacities).toEqual(['1']);
  });
});

test.describe('navigation', () => {
  test('services mega-menu opens, closes on Escape, and links out', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');

    const trigger = page.getByRole('button', { name: 'Services' });
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');

    await trigger.click();
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');
    await expect(page.getByRole('link', { name: /Testing Your AI/ }).first()).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });

  test('mobile sheet opens and closes', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');

    await page.getByRole('button', { name: 'Open menu' }).click();
    await expect(page.getByRole('button', { name: 'Close menu' })).toBeVisible();

    await page.getByRole('button', { name: 'Close menu' }).click();
    await expect(page.getByRole('button', { name: 'Close menu' })).toBeHidden();
  });
});

test.describe('machine-readable surfaces', () => {
  const plainText = ['/llms.txt', '/llms-full.txt', '/services/ai-evals/md', '/glossary/mcp/md'];

  for (const path of plainText) {
    test(`${path} serves clean plain text`, async ({ request }) => {
      const res = await request.get(path);
      expect(res.status()).toBe(200);
      expect(res.headers()['content-type']).toContain('text/plain');

      const body = await res.text();
      expect(body.length).toBeGreaterThan(200);
      expect(body, 'markdown surfaces must not contain HTML').not.toMatch(
        /<\/?(div|span|section|article|h1|p)\b/i,
      );
    });
  }

  test('the markdown twin matches the rendered page', async ({ page, request }) => {
    // Guards against the two surfaces drifting apart -- they are generated
    // from the same source object and must stay in agreement.
    const md = await (await request.get('/services/ai-evals/md')).text();
    await page.goto('/services/ai-evals');
    const answer = await page.locator('h1 + p, h1 ~ p').first().textContent();
    expect(md).toContain((answer ?? '').trim().slice(0, 60));
  });

  test('robots.txt names the AI crawlers', async ({ request }) => {
    const body = await (await request.get('/robots.txt')).text();
    for (const bot of ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'OAI-SearchBot', 'Google-Extended']) {
      expect(body, `${bot} must be explicitly allowed`).toContain(bot);
    }
    expect(body).toContain('Sitemap');
  });

  test('sitemap and feed are well-formed', async ({ request }) => {
    const sitemap = await (await request.get('/sitemap.xml')).text();
    expect(sitemap).toContain('<urlset');
    expect(sitemap).toContain('/services/ai-agents-rag');
    expect(sitemap).toContain('/glossary/eval-harness');

    const feed = await (await request.get('/feed.xml')).text();
    expect(feed).toContain('<rss');
    expect(feed).toContain('<item>');
  });
});

test.describe('structured data', () => {
  test('every page type emits valid JSON-LD', async ({ page }) => {
    const expectations: [string, string[]][] = [
      ['/', ['ProfessionalService', 'WebSite', 'FAQPage']],
      ['/services/ai-evals', ['Service', 'FAQPage', 'BreadcrumbList']],
      ['/glossary/eval-harness', ['DefinedTerm', 'BreadcrumbList']],
      ['/insights/fifty-test-cases', ['Article', 'BreadcrumbList']],
      ['/careers/ai-engineer', ['JobPosting', 'BreadcrumbList']],
    ];

    for (const [path, types] of expectations) {
      await page.goto(path);
      const blocks = await readJsonLd(page);
      const found = blocks.map((b) => b['@type']);
      for (const type of types) {
        expect(found, `${path} should emit ${type}`).toContain(type);
      }
    }
  });
});

test.describe('contact form', () => {
  test('rejects an empty submission client-side', async ({ page }) => {
    await page.goto('/contact');
    await page.getByRole('button', { name: 'Send it' }).click();
    await expect(page.getByText('Please give us a name we can use.')).toBeVisible();
  });

  test('rejects an invalid payload server-side, bypassing the form', async ({ request }) => {
    // The client validation is a convenience; this is the check that matters.
    const res = await request.post('/api/contact', {
      data: { name: 'x', email: 'not-an-email', message: 'short' },
    });
    expect(res.status()).toBe(400);
    const body = await res.json();
    expect(body.ok).toBe(false);
    expect(body.issues.length).toBeGreaterThan(0);
  });

  test('silently accepts and drops honeypot submissions', async ({ request }) => {
    const res = await request.post('/api/contact', {
      data: {
        name: 'Spam Bot',
        email: 'bot@example.com',
        message: 'A message long enough to pass the minimum length check.',
        website: 'http://spam.example',
      },
    });
    // 200 so the bot learns nothing, but nothing is sent.
    expect(res.status()).toBe(200);
  });
});

test.describe('legacy URLs', () => {
  const redirects: [string, string][] = [
    ['/about-us', '/about'],
    ['/contact-us', '/contact'],
    ['/blogs', '/insights'],
    ['/career', '/careers'],
    ['/web-app-development', '/services/web-app-development'],
    ['/mobile-app-development', '/services/mobile-app-development'],
    ['/ai-and-machine-learning-solutions', '/services/ai-agents-rag'],
    ['/wordpress-development', '/services/web-app-development'],
    ['/blockchain-development', '/services'],
  ];

  for (const [from, to] of redirects) {
    test(`${from} redirects permanently to ${to}`, async ({ request }) => {
      const res = await request.get(from, { maxRedirects: 0 });
      expect(res.status()).toBe(308);
      expect(res.headers()['location']).toContain(to);
    });
  }
});

async function readJsonLd(page: Page) {
  const raw = await page.locator('script[type="application/ld+json"]').allTextContents();
  return raw.map((text) => JSON.parse(text) as Record<string, string>);
}
