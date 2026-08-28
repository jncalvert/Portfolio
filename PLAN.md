# Portfolio plan

Working doc for the rebuild. Goal: land a senior product / UX design role.

## Positioning

**One-liner:** Product designer who ships design systems as real code, with a
brand designer's eye for craft.

The design-systems work is the headline. Product ownership (portal, mobile app)
proves range. Brand and visual work is the supporting act, never the thesis. Say
"product designer," not "product and brand designer" (the "and brand" invites a
generalist read; let the visual skill show through the work).

**Hierarchy of evidence:**

1. Design systems: the flagship (tri-brand system + npm package)
2. End-to-end product ownership: portal (web, 0 to 1), mobile app (0 to 1)
3. Feature work inside a real product org: shows constraints, PMs, engineers
4. Brand + build: startup identity shipped as code (range, self-direction)
5. Visual gallery: pure craft, low-commitment to read

## Site structure (top to bottom)

| Section | Component | State |
| --- | --- | --- |
| Hero | `Hero.tsx` | Copy done. Headline "Designing Digital Systems", tagline + greyed `taglineMuted`. |
| What I do | `Skills.tsx` | Copy done. Spine: Product Design, Design Systems, Brand Identity, Design Engineering. |
| Case studies | `Projects.tsx` + `CASE_STUDIES` + `pages/CaseStudyPage.tsx` | Tiles link to `/work/:slug`; each renders a real page from the `CaseStudy` data. Needs real detail + NDA clearance + screenshots. Tile title/subtext contrast still deferred. |
| Brand & identity | `Projects.tsx` + `GALLERY` | Redone as a plain image grid (`BrandGrid`), replacing the fanning card-deck. Placeholder tints; swap in real project thumbnails + names. |
| About | `About.tsx` | Copy done (warm career-arc narrative). "NC" monogram is a placeholder for a real headshot. |
| Experience | `Experience.tsx` + `EXPERIENCE` | Consolidated into one Sky Systemz block showing the climb. |
| Contact | `Contact.tsx` | Copy done. TODO: resume download link. |

## Design system

Lives in `src/design-system/`, shaped like a package (barrel `index.ts`) so it
can be lifted into its own repo + npm package later without restructuring.

- `tokens.ts` - typed accessors for every CSS custom property (color, type,
  space, radius, shadow, motion). `var(--...)` valued so they stay
  theme-reactive; `raw` sub-object holds literals for canvas / meta use.
- `components/` - `Button`, `Chip`, `Field`, `Card`, `PreviewCard` (media-first
  link card), `Badge`. Thin React wrappers over the proven class names.
  - `Button`: `intent` (primary / secondary / tertiary / danger / gradient) x
    `fill` (solid / outline; ignored for tertiary + gradient), `size`
    (sm / md / lg), `iconLeft` / `iconRight` (Lucide), `iconOnly`, `loading`,
    `disabled`, `block`, `magnetic`. `to` -> router `<Link>`, `href` -> `<a>`,
    neither / disabled -> `<button>`. Letter-roll dropped. CSS is
    `.btn` + `.btn--{intent}-{fill}` in `index.css`.
  - `Field`: `as` (input / textarea), `label` (+ `hideLabel` for the
    placeholder-only look, label kept for AT via `.sr-only`), `hint`, `error`,
    `disabled`, plus native props. Wraps in `.field-group`; `className` /
    `style` land on the wrapper. The contact form uses `hideLabel`. No
    `Select` / `Checkbox` / `Radio` / `Switch` yet - add when a form needs them.
- `StyleGuide.tsx` - reference page at `/styleguide`. Dev-only: route +
  floating shortcut (`components/dev/StyleGuideLink.tsx`) are behind
  `import.meta.env.DEV` and code-split, so nothing is reachable or bundled on
  the deployed site. Local `data-theme` toggle previews light + dark.

**Rule: no hand-rolled buttons / cards / chips / badges / inputs anywhere.**
Everything visual goes through a DS component; add a new one if none fits.

### Not yet componentised (audit findings)

- `Header` nav pills (`.nav-pill`) - icon nav item, could be a `NavItem`.
- `Hero` "Find me at" links (`.hero-social`) - text + trailing arrow, could be
  an `ArrowLink`.
- `Hero` featured card (`.hero-feature`) - a horizontal card; extend
  `PreviewCard` with a row layout or make a variant.
- `Experience` accordion (`.accordion-trigger` + AnimatePresence) - a `<button>`;
  wants an `Accordion` / `Disclosure` component.
- `Skills` `.service-card` - a card; build on `Card` or a `FeatureCard`.
- `Projects` `.case-card` (the big home tiles) - elaborate site-specific card;
  candidate for a `CaseTile` (site-level is fine).

**Not yet done (do these when splitting into a package):**

- [ ] Physically move the component CSS out of `src/index.css` (the `.btn-*`,
      `.tag`, `.field`, `.glow-card`, `.kicker` / `.services-badge` groups) into
      `src/design-system/`. Left in place for now because the pill/badge rules
      are interlinked with `.nav-pill` / `.header-bar`.
- [ ] `package.json` with `exports` map, build to `dist/` (tsup or Vite lib
      mode), a token `.css` artifact, semver. Then `npm publish`.
- [ ] Decide: keep as a folder, promote to an npm-workspaces package in this
      repo, or split to a standalone repo.

## The 4 case studies

All live in `src/data/content.ts` / `CASE_STUDIES`, with detail-view scaffolding
(`role`, `context`, `problem`, `contributions`, `outcome`, `confidential`) that
isn't rendered yet.

1. **Tri-Brand Design System:** systems thinking, eng collaboration, scale,
   Figma to code, npm. The anchor. Needs adoption numbers.
2. **Customer Portal:** 0 to 1 web product ownership: research, IA, flows, ship.
3. **Mobile App:** 0 to 1 on native, trust-heavy domain. Different
   platform and problem class from the portal.
4. **Startup Brand + Site:** brand + build in one story, Figma to hand-coded
   React. The "why I'm different" piece.

**Detail template** (build once, reuse): context, problem/stakes, what I did
(with artifacts), who I worked with, outcome, what I'd do differently.

## Launch punch-list

- [x] Favicon: `public/favicon.svg` (geometric lowercase "n", white on
      #121214 rounded square). Placeholder mark, Noah to refine later.
- [x] apple-touch-icon: `public/apple-touch-icon.png` (180x180) + link in
      `index.html`.
- [x] Social meta: full `og:*` / `twitter:card` set in `index.html` +
      `public/og.png` (1200x630). URLs point at the Vercel alias for now;
      swap to `noahcalvert.com` once the domain is pointed.
- [x] Form field labels: `Field` now takes `label` / `hint` / `error` /
      `disabled` with proper `<label htmlFor>` + `useId` wiring and
      `aria-invalid` / `aria-describedby`. Contact form uses real labels.
- [x] `prefers-reduced-motion`: `MotionConfig reducedMotion="user"` +
      `useReducedMotion` guards in `Reveal`, `ScrollText`, `Button` (magnetism),
      `Hero` (parallax), `CustomCursor` (not rendered); Lenis smooth-scroll off;
      broad CSS reset in the media block.
- [x] `public/robots.txt` (allow all).
- [x] Nav anchors verified (About / Work click-scroll works via Lenis).
- [x] Router: `react-router-dom`, `BrowserRouter` in `main.tsx`. Routes: `/`,
      `/work/:slug` (`pages/CaseStudyPage.tsx`), dev-only `/styleguide`, `*` to
      `/`. `ScrollManager` handles scroll on nav. `vercel.json` rewrites all
      paths to `index.html` so routes survive a refresh. Each case study page
      ends with a "More work" card grid linking to the other three. Adding a
      case study is now just filling `content.ts` + dropping screenshots.
- [ ] (optional) Fix `npm run lint` - flat-config error, not a launch blocker.
- [ ] When the domain is pointed: update `og:url` / `og:image` / `twitter:image`
      in `index.html` from the Vercel alias to `https://noahcalvert.com`.

Already done: last session's work is committed, merged to `main`, and live on
Vercel at `portfolio-mu-puce-28.vercel.app` (auto-deploys on push to `main`).

### Noah's tasks

- [ ] Delete the duplicate `portfolio-5jrf` Vercel project (two projects build
      this repo on every push).
- [ ] Point `noahcalvert.com` at the Vercel project (dashboard + DNS).
- [ ] Contact form: `mailto:` works for launch; swap to Formspree (free signup)
      before sharing the link widely.
- [ ] Fix the commit author email on `c24ceff` (machine default, not the GitHub
      address) before it matters: `git config user.email ...` + amend.
- [ ] Analytics (optional).

## Open TODOs (content)

- [ ] Confidentiality pass on the 3 Sky Systemz case studies: what can go public,
      what needs to be genericised, what real metrics are cleared.
- [ ] Write the 4 case studies into `CASE_STUDIES`.
- [ ] Replace the fake dashboard / code / browser mockups with real artifacts.
- [ ] Real headshot in About (headshot.png is on the Desktop) instead of "NC".
- [ ] Real thumbnails + names for the Brand & identity grid.
- [ ] Resume PDF + download link in Contact.
- [ ] Name the startup in `CASE_STUDIES[3]` (the Figma-to-code one).
