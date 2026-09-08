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

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build
```
