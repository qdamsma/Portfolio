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

React 19 + Vite 8 portfolio site. Routing via `react-router-dom` (`createBrowserRouter`). Styling uses SCSS (compiled by Vite via the `sass` package). Tech icons via `react-icons/si` (Simple Icons).

### Entry points

- `src/main.jsx` — router setup and root render
- `src/App.jsx` — shell with header/nav, renders `<Outlet />`
- `src/index.scss` — global styles and CSS custom properties
- `src/App.scss` — header/nav styles

### Routes

| Path | Component |
|------|-----------|
| `/` | `src/paginas/Home.jsx` |
| `/over-mij` | `src/paginas/OverMij.jsx` |
| `/projecten` | `src/paginas/Projecten.jsx` |
| `/contact` | `src/paginas/Contact.jsx` |
| `*` | `src/paginas/NietGevonden.jsx` |

### Components

- `src/components/SlipperigePad.jsx` — interactive puzzle game (keyboard + button controls)
- `src/components/PuzzelsSectie.jsx` — wrapper that renders SlipperigePad with puzzle data

### Assets

- `src/assets/overmij/` — photos used on the Over Mij page
- `src/assets/projecten/` — screenshots used on the Projecten page

### Conventions

- SCSS files are co-located with their page/component and imported directly in JSX
- BEM naming: `blok__element--modifier`
- All user-visible text is in Dutch
- CSS custom properties are defined in `src/index.scss` (colors, font sizes, weights)
