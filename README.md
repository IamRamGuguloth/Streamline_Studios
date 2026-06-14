# Streamline Studios — Website

Production-ready website for Streamline Studios, a product innovation studio.

## Tech Stack

- **Next.js 15** — App Router
- **TypeScript** — Full type safety
- **Tailwind CSS** — Utility-first styling with custom design tokens
- **Framer Motion** — Subtle, intentional animations

## Design System

| Token | Value |
|---|---|
| Background | `#F8F7F4` |
| Text | `#111111` |
| Secondary | `#666666` |
| Border | `#EAEAEA` |
| Accent | `#0A66FF` |
| Container | `1440px` |
| Reading width | `720px` |
| Spacing | 8px base |

Typography: Inter (production deployment should use Geist from Vercel)

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, selected work, process, studio, contact CTA |
| `/work` | Work index — all projects |
| `/work/thotha` | Thotha project — car air purifier with AQI monitoring |
| `/work/kage` | Kage project — single-sheet metal wall shelf |
| `/work/noty` | NOTY project — reusable note-taking system |
| `/process` | Process page — four principles |
| `/studio` | Studio page — capabilities, values, approach |
| `/contact` | Contact form |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deployment — GitHub Pages

This project is configured for **zero-cost, zero-config deployment directly from GitHub** — no Netlify, Vercel, or other third-party host required. It builds to a fully static `out/` folder (`output: "export"` in `next.config.ts`) and ships with a GitHub Actions workflow that deploys it automatically.

### One-time setup

1. Push this repository to GitHub (it can be a brand-new repo).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. Push to (or merge into) the `main` branch.

That's it. The workflow at `.github/workflows/deploy.yml` will:
- install dependencies
- run `npm run build` (produces the static `out/` folder)
- add a `.nojekyll` file so GitHub doesn't mangle the `_next/` asset folder
- publish `out/` to GitHub Pages

> **Optional:** this repo doesn't ship a `package-lock.json`, so the workflow uses `npm install`. If you run `npm install` locally once and commit the generated `package-lock.json`, you can switch the workflow to `npm ci` and add `cache: npm` to the setup-node step for faster, more reproducible builds — but it works fine without this.

Your site will be live at:
- `https://<your-username>.github.io/<repo-name>/` — if the repo is named anything other than `<your-username>.github.io`
- `https://<your-username>.github.io/` — if the repo is named exactly `<your-username>.github.io`

`next.config.ts` detects which case you're in automatically (via the `GITHUB_REPOSITORY` env var GitHub Actions provides) and sets the correct `basePath`/`assetPrefix` — you don't need to edit anything by hand.

### Updating the site

Just push to `main`. The workflow re-runs and redeploys automatically — there's no separate "deploy" step or external dashboard to manage.

### Local development

Local dev (`npm run dev`) is unaffected by the GitHub Pages config — it runs normally with no base path.

```bash
npm install
npm run dev
```

### Custom domain (optional)

If you want `streamlinestudios.co` instead of the `github.io` URL:
1. Add a `CNAME` file to `/public/` containing just your domain, e.g. `streamlinestudios.co`
2. Point your domain's DNS at GitHub Pages (an `A`/`ALIAS` record to GitHub's IPs, or a `CNAME` record to `<username>.github.io`)
3. Set the custom domain in **Settings → Pages**

### Migrating later (e.g. to WordPress)

Because this is a static export, the entire `out/` folder is just plain HTML/CSS/JS — it can be uploaded as-is to any static host (Netlify, S3, Cloudflare Pages, etc.) with no changes, if you ever outgrow GitHub Pages before a WordPress migration. The source code in `src/` also remains a normal Next.js project, so you can remove `output: "export"` at any point to switch to a server-rendered deployment instead.

## Production Build (local)

```bash
npm run build
```

This generates the static site in `out/`. You can preview it locally with any static file server, e.g.:

```bash
npx serve out
```

## Image Handling

All images are currently rendered as styled placeholder elements. To replace with real assets:

1. Add images to `/public/images/`
2. Replace `<ImagePlaceholder>` components with Next.js `<Image>` components
3. Update `alt` text with descriptive content

Image components are built with Next.js Image optimization in mind — all placeholder dimensions match intended final image aspect ratios.

## Component Architecture

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (nav + footer)
│   ├── page.tsx            # Homepage
│   ├── work/               # Work pages
│   ├── process/            # Process page
│   ├── studio/             # Studio page
│   └── contact/            # Contact page
├── components/
│   ├── layout/             # Navigation, Footer
│   ├── sections/           # Homepage sections
│   └── ui/                 # Reusable design system components
└── lib/                    # Utilities (future)
```

## Design Philosophy

The visual language is inspired by:
- **70% Apple** — confidence, spacious layouts, typography hierarchy
- **20% Braun** — restraint, clarity, timelessness
- **10% Teenage Engineering** — editorial storytelling, process visibility

Key decisions:
- No card grids or carousels
- Editorial alternating project layouts
- Large typography as design element
- Placeholder images match real editorial intent (not lorem ipsum boxes)
- Motion is invisible — enhances, never distracts
