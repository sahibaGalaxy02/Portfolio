# Sahiba Shaikh — Portfolio

A one-page portfolio built with React, Vite, Tailwind CSS v4, and real
components from [React Bits](https://reactbits.dev), populated from
Sahiba's resume and pinned GitHub repos (sahibaGalaxy02).

## Design direction

Deliberately different from a dark/amber "systems" look — this one leans
into a light, editorial feel that fits a UI/UX-and-data-minded developer:

- `--color-paper` (#f7f5fb) — near-white lavender background
- `--color-violet` (#6c5ce7) — primary accent
- `--color-mint` (#1f9c82) — secondary accent, used in the hero aurora
- Fonts: Fraunces (italic serif display), Work Sans (body), JetBrains Mono (labels/data)

## React Bits components used

| Component | Used for | Depends on |
|---|---|---|
| `SplitText` | Hero headline | `gsap`, `@gsap/react` |
| `ShinyText` | Accent phrase in hero copy | `motion` |
| `Aurora` (light mode) | Soft hero background wash | `ogl` |
| `DecryptedText` | Section headings, decrypt-in on scroll | `motion` |
| `CountUp` | Real resume metrics on the Yummy Restaurant card (100% responsive, 50% UI/UX improvement, etc.) | `motion` |
| `SpotlightCard` | Featured project cards | none |
| `LogoLoop` | Pausable skills marquee | none |
| `Magnet` | Nav links + CTA buttons | none |
| `ClickSpark` | Click feedback across the page | none |

## Content sources

- Resume: name, summary, skills, IdeaBank + Yummy Restaurant project detail
  (including the quantified metrics), education, certifications, contact.
- GitHub (sahibaGalaxy02): pinned repos HelpCity, Taskflow, and
  Watch-Together, listed under "More builds" since the resume doesn't
  detail them — add bullets for these in `src/data/content.js` once you
  have specifics to share.

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build
```

## Next steps

- Swap in a live-preview link for IdeaBank if one exists (resume mentions
  one but doesn't give the URL).
- Add detail bullets for HelpCity, Taskflow, and Watch-Together once
  you're ready to write them up as full case studies.
- Add a LinkedIn/GitHub icon set instead of text links in the footer, if desired.
