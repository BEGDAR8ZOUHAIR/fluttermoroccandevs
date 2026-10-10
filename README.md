# FlutterMoroccanDevs

A modern, responsive community website for **Flutter & Dart developers in Morocco 🇲🇦** — inspired by the clean, developer-focused aesthetic of [GeeksBlabla](https://geeksblabla.community/).

> Empowering Flutter developers in Morocco: building cross-platform apps, sharing knowledge, and growing the community.

## Tech stack

- **[Astro 7](https://astro.build)** — static-first, near-zero JS, excellent SEO.
- **[Tailwind CSS 4](https://tailwindcss.com)** — CSS-first design tokens (`@theme`), class-based dark mode.
- **[Lucide](https://lucide.dev) (`@lucide/astro`)** — icons.
- **TypeScript (strict)** — typed content data.

## Getting started

```bash
npm install
npm run dev        # http://localhost:4321
```

Build & preview the production output:

```bash
npm run build      # → dist/
npm run preview    # serve dist/
npm run check      # astro + TypeScript diagnostics
```

## Project structure

See **[PROJECT_MAP.md](./PROJECT_MAP.md)** for the full architecture, data flow, and roadmap.

```
src/
├─ config/site.ts     # identity, navigation, social links (single source of truth)
├─ data/              # typed content: mission, episodes, projects, events
├─ lib/               # logger + formatting helpers
├─ styles/global.css  # Tailwind theme + component classes
├─ layouts/           # BaseLayout (SEO, theme, nav, footer)
├─ components/        # Navbar, Footer, cards, newsletter, …
└─ pages/             # /, /about, /podcast, /projects, /events, /contribute, /guidelines, 404
```

## Configuration

### Newsletter

The subscription form posts JSON to an endpoint you provide. Create `.env` from `.env.example`:

```bash
PUBLIC_NEWSLETTER_ENDPOINT="https://your-form-service.example/api/subscribe"
```

Works with any service that accepts `POST { "email": "..." }` (e.g. a Tally/ConvertKit/Buttondown webhook, or your own function). If unset, the form shows a friendly fallback message instead of failing.

### Site identity & links

Edit `src/config/site.ts` to update the name, tagline, navigation, email, and the Instagram / GitHub / LinkedIn / YouTube / GDG links. Update the production domain in **both** `astro.config.mjs` (`site`) and `src/config/site.ts`.

## Editing content

All content is plain typed data — no CMS required:

- `src/data/episodes.ts` — podcast episodes.
- `src/data/projects.ts` — open-source projects.
- `src/data/events.ts` — meetups & events (upcoming vs past is computed from the date).
- `src/data/mission.ts` — stats and mission pillars.

## Deploy

Static output — deploy `dist/` anywhere (Netlify, Vercel, Cloudflare Pages, GitHub Pages). Set `site` in `astro.config.mjs` first so canonical URLs and the sitemap are correct.

---

Made with ❤️ in Morocco.
