# AGENTS.md

Personal homepage built with Vite + React, deployed on Cloudflare Pages.

## Commands

```sh
npm run dev      # development server at localhost:5173
npm run build    # production build → dist/
npm run preview  # preview production build locally
npm run lint     # oxlint
```

## Cloudflare Pages Deployment

- **Build command:** `npm run build`
- **Output directory:** `dist`
- Dashboard auto-detects Vite; or use `npx wrangler pages deploy dist/`
- Bind custom domain in Cloudflare Pages dashboard → your domain

## Architecture

- Single-page layout: Hero → About → Projects → Contact
- CSS custom properties with `prefers-color-scheme` dark mode
- All content in `src/App.jsx` — edit arrays (`skills`, `projects`, `socialLinks`) for personalization
- Sticky nav with smooth scroll (hash links on same page)

## Notes

- No routing library — sections use anchor IDs
- `public/_redirects` serves all paths via index.html (for future SPA routing)
- Update `index.html` title, `public/favicon.svg`, and social links for your brand
