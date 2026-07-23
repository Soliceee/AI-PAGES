# AGENTS.md

Star particle effect site built with Vite + React + tsParticles, deployed on Cloudflare Pages.

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

- Full-screen star particle effect using tsParticles
- Static stars (no movement) with random colors fill the screen
- Mouse hover generates trail stars that fade out
- All configuration in `src/StarBackground.jsx`

## Notes

- Edit particle config in `src/StarBackground.jsx` (`options` object)
- Background color set to `#0a0a14` in the same file
- `src/Terminal.jsx` is unused legacy code
