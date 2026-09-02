# CONTENT-TODO — launch gate

**Do not point `devmations.com` at this build until every box below is ticked or
consciously accepted.**

Every item here is a claim that is **invented, illustrative, or unverified**. The site
reads as finished, which is exactly why this file exists: a plausible fake statistic is
more dangerous than an obvious placeholder, because nobody notices it before a client
does.

Nothing in `src/content/projects.ts` is on this list. All 34 projects are real, every
link is a live deployment, and every screenshot was taken from the running site.

---

## 1. Case studies — highest risk

Both case studies are structurally real (the approach is what we would actually do) but
the **client, the numbers and the specifics are invented**. Each currently opens with a
visible placeholder warning. Either replace with a real engagement or delete the file.

- [ ] `src/content/case-studies/support-assistant-evals.mdx`
  - [ ] Client identity — currently `PLACEHOLDER — B2B SaaS company`
  - [ ] Headline results: "Wrong answers down 71%", "Cost per conversation down 34%",
        "380 questions", "2 weeks to first score"
  - [ ] Both `<EvalScorecard>` figures (baseline 41–91%, after 88–99%)
  - [ ] "agreed on only about two-thirds" inter-rater figure
  - [ ] Remove the placeholder blockquote at the top once real
- [ ] `src/content/case-studies/flaky-suite-rescue.mdx`
  - [ ] Client identity — currently `PLACEHOLDER — marketplace platform`
  - [ ] Headline results: "41 min → 7 min", "19% → 0.4%", "84 tests deleted",
        "3× bugs caught"
  - [ ] The `<TerminalBlock>` flake analysis figures
  - [ ] "Three times as many genuine regressions ... following quarter"
  - [ ] Remove the placeholder blockquote at the top once real

**If you have no real case study yet:** delete both files. The Work page renders
correctly with zero case studies, and the 34 real projects still show. An empty case
study section is better than a fabricated one.

## 2. Homepage figures

- [ ] `src/app/page.tsx` — `evalRows`: the five scores (96 / 94 / 99 / 88 / 92) shown in
      the "for engineers" disclosure. Illustrative.
- [ ] `src/app/page.tsx` — `terminalLines`: the CI output, including `94.2% overall`.
      Illustrative. Also invents a CLI name, `npx devmations-evals`, which does not exist.
- [ ] `src/components/blocks/AnswerComparison.tsx` — the returns-policy exchange is an
      illustration, not a transcript. Reads as generic; low risk, but it is not real.
- [ ] `src/components/blocks/AgentWorkflow.tsx` — the Lisbon example mirrors LifePilot's
      real behaviour. Verify it still matches before launch.

## 3. Claims about the business

Check each of these is actually true, and change it if not:

- [ ] "We reply within one working day" — appears on `/contact` twice and in the form's
      success state. This is a promise; only keep it if you will meet it.
- [ ] "No sales sequence / you will not be added to a mailing list" (`/contact`)
- [ ] "There is no long contract to get started" (homepage FAQ)
- [ ] "Mentors 30+ engineers" style claims — **not used**, deliberately. The site never
      references any individual.
- [ ] `/about`: "small senior team", "UTC+5 overlap with European and North American
      mornings", "we sign NDAs and work under client contracts"
- [ ] `hello@devmations.com` — confirm this mailbox exists and is monitored
      (`src/content/site.ts`)
- [ ] LinkedIn URL `linkedin.com/company/devmations` — **unverified, likely does not
      exist.** Fix or remove (`src/content/site.ts`)

## 4. Careers

- [ ] `src/content/roles.ts` — all three roles are plausible but **not confirmed
      openings**. Set `open: false` on any you are not hiring for, or delete them. The
      careers page renders an honest empty state with zero open roles.
- [ ] Posted dates are all `2026-08-01`. Update to real dates — these feed `JobPosting`
      structured data, and Google shows the date to candidates.

## 5. Not content, but blocks launch

- [ ] **Trademark clearance on the logo.** The mark was deliberately moved off a
      checkmark because that space is contested in software testing (Checkmarx, Checkly).
      A proper clearance search — design codes, EUIPO, common-law — has **not** been
      done. Required before filing anything or printing anything.
- [ ] **Resend DNS.** `RESEND_API_KEY` and a verified sending domain on
      `devmations.com`. Until then the form falls back to Resend's sandbox sender and
      logs a warning; with no key at all it returns a 503 telling the user to email
      directly.
- [ ] **Cloudflare Turnstile keys.** Without `TURNSTILE_SECRET_KEY` the bot check is
      skipped (and logs a warning). The honeypot still runs.
- [ ] Set `NEXT_PUBLIC_SITE_URL` in the Vercel project.

---

## What is already verified

Not on the list, and safe:

- All 34 portfolio projects, links and screenshots
- The glossary — 20 terms, definitions written to be technically correct
- Both blog posts — argument and technique, no invented client numbers
- The 8 service descriptions — capability claims, no fabricated metrics
- Islamabad, Pakistan location
- GitHub URL `github.com/shuja990`
