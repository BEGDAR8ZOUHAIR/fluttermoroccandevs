# 📍 PROJECT_MAP — FlutterMoroccanDevs

> Living document. Updated after each build/verification cycle.
> Last sync: 2026‑10‑10 · Status: **BUILD ✅ · CHECK ✅ — scope complete** (see [VERIFICATION]).

---

## [TECH_STACK]

Versions resolved live from the official npm registry on **2026‑10‑10** (no guesses).

| Concern | Package | Version | Notes |
| --- | --- | --- | --- |
| Framework | `astro` | **7.3.8** | `output: "static"`. Zero-JS pages; islands only where needed. |
| Styling | `tailwindcss` + `@tailwindcss/vite` | **4.3.3** | CSS-first: `@theme` + `@custom-variant`. **No `tailwind.config.js`.** |
| Icons | `@lucide/astro` | **1.55.0** | Named component exports (`Users`, `GitBranch`, …). |
| SEO | `@astrojs/sitemap` | **3.7.4** | Emits `sitemap-index.xml`. Peer range `^4 \|\| ^5 \|\| ^6 \|\| ^7`. |
| Types | `typescript` | **6.0.3** | Strict. |
| Type check | `@astrojs/check` | **0.9.10** | `npm run check`. |
| Runtime | Node | **>=22.12.0** | Verified locally: `v22.19.0`, npm `10.9.3`. |
| Hosting | any static host | — | Netlify / Vercel / Cloudflare Pages / GitHub Pages. |

### Locked decisions (with rationale — override points noted)
1. **Astro over Next.js.** The reference site (GeeksBlabla) is itself Astro (`/_astro/…` assets). A community/content site needs SEO + near-zero JS, which Astro delivers for free. *Override:* `npm create next-app` and port components — pages are thin, data is framework-agnostic.
2. **TypeScript 6.0.3, not 7.0.2.** `@astrojs/check@0.9.10` declares peer `typescript@^5 || ^6`. Pin 6 to keep a working dependency tree and real type verification (`npm run check`) instead of forcing a broken install.
3. **Tailwind v4 CSS-first.** Design tokens live in `src/styles/global.css` under `@theme`. Adds **Flutter** accent scale (`--color-flutter-*`) + Morocco accents.
4. **Local typed data over a CMS.** `src/data/*.ts` — zero infra, fully typed, git-reviewable. Swap to Content Collections/MDX or a CMS later without touching components.
5. **External newsletter endpoint, graceful fallback.** Form posts to `PUBLIC_NEWSLETTER_ENDPOINT`. If unset, it shows a clear "subscriptions open soon" message instead of failing silently. No secrets, no server.
6. **Dark by default, class-based toggle**, persisted, no flash (inline `<head>` script).

---

## [DESIGN SYSTEM]

Re-skinned to match the reference (GeeksBlabla) after studying its **live HTML/CSS** — light, developer-centric **neo-brutalist** aesthetic.

| Token | Value | Use |
| --- | --- | --- |
| `--font-sans` | `Space Grotesk` (Google Fonts) | All UI text |
| `--font-mono` | `IBM Plex Mono` | Prompts, badges, project names |
| `--color-flutter-500` | `#066cf9` | Brand blue (whole scale remapped to blue) |
| `--color-ink` | `#0e0f10` | Headings / button text |
| `--color-ink-soft` | `#292d33` | Body text |
| `--color-line` | `#c3cad4` | Card & input borders |
| `--color-hero` | `#dce9fa` | Hero background |
| `--color-surface` | `#f2f4f7` | Alternating sections, footer |

Signature elements: white buttons with a **2px dark border + hard offset shadow** (`.btn-primary` blue shadow, `.btn-secondary` ink shadow, `.btn-solid` filled blue); cards with `#c3cad4` borders and hover lift; an **animated grid** hero (`.bg-grid`, 200px, reduced-motion aware); terminal **`>_`** motif on project cards; dark mode retained as an opt-in toggle (light is default to match the reference).

---

## [SYSTEM_FLOW]

### User journey (GUI) — verifiable goals
| # | Goal | Done when |
| --- | --- | --- |
| G1 | Hero communicates the mission | `/` shows headline "Empowering Flutter Developers in Morocco 🇲🇦" + 3 CTAs (Join / Explore Projects / Upcoming Events). |
| G2 | Mission + credibility | Mission section shows 4 pillars and 5 stats (members, workshops, projects, cities, episodes). |
| G3 | Content discovery | Home shows 3 episodes, 3 projects, 3 upcoming events; each links to its full page. |
| G4 | Full listings | `/podcast` (all episodes), `/projects` (all, star-sorted), `/events` (upcoming vs recap). |
| G5 | Join & contribute | `/contribute` lists 4 ways to help + `#suggest` panel with email/GitHub actions. |
| G6 | Trust | `/guidelines` renders the code of conduct; footer links to it on every page. |
| G7 | Newsletter capture | Valid email → inline success/error; invalid → inline validation; unset endpoint → informative fallback. |
| G8 | Themes | Toggle flips `html.dark`, persists to `localStorage["fmd-theme"]`, no flash on reload. |
| G9 | Social reach | Instagram `@fluttermorocco`, GitHub, LinkedIn, YouTube, GDG links present in nav-mobile + footer + pages. |
| G10 | SEO | Per-page `<title>`/meta/OG/Twitter + canonical; `sitemap-index.xml` + `robots.txt`. |
| G11 | 404 | `dist/404.html` with recovery links. |

### Data flow (static, no runtime API required)
```
src/data/*.ts  ──►  page frontmatter (filter/sort/slice)  ──►  components  ──►  static HTML (dist/)
                                   │
                                   └─►  client islands: ThemeToggle, Navbar mobile menu, NewsletterForm
```
External calls: only the optional newsletter `POST` to `PUBLIC_NEWSLETTER_ENDPOINT`.

---

## [ARCHITECTURE]

One deployable static project. Grouped by **feature domain / content type**, not micro-files.

```
fluttermoroccandevs/
├─ astro.config.mjs            # site URL, sitemap, Tailwind vite plugin
├─ tsconfig.json               # extends astro/tsconfigs/strict
├─ package.json
├─ .env.example                # PUBLIC_NEWSLETTER_ENDPOINT
├─ PROJECT_MAP.md              # this file
├─ README.md
├─ public/
│  ├─ favicon.svg
│  ├─ og.svg
│  └─ robots.txt
└─ src/
   ├─ config/site.ts           # identity, nav, socials  ← single source of truth
   ├─ data/
   │  ├─ mission.ts            # stats[] + pillars[]
   │  ├─ episodes.ts           # episodes[] + episodesByDate
   │  ├─ projects.ts           # projects[] + projectsByStars
   │  └─ events.ts             # events[] + eventsByDate
   ├─ lib/
   │  ├─ logger.ts             # level-gated, non-blocking logger
   │  └─ format.ts             # date/duration/upcoming helpers
   ├─ styles/global.css        # Tailwind v4 theme + component classes
   ├─ layouts/BaseLayout.astro # head/SEO, theme script, nav, footer
   ├─ components/
   │  ├─ Navbar.astro  Footer.astro  ThemeToggle.astro  SocialLinks.astro  BrandIcon.astro
   │  ├─ Section.astro  SectionHeading.astro  PageHeader.astro  CtaBanner.astro
   │  ├─ StatCard.astro  PillarCard.astro  Icon.astro
   │  ├─ EpisodeCard.astro  ProjectCard.astro  EventCard.astro
   │  └─ NewsletterForm.astro
   └─ pages/
      ├─ index.astro  about.astro  podcast.astro  projects.astro
      ├─ events.astro  contribute.astro  guidelines.astro  404.astro
```

**Abstraction rules honored:** shared `config/` + `lib/` only for genuinely reused logic; components only where reused (cards, section shells). No single-use abstractions.

---

## [VERIFICATION]

| Gate | Command | Result |
| --- | --- | --- |
| Install | `npm install` | ✅ 289 packages, no unresolved tree |
| Build | `npm run build` | ✅ 8 pages + `sitemap-index.xml` in 34.1s |
| Type check | `npm run check` | ✅ 34 files · 0 errors · 0 warnings · 0 hints |
| Output smoke test | inspect `dist/index.html` | ✅ headline, 3 CTAs, canonical, OG/Twitter tags present |
| Design parity | inspect built CSS | ✅ Space Grotesk + IBM Plex Mono, `#066cf9`, hard-offset shadows, grid, hero `#dce9fa`, `>_` motif |

> Fix found by the build gate: Lucide **removed brand icons** (`Github`, `Linkedin`, `Youtube`, `Instagram`) and `Code2` in this version. Added `src/components/BrandIcon.astro` (inline SVG marks) and switched to `Code`. Re-verified green.

---

## [ORPHANS & PENDING]

_Empty = product complete for the agreed scope._

> Documentation follow-ups that are **configuration**, not missing features:
> - Point `site` in `astro.config.mjs` + `site.url` in `src/config/site.ts` at the real domain.
> - Confirm real social handles in `src/config/site.ts` (`socials`).

---

## MILESTONES (goal-driven)

- **M1 — Foundation.** Stack pinned, configs, design system, layout shell. ✅
- **M2 — Content domains.** Typed data + card components. ✅
- **M3 — Pages.** Home + 6 inner routes + 404. ✅
- **M4 — Interactivity.** Theme toggle, mobile menu, newsletter form, logging. ✅
- **M5 — Verification.** Production build + type check green. ✅ (build: 8 pages; check: 34 files, 0 errors)
- **M6 — Deploy.** Static host + domain + real newsletter endpoint. 🔜 (ops)
