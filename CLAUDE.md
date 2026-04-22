# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (Vite)
npm run build    # Production build
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

React 19 + Vite 8 single-page portfolio site. No routing library — the app is a single page. Styling uses SCSS (compiled by Vite via the `sass` package).

- `src/main.jsx` — entry point, mounts `<App />` into `#root`
- `src/App.jsx` — root component, composes all page sections
- `src/index.scss` — global styles and CSS custom properties
- `src/App.scss` — component-scoped styles for App

SCSS files are imported directly in JSX (`import './App.scss'`). Vite handles compilation automatically — no separate build step needed.

All user-visible text is in Dutch.
