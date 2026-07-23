# AGENTS.md

Star particle effect site built with Vite + canvas-nest.js, deployed on Cloudflare Pages.

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
- **Do NOT add `wrangler.toml`** — it overrides Pages auto-detection and breaks the build
- Bind custom domain in Cloudflare Pages dashboard → your domain

## Architecture

- Full-screen interactive particle nest effect using canvas-nest.js
- White particles connect with lines when near each other; mouse attracts nearby particles
- All configuration in `src/App.jsx`

## Notes

- Edit particle config in `src/App.jsx`: `color`, `pointColor`, `opacity`, `count`, `zIndex`
- Background color set via inline style on the container div
