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
| Trust signals | `data/content.ts` / `SIGNALS` | Written. **Not rendered yet.** Decide whether to add a slim strip. |
| What I do | `Skills.tsx` | Copy done. Spine: Product Design, Design Systems, Brand Identity, Design Engineering. |
| Case studies | `Projects.tsx` + `CASE_STUDIES` | 4 slots scaffolded. Tile title/subtext contrast on the card background needs fixing (deferred). Needs real detail + NDA clearance + detail views. |
| Brand & identity | `Projects.tsx` + `GALLERY` | Redone as a plain image grid (`BrandGrid`), replacing the fanning card-deck. Placeholder tints; swap in real project thumbnails + names. |
| About | `About.tsx` | Bio rejected by Noah; needs a rewrite with his direction. |
| Experience | `Experience.tsx` + `EXPERIENCE` | Consolidated into one Sky Systemz block showing the climb. |
| Contact | `Contact.tsx` | Copy done. TODO: resume download link. |

## Design system

Lives in `src/design-system/`, shaped like a package (barrel `index.ts`) so it
can be lifted into its own repo + npm package later without restructuring.

- `tokens.ts` - typed accessors for every CSS custom property (color, type,
  space, radius, shadow, motion). `var(--...)` valued so they stay
  theme-reactive; `raw` sub-object holds literals for canvas / meta use.
- `components/` - `Button`, `Chip`, `Field`, `Card`, `Badge`. Thin React wrappers
  over the existing proven class names.
- `StyleGuide.tsx` - reference page at `/styleguide`. Dev-only: the route is
  behind `import.meta.env.DEV` and code-split, so it is not reachable and not
  bundled on the deployed site. Has its own local `data-theme` toggle to
  preview light + dark.

Consumed across `Header`, `Contact`, `About`, `Skills`, `Projects`, `Experience`,
`SectionHeading`. `MagneticButton` was replaced by `Button` and deleted.

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

## Launch punch-list (next session, before going live)

Structural / non-content work agreed but not yet done:

- [ ] Favicon: add `public/` + a `favicon.svg` (currently referenced in
      `index.html`, 404s). Add an apple-touch-icon too.
- [ ] Social meta: `og:title` / `og:description` / `og:image` / `twitter:card`
      in `index.html`, plus a 1200x630 share image (placeholder is fine).
- [ ] Form field labels: replace placeholder-as-label with visually-hidden
      `<label>`s (a11y).
- [ ] `prefers-reduced-motion`: gate Lenis smooth-scroll, `Reveal`, magnetic
      buttons, hero parallax, and the cursor ring.
- [ ] Verify the `#work` / `#about` nav anchors scroll reliably on fresh load.
- [ ] `public/robots.txt` (allow all) so the site gets indexed.
- [ ] Render the `SIGNALS` trust strip (copy is already written).
- [ ] Router + `/work/:slug` case-study page template, driven by `CaseStudy`
      data. After this, a new case study = fill `content.ts` + drop images.
- [ ] (optional) Fix `npm run lint` — flat-config error, not a launch blocker.

### Noah's tasks

- [ ] Pick a host (Vercel recommended: zero-config Vite, free, SPA routing
      handled, deploy on push). Point `noahcalvert.com` at it.
- [ ] Contact form: `mailto:` works for launch; swap to Formspree (free signup)
      before sharing the link widely.
- [ ] Commit + push (all current work is uncommitted on `main`).
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
- [ ] Fix case-tile title/subtext contrast against the card art.
