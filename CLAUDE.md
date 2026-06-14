# OpenWolf

@.wolf/OPENWOLF.md

This project uses OpenWolf for context management. Read and follow .wolf/OPENWOLF.md every session. Check .wolf/cerebrum.md before generating code. Check .wolf/anatomy.md before reading files.


# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Behavioral Guidelines

Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

### 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

### 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

### 3. Surgical Changes

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

### 4. Goal-Driven Execution

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

---

## Role & Responsibilities

When working on tasks, act as:
1. **Senior Frontend Engineer** — Expert in React 19, TypeScript, and modern UI/UX patterns
2. **Senior Software Architect** — Design scalable, maintainable component and routing architectures
3. **Senior Software Tester** — Ensure comprehensive Vitest unit and Playwright E2E coverage
4. **Reviewer Bot** — Catch errors in types, component logic, accessibility, and common React mistakes
5. **Image Analysis Expert** — Read and analyze Figma designs, screenshots, wireframes, and extract implementation specs

---

## Package Manager & Monorepo

This is an **Nx monorepo** using **npm**. Always use `npm` for package operations and `nx` to run tasks — never invoke underlying tooling (vite, vitest, playwright) directly.

- **NEVER run `npm install`** unless explicitly requested.
- Use `npx nx run <project>:<target>` or `npx nx run-many --target=<target>` for all build/serve/test/lint tasks.

---

## Development Commands

```bash
# Dev server — http://localhost:4700
npx nx serve intertek

# Production build (outputs to apps/intertek/dist/)
npx nx build intertek

# Build with subdirectory base path for shared hosting
BASE_PATH=/intertek/ npx nx build intertek

# Testing
npx nx test intertek                  # Vitest unit tests (jsdom)
npx nx e2e intertek-e2e               # Playwright E2E tests

# Run a single unit test file
npx nx test intertek --testFile=apps/intertek/src/app/app.spec.tsx

# Type checking & linting
npx nx typecheck intertek
npx nx lint intertek

# Run all targets across all projects
npx nx run-many --target=lint
npx nx run-many --target=typecheck
```

### CI Checks (run locally before pushing to `main`)
```bash
npm ci
npx nx build intertek
npx nx test intertek
npx nx lint intertek
npx nx typecheck intertek
```

---

## Architecture Overview

### Apps

| App | Type | Port |
|-----|------|------|
| `apps/intertek` | React 19 SPA (Vite) | 4700 (dev) / 4300 (preview) |
| `apps/intertek-e2e` | Playwright E2E | — |

### Frontend Architecture

This is a **single-app SPA** with no backend or shared libraries. All code lives in `apps/intertek/src/`.

```
apps/intertek/src/
├── main.tsx              # Entry point — wraps <App> in StrictMode + BrowserRouter
├── styles.css            # TailwindCSS v4 entry (@import "tailwindcss") + custom tokens
├── assets/               # Static assets
└── app/
    ├── app.tsx           # Router, sidebar/mobile nav, all view components, all mock data
    └── hooks/
        └── useSEO.ts     # Imperative hook — updates document.title + meta tags per route
```

**`app.tsx` is intentionally monolithic at this stage.** All four views (`DashboardView`, `InspectionsView`, `LabsView`, `RequestAuditView`) and mock data arrays (`recentInspections`, `labLabs`) live in this file. Split into separate files only when explicitly asked.

### Routing

Four client-side routes using React Router v6 `BrowserRouter`:

| Path | View Component |
|------|---------------|
| `/` | `DashboardView` |
| `/inspections` | `InspectionsView` |
| `/labs` | `LabsView` |
| `/request-audit` | `RequestAuditView` |

Each view calls `useSEO({ title, description, keywords })` at the top to update page metadata imperatively.

### Styling System

TailwindCSS v4 with custom CSS variables defined in `apps/intertek/src/styles.css` under `@theme`:

| Token | Value | Usage |
|-------|-------|-------|
| `brand-yellow` | `#ffc72c` | Primary brand color — buttons, active nav, accents |
| `brand-dark` | `#121212` | Deep background |
| `brand-navy` | `#0a1128` | Dark navy background |

Use `text-brand-yellow`, `bg-brand-yellow`, `border-brand-yellow` for the Intertek yellow.

The design language is **dark glassmorphism**: `bg-slate-900/40`, `backdrop-blur-xl`, `border border-slate-800/80`, rounded cards (`rounded-2xl`).

Custom animation `animate-pulse-glow` is defined in `styles.css` for background decorations.

### Data

All data is **static mock arrays** in `app.tsx`. There is no API integration. Do not add fetch logic, loading states, or error boundaries unless explicitly asked.

---

## Core Development Principles

### Type Safety
- **NEVER** use `any` or `unknown` types.
- Always define explicit prop and return types.
- Use discriminated unions for status values (e.g., `'Passed' | 'Pending' | 'Failed'`).

### No Console Logs
Remove any `console.log` debug statements before committing. For user-facing feedback, use UI state (success/error messages rendered in JSX).

```bash
# Find console logs before committing
git diff --cached | grep "console\."
```

### React Patterns
- Prefer `useState` for local UI state — don't reach for external state management unless the app grows beyond its current scope.
- Keep components co-located in `app.tsx` unless splitting is explicitly requested.
- Use `useSEO` at the top of every new view component.
- Form state: use controlled inputs with a single `formData` object and spread updates (`setFormData({ ...formData, field: value })`).

### Accessibility
- All interactive elements must have accessible labels (`aria-label`, `htmlFor`/`id` pairs on inputs).
- Maintain keyboard navigability and focus outlines.
- Color is not the only indicator of status — use text labels alongside color-coded badges.

---

## Project Structure Rules

### Before Creating New Files
Always check `app.tsx` first — it likely already contains the component or data you need.

- **New view/page** → add as a named function in `app.tsx`, register a `<Route>` in `<Routes>`, add a `<Link>` to the sidebar nav
- **New reusable hook** → `apps/intertek/src/app/hooks/<hookName>.ts`
- **New reusable component** → `apps/intertek/src/app/components/<ComponentName>.tsx` (only create this folder when there are ≥2 reusable components)
- **Static assets** → `apps/intertek/public/` (copied to dist as-is)

### Adding a New Route
1. Define the view function in `app.tsx`.
2. Call `useSEO(...)` at the top of the view.
3. Add `<Route path="/new-path" element={<NewView />} />` inside `<Routes>`.
4. Add a `<Link>` entry in the sidebar `<nav>` block with matching `isActive('/new-path')` styling.
5. Add a mobile-nav `<Link>` entry with `onClick={() => setMobileMenuOpen(false)}`.

---

## Testing Guidelines

### Unit Tests (Vitest + Testing Library)
- Test files: `*.spec.tsx` or `*.spec.ts` inside `src/`.
- Test environment: `jsdom` (configured in `vite.config.mts`).
- Coverage output: `apps/intertek/test-output/vitest/coverage/`.
- Use `@testing-library/react` — test behavior, not implementation.

### E2E Tests (Playwright)
- Test files: `apps/intertek-e2e/src/*.spec.ts`.
- Playwright config: `apps/intertek-e2e/playwright.config.ts`.
- E2E tests require the dev server to be running (`npx nx serve intertek`).

### AAA Pattern
```typescript
it('should show inspection result when valid ID is searched', async () => {
  // Arrange
  render(<App />);

  // Act
  await userEvent.type(screen.getByPlaceholderText(/enter id/i), 'ITK-9082');
  await userEvent.click(screen.getByRole('button', { name: /query api/i }));

  // Assert
  expect(screen.getByText('AeroSpace Dynamic')).toBeInTheDocument();
});
```

---

## Image Analysis

When a user provides a Figma export, screenshot, wireframe, or layout diagram:

1. **Analyze** — identify all components, extract colors (hex), typography, spacing, layout structure.
2. **Document** — produce a structured spec (component hierarchy, color palette, font sizes, interactive states).
3. **Implement** — generate code following this project's standards: TailwindCSS v4 tokens, dark glassmorphism style, TypeScript strict, React 19 patterns.
4. **Verify** — confirm implementation matches the design.

---

## Deployment

Targets **shared cPanel/Apache hosting** via FTP. See `DEPLOYMENT.md` for full details.

- **CI** (`.github/workflows/ci.yml`) — runs on all PRs
- **CD** (`.github/workflows/deploy.yml`) — triggers on `main` push; builds then FTP-deploys `./dist/apps/intertek/` to the server
- **SPA routing on Apache** — handled by `apps/intertek/public/.htaccess` (copied into dist at build time)
- **Base path** — controlled by `BASE_PATH` env var in `vite.config.mts` (default `/`, set to `/intertek/` for subdirectory hosting)

### Required GitHub Secrets
`FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`, `FTP_REMOTE_DIR`, `DEPLOY_BASE_PATH`

---

## Security & Best Practices

- Never embed API keys, tokens, or credentials in source code or committed `.env` files.
- Sanitize any user input rendered to the DOM — avoid `dangerouslySetInnerHTML`.
- The `.htaccess` SPA fallback rewrites all unknown paths to `index.html` — ensure all sensitive paths are handled at the React Router level.
- Keep the `dangerous-clean-slate: false` flag in the FTP deploy action — it prevents wiping other apps on shared hosting.

---

## Commit & Branch Guidelines

### Commit Message Format
```
<type>(<scope>): <short description>
```
One line only — no body, no bullet points. Types: `feat`, `fix`, `refactor`, `test`, `docs`, `chore`.

```
feat(labs): add lab detail modal component
fix(nav): resolve mobile menu not closing on route change
chore(deps): upgrade tailwindcss to v4.3.2
```

### Git Author
Git author: **Samy Mostafa Shaawat** only. Do not add any `Co-authored-by:` lines.

### Branch Naming
Format: `<type>/<short-description>`
- `feat/request-audit-form-validation`
- `fix/mobile-menu-close-on-navigate`
- `chore/upgrade-vite-8`

---

## Code Quality Reviewer

**Review rules:**
1. Review only the code changes introduced in this pull request compared to the target branch.
2. Do not report false positive issues.
3. Make each issue clear, simple, and easy to understand.
4. Do not reference lines or locations that do not exist in the reviewed file.

When asked to review a diff, analyze it against the following and output findings in this format:

**For each issue:**
- **Severity:** `CRITICAL` | `MAJOR` | `MINOR` | `SUGGESTION`
- **Category:** `BUG` | `REACT` | `TYPES` | `ACCESSIBILITY` | `CLEAN CODE` | `PERFORMANCE`
- **Type/Principle:** e.g., Missing key prop, Unsafe type cast, Missing aria-label
- **Location:** file path + line numbers
- **Issue:** what is wrong and why it matters
- **Suggestion:** concrete fix with code example
- **Impact:** effect on correctness, accessibility, or maintainability

**Bug categories to check:** missing React keys, stale closures, unhandled form submission errors, type coercions, conditional hook calls, missing dependency arrays in `useEffect`, accessibility violations (missing labels, poor contrast, keyboard traps), dead code.

**React / Clean Code checks:** unnecessary re-renders, prop drilling vs. co-location, component size, naming clarity, DRY, code smells (giant switch statements, deeply nested JSX).

End every review with a **Summary Table** grouped by Category and Severity.

```bash
# Commands to get the diff
git diff <branch_name>
git diff --name-only <branch_name>
```
