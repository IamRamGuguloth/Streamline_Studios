# Image Guide

Every visual on the site is currently a styled placeholder (`<ImagePlaceholder>` or, on the homepage hero, a plain color block). Swapping in a real image is a **one-line edit per slot**: add `src` (and `alt`) — the sizing, aspect ratio, and rounded corners stay exactly as designed.

## How to swap one image

Find the placeholder in the relevant page file and add `src` + `alt`:

```tsx
// Before
<ImagePlaceholder
  aspectRatio="aspect-[21/9]"
  label="Thotha — In-car environment, dashboard context shot"
  className="rounded-xl"
/>

// After
<ImagePlaceholder
  aspectRatio="aspect-[21/9]"
  src="/images/thotha-dashboard.jpg"
  alt="Thotha mounted on a car dashboard, showing the bird in its resting state"
  className="rounded-xl"
/>
```

Once `src` is set, the `label` prop is ignored (it only shows on placeholders) — you can leave it or remove it.

For **dark** placeholders (`dark` prop), just add `src`/`alt` the same way — the dark background is also only used as a placeholder fallback.

## Homepage hero (special case)

The hero background and top-right image are plain `<div>`s, not `<ImagePlaceholder>`. To swap them, open `src/components/sections/HomepageHero.tsx` and set the two constants near the top:

```tsx
const HERO_BACKGROUND_SRC: string | null = "/images/hero-background.jpg";
const HERO_CORNER_SRC: string | null = "/images/thotha-context.jpg";
```

Leave as `null` to keep the color-block placeholder.

## Image file recommendations

- Format: `.jpg` for photos, `.png` for anything with transparency, `.webp` also works
- Place all files directly in `/public/images/`
- Reference them as `/images/filename.jpg` (no `/public` in the path)
- Aim for at least **1600px** on the longest edge for full-width images, **800px** for square/small crops
- Since `images: { unoptimized: true }` is set for static export, files are served as-is — compress them yourself before uploading (e.g. via Squoosh) to keep the site fast

---

## Full image inventory

Every slot on the site, grouped by page, with its aspect ratio and a suggested filename. You don't have to use these exact names — just match each slot to whichever photo fits.

### Homepage (`src/app/page.tsx` + `src/components/sections/`)

| Location | Aspect | Suggested filename | Notes |
|---|---|---|---|
| Hero background | full bleed | `hero-background.jpg` | Set via `HERO_BACKGROUND_SRC` |
| Hero corner image | ~48% × 75% | `thotha-context.jpg` | Set via `HERO_CORNER_SRC` |
| Selected Work — Thotha | 16:10 | `thotha-selected.jpg` | `SelectedWork.tsx`, in `projects` array |
| Selected Work — Kage | 16:9 | `kage-selected.jpg` | `SelectedWork.tsx`, in `projects` array |
| Selected Work — NOTY | 4:3 | `noty-selected.jpg` | `SelectedWork.tsx`, in `projects` array |
| Studio Intro — main | 3:4 | `studio-workshop.jpg` | `StudioIntro.tsx` |
| Studio Intro — detail (dark) | square | `studio-detail.jpg` | `StudioIntro.tsx` |

> **Note on `SelectedWork.tsx` and `work/page.tsx`:** these render from a `projects` array. Add an `image: "/images/..."` field to each project object, then pass it to `<ImagePlaceholder src={project.image} alt={project.title} ... />`.

### Work index (`src/app/work/page.tsx`)

| Project | Aspect | Suggested filename |
|---|---|---|
| Thotha | 16:9 | `thotha-index.jpg` |
| Kage | 4:3 | `kage-index.jpg` |
| NOTY | 16:10 | `noty-index.jpg` |

### Thotha (`src/app/work/thotha/page.tsx`)

| Section | Aspect | Suggested filename |
|---|---|---|
| Hero | 21:9 | `thotha-hero.jpg` |
| The Problem — AQI data | 4:3 | `thotha-aqi-data.jpg` |
| Behavioral state — clean | 3:4 | `thotha-state-clean.jpg` |
| Behavioral state — moderate | 3:4 | `thotha-state-moderate.jpg` |
| Behavioral state — poor (dark) | 3:4 | `thotha-state-poor.jpg` |
| CAD — form development (dark) | 4:3 | `thotha-cad.jpg` |
| Physical prototype | 4:3 | `thotha-prototype.jpg` |
| Material study | 4:3 | `thotha-material.jpg` |
| PCB (dark) | 16:9 | `thotha-pcb.jpg` |
| Sensor cluster (dark) | square | `thotha-sensors.jpg` |
| Servo assembly (dark) | square | `thotha-servo.jpg` |
| Beta unit in field | 4:3 | `thotha-beta.jpg` |
| Companion app | 9:16 | `thotha-app.jpg` |

### Kage (`src/app/work/kage/page.tsx`)

| Section | Aspect | Suggested filename |
|---|---|---|
| Hero | 21:9 | `kage-hero.jpg` |
| Flat blank, pre-bend (dark) | 4:3 | `kage-flat-blank.jpg` |
| DXF cut file (dark) | 4:3 | `kage-dxf.jpg` |
| Blank, post-cut | 4:3 | `kage-blank.jpg` |
| Press brake sequence (dark) | 16:9 | `kage-pressbrake.jpg` |
| Bend detail | 16:9 | `kage-bend-detail.jpg` |
| Prototypes 1–6 (grid) | square × 6 | `kage-proto-1.jpg` … `kage-proto-6.jpg` |
| Final finish, matte black (dark) | 4:5 | `kage-final.jpg` |

### NOTY (`src/app/work/noty/page.tsx`)

| Section | Aspect | Suggested filename |
|---|---|---|
| Hero | 21:9 | `noty-hero.jpg` |
| Write state | 3:4 | `noty-write.jpg` |
| Erase state | 3:4 | `noty-erase.jpg` |
| Material study | 16:9 | `noty-material.jpg` |
| Surface texture, magnified (dark) | 16:9 | `noty-texture.jpg` |
| Packaging / unboxing | 4:3 | `noty-packaging.jpg` |
| Size — Small | square | `noty-small.jpg` |
| Size — Standard | square | `noty-standard.jpg` |
| Size — Large | square | `noty-large.jpg` |

### Process (`src/app/process/page.tsx`)

| Section | Aspect | Suggested filename |
|---|---|---|
| Field observation | 4:3 | `process-observation.jpg` |
| Prototype documentation | 16:9 | `process-prototype-doc.jpg` |
| Load test (dark) | 16:9 | `process-loadtest.jpg` |
| Iteration wall | 4:3 | `process-iterations.jpg` |

### Studio (`src/app/studio/page.tsx`)

| Section | Aspect | Suggested filename |
|---|---|---|
| Workshop, wide | 21:9 | `studio-hero.jpg` |
| PCB testing (dark) | 16:9 | `studio-pcb.jpg` |
| Prototype review | 16:9 | `studio-review.jpg` |

---

## Don't have a photo for a slot yet?

Leave it as `<ImagePlaceholder aspectRatio="..." label="..." />` with no `src` — it'll keep rendering the quiet color-block placeholder, so the layout stays correct while you fill things in gradually.
