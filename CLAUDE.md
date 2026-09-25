# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Juan Ducuara, built with React 18 and Create React App. The site showcases work experience, a featured case study, skills, education, and contact links, in Spanish and English. Deployed to GitHub Pages.

## Commands

- `npm start` - Run development server
- `npm run build` - Create production build
- `npm test` - Run tests (Jest with React Testing Library)
- `npm run deploy` - Build and deploy to GitHub Pages (uses gh-pages)

Pushing to `master` also triggers `.github/workflows/deploy.yml`, which builds and publishes to GitHub Pages. It runs with `CI=true`, so any ESLint warning fails the build — verify with `CI=true npm run build` before pushing.

## Architecture

### Component Structure

The app follows a section-based layout in `src/App.jsx`, ordered for recruiters:
- **Navbar** - Navigation, ES/EN toggle and mobile menu (`MobileNav`)
- **Hero** - Name, role, summary, quick facts, CV download and social links
- **WorkExperience** - Vertical timeline of `ExperienceCard`s (highlights + expandable responsibilities + stack chips)
- **ProyectosDestacados** - `CaseStudy` (featured confidential project) + `ProyectoCard` (grouped smaller projects)
- **Skills** - Grid of `SkillCard` categories with chips; `core: true` marks daily production use
- **EstudiosRealizados** - Education cards grid
- **ContactMe** - Direct link cards (mailto, LinkedIn, GitHub, CV). There is no contact form on purpose (GitHub Pages can't process POSTs).
- **Footer** - Page footer

### Data Management and i18n

All content lives in `src/utils/data.js`:
- `PROFILE` - Language-neutral data (name, email, links, CV path, photo)
- `HERO_TECH_ICONS` - Icons shown around the hero photo
- `CONTENT.es` / `CONTENT.en` - All translatable content and UI strings. Both must keep the exact same shape; a test in `src/App.test.js` enforces it.

`src/context/LanguageContext.jsx` provides `useLanguage()` → `{ lang, toggleLang, t }`, where `t` is `CONTENT[lang]`. The choice is persisted in `localStorage` and sets `<html lang>`.

### Component Pattern

Each major section follows the same structure:
```
src/components/[SectionName]/
├── [SectionName].jsx      # Main section component
├── [SectionName].css      # Section styles
└── [SubComponent]/        # Child components (e.g., SkillCard, ExperienceCard)
    ├── [SubComponent].jsx
    └── [SubComponent].css
```

Shared styles (`.section`, `.section-heading`, `.chip`, `.btn-*`, `.icon-light`) are in `src/App.css`; design tokens (CSS variables) in `src/index.css`.

### Static Assets

Images and icons are stored in `public/assets/images/` (tech SVGs in `tech/`) and referenced with relative paths from the public root (e.g., `./assets/images/juan-ducuara.jpg`). The downloadable CV is `public/cv-juan-ducuara.pdf` — it must not contain ID number, address, phone or age.

## Key Libraries

- **gh-pages** - GitHub Pages deployment
- **Material Icons** (Google Fonts, loaded in `public/index.html`) - UI icons
