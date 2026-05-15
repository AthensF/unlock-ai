# unlock.ai Hand-off Document

This document hands off the `unlock.ai` product-app replication work: source video context, extracted timeline, spec locations, implementation files, and deployment/push status.

## Source Video

- **YouTube video**: https://www.youtube.com/watch?v=uH39OZ-KnkY
- **Primary implementation target**: product-app portions of the observed internal AI adoption platform.
- **Out-of-scope segment for this agent**: `19:06-20:46` GTM Growth Command Center and Buzzboard marketing website segment. That work is handled separately and should not be modified here.

## Extracted Timeline

### Product app / unlock.ai scope

- **`08:16-18:56`** — Automators product app:
  - Quest Board
  - Quest detail / PRD pages
  - Guides
  - Skills Marketplace
  - Skill detail pages
- **`24:25-25:40`** — AI Usage / token tracking dashboard:
  - donut-style tier distribution cards
  - usage graphs
  - adoption curve smoothness
  - leadership usage board
  - visible leadership usage as an adoption signal
- **`26:21-28:51`** — AI Tiers and maturity model:
  - The Five Tiers
  - expandable tier rows
  - Organisational Arc
  - By Team matrix
  - expanded Tier 02 detail

### Marketing segment, out of scope

- **`19:06-20:46`** — GTM Growth Command Center and Buzzboard:
  - captured separately in `marketing-webpage-spec.md`
  - not part of this implementation hand-off

## Spec Markdown Locations

- **Product app spec**: `/Users/athens/CascadeProjects/youtube-product-spec/product-spec.md`
- **Main cleanup/implementation plan**: `/Users/athens/.windsurf/plans/website-replication-page-by-page-plan-55b58e.md`
- **Scope tidy plan**: `/Users/athens/.windsurf/plans/product-spec-scope-tidy-43e6ea.md`
- **Marketing spec, out of scope**: `/Users/athens/CascadeProjects/youtube-product-spec/marketing-webpage-spec.md`

## Implemented Source Code

- **React app**: `/Users/athens/CascadeProjects/youtube-product-spec/src/App.tsx`
- **CSS styling**: `/Users/athens/CascadeProjects/youtube-product-spec/src/styles.css`
- **Entry point**: `/Users/athens/CascadeProjects/youtube-product-spec/src/main.tsx`
- **Package scripts**: `/Users/athens/CascadeProjects/youtube-product-spec/package.json`

## Implemented Pages

### Global shell

- Persistent left sidebar.
- Main content canvas.
- Navigation:
  - Quest Board
  - AI Usage
  - Skills
  - Guides
  - AI Tiers

### Quest Board

- Active/completed filter controls.
- Tier/status filters.
- Language toggle.
- Card grid with observed quest titles.
- Click-through from first quest card into the detail/PRD page.

### Quest Detail / PRD

- Salesforce CSM dashboard quest.
- Status/tier badges.
- `Edit PRD` action.
- Document panel with Summary, Context, Users, and Success Criteria.

### Skills Marketplace

- Top actions:
  - My Skills
  - Trash
  - New Skill
  - New Plugin
- Search and sort controls.
- Tag pills.
- Plugin/skill cards.

### Skill Detail

- `meddpicc advisor` skill detail page.
- Description/metadata sidebar.
- Install action.
- `SKILL.md`-style document panel.

### Guides

- `Git & GitHub Settings` guide.
- Guide list.
- Markdown-like document panel.
- Setup command blocks.
- GitHub CLI and GitHub MCP sections.

### AI Tiers

- Compact numbered tabs:
  - `01 The Five Tiers`
  - `02 Organisational Arc`
  - `03 By Team`
- Expandable Five Tiers accordion.
- Tier `02 Intermediate — the Accelerator` expanded by default.
- Plus buttons for collapsed tiers.
- Token/day labels.
- By Team matrix styled to match screenshots with dense grid, italic team labels, and highlighted Tier 02 column.

### AI Usage

- Token tracking dashboard from the `24:25-25:40` segment.
- Donut-style tier distribution cards.
- Company token KPI.
- Adoption curve graph.
- Team usage bars.
- Leadership board.
- Copy emphasises that curve smoothness matters more than raw token volume and that visible leadership usage drives adoption.

## Local Development

Install dependencies if needed:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Validation

The latest build completed successfully:

```text
npm run build
✓ built
```

## GitHub Target

- **Repository**: `git@github.com:AthensF/unlock-ai.git`
- This project directory may need Git initialisation before pushing if it is not already a repository.

## Deployment

- **Vercel URL**: https://unlock-dot-ai.vercel.app

## Notes for Next Agent

- Do not modify `marketing-webpage-spec.md` unless explicitly instructed; another agent owns that work.
- Product implementation currently lives in `src/App.tsx` and `src/styles.css`.
- Some legacy marketing/Buzzboard React components remain in `src/App.tsx`, but the rendered default app is now the `unlock.ai` product app.
- Screenshot fidelity matters more than generic component styling.

## Session Log — 2026-05-15

Shipped responsive + content polish on `main` (commits `612d654`, `4c92563`, `4ceb2c6`).

**Responsive system** (`src/App.tsx`, `src/styles.css`):
- Removed the decorative EN/KO language toggle from the Quest Board header.
- Added a hamburger button + slide-in drawer for the global sidebar under 768px, with a backdrop and auto-close on nav click. Sidebar state lives in `UnlockProductApp` as `sidebarOpen`.
- Two responsive breakpoints in `src/styles.css`:
  - `@media (max-width: 768px)` — phone: hamburger appears, multi-column grids collapse to 1 col (Quest Board, Skills/Plugin marketplace, Five Tiers expanded panel, AI Tiers arc/matrix, AI Usage KPI row, usage hero/panels/leadership board, Guides nav + overview). The "By Team" matrix keeps horizontal scroll inside its own container via `overflow-x: auto`.
  - `@media (max-width: 1100px) and (min-width: 769px)` — tablet/small laptop: Guides drops the empty TOC rail and stacks overview cards 1-col.
- Page-level horizontal overflow asserted to 0 via headless `browse` at 375 and 1000 viewports.

**Content**:
- Renamed Tier 05 "AI God" → "Visionary" across `src/App.tsx`: the Five Tiers data (`AiTiersFiveTiers`), the leadership board rows in AI Usage, and the uppercase column header `'VISIONARY · MULTIPLIER'` in the By Team matrix at line 1195. `grep -i god src/App.tsx` returns 0.

**`.gitignore`**: added `.gstack/` and `.vercel`.

**Verification tooling**: Used the gstack `browse` skill (`~/.claude/skills/gstack/browse/dist/browse`) to drive a headless Chromium against `npm run dev` at `http://localhost:5173/`. Useful one-liners:
- `B="$HOME/.claude/skills/gstack/browse/dist/browse"` then `$B viewport 375x812`, `$B goto …`, `$B click ".unlock-hamburger"`, `$B screenshot --viewport /tmp/x.png`.
- Tab triggers in AI Tiers don't have `.unlock-tabs` class; use `[...document.querySelectorAll('button')].find(b => /by team/i.test(b.textContent)).click()`.

**Known follow-ups not addressed this session**:
- Tab strips inside AI Tiers / AI Usage (`02 Organisational Arc`, `03 By Team`, `My Usage`, `My Team`) still horizontally clip on phone — pre-existing layout, low priority.
- No proper tap-handler verification on backdrop close via Playwright (the click coordinate centered on the backdrop is occluded by the sidebar `z-index`); JS-dispatched click works and real-user taps on the right of the viewport will hit the backdrop. Functional, but worth a manual sanity-check on a real device.
- A separate `Plan: Mobile layout pass for fixed-column grids` plan file existed mid-session; final state matches what shipped, but if you reopen the plan file at `/Users/athens/.claude/plans/great-two-things-1-gentle-emerson.md` it now reflects only the latest addendum (Visionary uppercase rename).
