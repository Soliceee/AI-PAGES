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
- **Do NOT add `wrangler.toml`** — it overrides Pages auto-detection and breaks the build
- Bind custom domain in Cloudflare Pages dashboard → your domain

## Architecture

- Terminal-styled single-page UI: type commands (`about`, `banner`, `whoami`, `date`, `help`, `clear`) for content
- Main component in `src/Terminal.jsx` — edit command outputs, ASCII banner, and social links there
- Blue-purple terminal theme with `:root` CSS custom properties in `src/App.css`
- No routing library — all interaction is command-based

## Notes

- Update ASCII banner in `src/Terminal.jsx` (the `BANNER` const)
- Update GitHub/social link in `src/Terminal.jsx` (the `aboutText` const)
- To add new commands, add a `case` in the `processCommand` switch statement
