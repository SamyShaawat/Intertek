# OpenWolf

@.wolf/OPENWOLF.md

This project uses OpenWolf for context management. Read and follow .wolf/OPENWOLF.md every session. Check .wolf/cerebrum.md before generating code. Check .wolf/anatomy.md before reading files.


# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Dev server (http://localhost:4700)
npx nx serve intertek

# Production build (outputs to apps/intertek/dist/)
npx nx build intertek

# Build with subdirectory base path
BASE_PATH=/intertek/ npx nx build intertek

# Run unit tests (Vitest + jsdom)
npx nx test intertek

# Run a single test file
npx nx test intertek --testFile=apps/intertek/src/app/app.spec.tsx

# Run E2E tests (Playwright)
npx nx e2e intertek-e2e

# Lint
npx nx lint intertek

# Type check
npx nx typecheck intertek
```

## Architecture

This is an **Nx monorepo** with a single React 19 SPA (`apps/intertek`) and its Playwright E2E project (`apps/intertek-e2e`). There are no shared libraries yet — all code lives in the one app.

**Stack:** React 19, React Router v6 (BrowserRouter), TypeScript, Vite 8, TailwindCSS v4, Vitest, Playwright.

### App structure

- `apps/intertek/src/main.tsx` — entry point; wraps `<App>` in `BrowserRouter`
- `apps/intertek/src/app/app.tsx` — monolithic file containing the router (`<Routes>`), all four view components (`DashboardView`, `InspectionsView`, `LabsView`, `RequestAuditView`), the sidebar/mobile nav, and all mock data
- `apps/intertek/src/app/hooks/useSEO.ts` — imperative hook that updates `document.title` and meta tags per route
- `apps/intertek/src/styles.css` — TailwindCSS v4 `@import "tailwindcss"` entry; defines CSS custom properties for brand tokens (`--color-brand-yellow: #ffc72c`) and custom animation `animate-pulse-glow`

### Routing

Four client-side routes, all defined in `app.tsx`:

| Path | View |
|------|------|
| `/` | DashboardView |
| `/inspections` | InspectionsView |
| `/labs` | LabsView |
| `/request-audit` | RequestAuditView |

### Data

All data is static mock arrays in `app.tsx` (`recentInspections`, `labLabs`). There is no API integration.

### Tailwind custom tokens

Use `text-brand-yellow`, `bg-brand-yellow`, `border-brand-yellow` for the Intertek yellow `#ffc72c`. Dark theme uses `slate-950` / `slate-900` backgrounds with glassmorphism (`backdrop-blur-xl`, `bg-slate-900/40`).

## Deployment

Targets **shared cPanel/Apache hosting** via FTP. See `DEPLOYMENT.md` for full details.

- CI (`.github/workflows/ci.yml`) runs on PRs
- CD (`.github/workflows/deploy.yml`) triggers on `main` push — builds then FTP-deploys `./dist/apps/intertek/` to the server
- SPA routing on Apache is handled by `apps/intertek/public/.htaccess` (copied into dist at build time)
- Required GitHub Secrets: `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`, `FTP_REMOTE_DIR`, `DEPLOY_BASE_PATH`

Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.
