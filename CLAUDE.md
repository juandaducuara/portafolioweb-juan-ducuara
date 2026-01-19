# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Juan Ducuara, built with React 18 and Create React App. The site showcases skills, work experience, education, and contact information. Deployed to GitHub Pages.

## Commands

- `npm start` - Run development server
- `npm run build` - Create production build
- `npm test` - Run tests (Jest with React Testing Library)
- `npm run deploy` - Build and deploy to GitHub Pages (uses gh-pages)

## Architecture

### Component Structure

The app follows a section-based layout in `src/App.jsx`:
- **Navbar** - Navigation with mobile responsive menu (`MobileNav`)
- **Hero** - Introduction section with profile image and tech icons
- **Skills** - Interactive skill cards with selectable categories
- **EstudiosRealizados** - Education/studies section with timeline cards
- **WorkExperience** - Work history with experience cards
- **ContactMe** - Contact form and info cards
- **Footer** - Page footer

### Data Management

All content data (skills, work experience, education) is centralized in `src/utils/data.js` as exported constants:
- `SKILLS` - Array of skill categories with nested skill items and percentages
- `WORK_EXPERIENCE` - Array of job positions with responsibilities
- `ESTUDIOS_REALIZADOS` - Array of education entries

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

### Static Assets

Images and icons are stored in `public/assets/images/` and referenced with relative paths from the public root (e.g., `./assets/images/java.png`).

## Key Libraries

- **react-bootstrap** - UI components
- **react-slick** + **slick-carousel** - Carousel/slider functionality
- **gh-pages** - GitHub Pages deployment
