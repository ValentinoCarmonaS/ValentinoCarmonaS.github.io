# Valentino Carmona — Portfolio

**Live:** [valentinocarmonas.github.io](https://valentinocarmonas.github.io/)

Personal portfolio of Valentino Carmona — Computer Engineering student at FIUBA/UBA, focused on Backend Software Engineering.

## Stack

- HTML5 · Vanilla CSS · Vanilla JavaScript
- No frameworks. No build tools. No dependencies.
- Hosted on GitHub Pages (`main` / root).

## Structure

```
.
├── index.html          # Entry point
├── .nojekyll           # Disables Jekyll on GitHub Pages
├── css/
│   ├── tokens.css      # Design system tokens (colors, type, spacing)
│   ├── base.css        # Reset, browser surfaces, .page container, reveal classes
│   ├── hero.css        # Hero section styles
│   └── about.css       # About / Engineering Identity section styles
├── js/
│   ├── hero.js         # Staggered reveal animation (vanilla, no deps)
│   └── scroll-reveal.js  # Intersection Observer reveal for all sections
├── img/
│   ├── valentino-carmona.png   # Professional portrait (Hero)
│   ├── about-identity.png      # Illustration (About section)
│   └── og-preview.png          # Social preview image (add before deploying)
└── docs/
    ├── valentino_carmona_cv_en.pdf   # CV — English version
    └── valentino_carmona_cv_es.pdf   # CV — Spanish version
```

## Design

**Editorial Noir / Luxury Minimal**

- Background: `#0b0b0d`
- Accent: `#c9a96e` (warm gold)
- Display font: EB Garamond (italic)
- Body font: Geist
- Label font: DM Mono

## Sections (in progress)

- [x] Hero — Introduction
- [x] About / Engineering Identity
- [ ] Engineering Profile
- [ ] Selected Projects
- [ ] Personal Backend Projects
- [ ] Engineering Practices
- [ ] Algorithms
- [ ] Education
- [ ] Contact

## Before deploying

1. Drop `valentino_carmona_cv_en.pdf` and `valentino_carmona_cv_es.pdf` into `docs/`
2. Add `og-preview.png` (1200×630) into `img/`
3. Push `main` → GitHub Pages auto-deploys

## License

All rights reserved. Source visible for reference only.