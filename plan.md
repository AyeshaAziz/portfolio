# Portfolio Improvement Plan

## Phase 1 — Cleanup & Fixes ✅ DONE

- [x] Delete dead code: `App.css`, `Login.tsx`, `Register.tsx`, `hooks/use-toast.ts`, `cv1.pdf`
- [x] Delete `bun.lockb` (redundant next to `package-lock.json`)
- [x] Move `robots.txt` → `public/robots.txt`
- [x] Remove Supabase references from `tsconfig.app.json` and `vite.config.ts`
- [x] Uninstall unused deps: `@supabase/supabase-js`, `dompurify`, `@types/dompurify`
- [x] Fix all ESLint errors, suppress shadcn/ui warnings
- [x] Fix duplicate project description ("Featured Playlists App")
- [x] Redesign Skills section (categories, filter tabs, staggered animations)
- [x] Redesign Projects section (category filter, improved card hover effects)

---

## Phase 2 — TypeScript Strictness (est. 45 min)

**Goal:** Enable strict mode, fix all type errors across the codebase.

| Step | File(s) | Action |
|------|---------|--------|
| 2.1 | `tsconfig.app.json` | Set `strict: true`, `noUnusedLocals: true`, `noUnusedParameters: true`, `noFallthroughCasesInSwitch: true`. Remove redundant `noImplicitAny` override. |
| 2.2 | `tsconfig.json` | Remove redundant `noImplicitAny`, `noUnusedParameters`, `noUnusedLocals`, `strictNullChecks` overrides. |
| 2.3 | `src/lib/utils.ts` | Add type annotation to `mappedlinks` parameter (currently `any`). |
| 2.4 | `src/components/Skills/SkillCard.tsx` | Ensure `skill` prop has explicit interface (already partially done, verify). |
| 2.5 | All `src/**/*.tsx` | Fix any new type errors surfaced by strict mode. |
| 2.6 | — | Run `npx tsc --noEmit` to verify zero errors. |

---

## Phase 3 — Code Quality & Refactoring (est. 1 hr)

**Goal:** Fix type safety gaps, remove anti-patterns, improve linting.

| Step | File(s) | Action |
|------|---------|--------|
| 3.1 | `src/lib/utils.ts` | Add `SocialLinkRaw` input type and return `SocialLink[]`. Type the function. |
| 3.2 | `src/lib/SharedConstants.json` | Remove unused keys `THREE`, `FOUR`, `USER_NAME`, `AVATAR_IMAGE_SRC`. Inline `EMPTY_STRING` → `""`, convert `FRONTEND_DEVELOPER` to a TS const. Replace `ZERO`/`ONE`/`TWO` with direct literals `0`/`1`/`2`. Delete the JSON file. |
| 3.3 | `src/components/ui/use-toast.ts` | Already contains the implementation; delete the re-export wrapper (done in Phase 1). Verify no stale imports. |
| 3.4 | `eslint.config.js` | Change `@typescript-eslint/no-unused-vars` from `"off"` to `["warn", { "argsIgnorePattern": "^_" }]`. |
| 3.5 | — | Add `.prettierrc` config file. |
| 3.6 | `package.json` | Add `"format": "prettier --write src/"` script. |
| 3.7 | — | Add `.env.example` with `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` (commented out). |
| 3.8 | — | Run lint + build to verify. |

---

## Phase 4 — Image Optimization (est. 1 hr)

**Goal:** Reduce bundle size and improve load times.

| Step | File(s) | Action |
|------|---------|--------|
| 4.1 | `src/assets/images/todo.jpg` | Compress aggressively (2.5MB → ~300KB) via `sharp` or Squoosh. |
| 4.2 | `src/assets/images/{weather,ems1-7,sh1,sh5}.{jpg,png}` | Compress 11 files >200KB. |
| 4.3 | — | Convert key images to WebP format alongside originals. |
| 4.4 | `src/components/ui/slide-show.tsx:53` | Add `loading="lazy"` and `decoding="async"` to `<img>`. |
| 4.5 | `src/components/Skills/Skills.tsx` | Add `loading="lazy"` to MUI/RxJS logo `<img>` tags. |
| 4.6 | — | Verify built output sizes are reduced. |

---

## Phase 5 — CI/CD & Documentation (est. 30 min)

**Goal:** Catch issues before deploy. Improve project onboarding.

| Step | File(s) | Action |
|------|---------|--------|
| 5.1 | `.github/workflows/deploy.yml` | Add `pull_request:` trigger alongside `push`. |
| 5.2 | `.github/workflows/deploy.yml` | Add `cache: 'npm'` to `actions/setup-node` step. |
| 5.3 | `.github/workflows/deploy.yml` | Add step: `run: npm run lint`. |
| 5.4 | `.github/workflows/deploy.yml` | Add step: `run: npx tsc --noEmit`. |
| 5.5 | `.github/workflows/deploy.yml` | Add step: `run: npm test` (after Phase 6). |
| 5.6 | `README.md` | Rewrite with: project description, tech stack, setup guide (`npm install` + `npm run dev`), available scripts, project structure, deployment notes, link to live site. |

---

## Phase 6 — Testing (est. 2 hr)

**Goal:** Establish test infrastructure and write initial test suite.

| Step | File(s) | Action |
|------|---------|--------|
| 6.1 | — | `npm i -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom` |
| 6.2 | `vitest.config.ts` (new) | Configure with `jsdom` environment, `@/` alias matching `vite.config.ts`. |
| 6.3 | `package.json` | Add `"test": "vitest run"`, `"test:watch": "vitest"`, `"test:coverage": "vitest run --coverage"` scripts. |
| 6.4 | `src/lib/__tests__/utils.test.ts` | Test `cn()` utility merges classes correctly. |
| 6.5 | `src/components/__tests__/Header.test.tsx` | Test header renders name and nav links. |
| 6.6 | `src/components/__tests__/Navbar.test.tsx` | Test renders options, fires `onLinkClick`. |
| 6.7 | `src/components/__tests__/ProjectCard.test.tsx` | Test renders title and tech badges. |
| 6.8 | `.github/workflows/deploy.yml` | Add `run: npm test` step. |
| 6.9 | — | Run `npm test` to verify all tests pass. |

---

## Phase 7 — Accessibility (est. 1.5 hr)

**Goal:** Keyboard navigation, screen reader support, focus management.

| Step | File(s) | Action |
|------|---------|--------|
| 7.1 | `src/components/ui/slide-show.tsx` | Add keyboard arrow-key navigation (left/right). Add `role="region"` and `aria-label="Project slideshow"`. |
| 7.2 | `src/components/Navigation/mobileNav.tsx` | Add Escape key handler to close menu. Add focus trap when open. Restore focus to toggle button on close. |
| 7.3 | `src/components/Header.tsx` | Add `aria-expanded` and `aria-controls` on hamburger button linking to mobile nav. |
| 7.4 | `src/components/Navigation/mobileNav.tsx` | Add `role="dialog"` and `aria-modal="true"`. Add `aria-label="Navigation menu"`. |
| 7.5 | `src/components/Navigation/Navbar.tsx` | Add `aria-label="Main navigation"` to `<nav>`. |
| 7.6 | `src/components/ui/slide-show.tsx` | Add `aria-label` to prev/next buttons. |
| 7.7 | Various | Ensure all `<img>` elements have meaningful `alt` text (audit existing). |
| 7.8 | — | Spot-check color contrast of text on gradient/slate backgrounds against WCAG AA. |

---

## Phase 8 — Performance & Polish (est. 1 hr)

**Goal:** Reduce bundle size through code splitting, fix remaining UI gaps.

| Step | File(s) | Action |
|------|---------|--------|
| 8.1 | `src/components/Dashboard.tsx` | Use `React.lazy(() => import('./Projects/Projects'))` and `React.lazy(() => import('./Contact'))` with `<Suspense>` wrapper. |
| 8.2 | `src/components/ui/slide-show.tsx` | Uncomment and wire up the autoplay `useEffect`. |
| 8.3 | `package.json` | Add `"analyze": "vite-bundle-visualizer"` script. |
| 8.4 | — | Final verification: `npm run lint` + `npx tsc --noEmit` + `npm test` + `npm run build` all pass. |

---

## Summary

| Phase | Effort | Risk | Value |
|-------|--------|------|-------|
| 1. Cleanup & Design ✅ | Done | — | — |
| 2. TypeScript Strictness | 45 min | Medium | High |
| 3. Code Quality | 1 hr | Low | High |
| 4. Image Optimization | 1 hr | Low | Medium |
| 5. CI/CD & Docs | 30 min | Low | High |
| 6. Testing | 2 hr | Low | High |
| 7. Accessibility | 1.5 hr | Low | Medium |
| 8. Performance | 1 hr | Low | Medium |
| **Total** | **~8 hr** | | |
