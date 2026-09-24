# SETU AI

Marketing site (React + Vite + Tailwind) with a small Express backend that proxies the
catalog API.

```
.github/workflows/deploy.yml   CI: lint, test, build
backend/                       Express server (server.js): /api/* + serves frontend/dist in production
frontend/                      Vite app
  public/                      static files copied as-is
  scripts/                     asset extraction + Playwright screenshot scripts
  src/
    App.tsx, App.css           router + site styles
    components/ui/             reusable primitives (buttons, links, reveal, nav item, ...)
    components/layout/         Navbar, Footer
    components/sections/       page sections
    hooks/                     React hooks
    lib/                       config, data, services, types, utils, routes
    pages/                     route pages
    test/                      Vitest tests
```

## Getting started

```bash
npm install                     # installs both workspaces
cp backend/.env.example backend/.env    # fill in Supabase values
cp frontend/.env.example frontend/.env
npm run dev                     # backend on :5000, Vite on :5173 (proxies /api)
```

| Command | What it does |
|---|---|
| `npm run dev` | backend (watch) + Vite dev server |
| `npm run build` | builds `frontend/dist` |
| `npm start` | runs the backend, which also serves `frontend/dist` |
| `npm test` | Vitest |
| `npm run lint` | oxlint |

## Catalog API (Plans section)

The Plans section loads live products from a Supabase RPC (`get_products_by_trust_id`).
Only **active** products / prices / features are shown (`status === 'active'`).

The browser never talks to Supabase directly. It POSTs to the same-origin path `/api/catalog`;
`backend/server.js` forwards that to Supabase with the `apikey` + `Authorization` headers and the
trust id **pinned on the server**, so callers cannot query other trusts through the proxy.

### Environment variables

| Variable | File | Purpose |
|---|---|---|
| `PORT` | backend/.env | Backend port (default 5000) |
| `CATALOG_API_URL` | backend/.env | Full Supabase RPC URL |
| `CATALOG_API_KEY` | backend/.env | Supabase **anon** key (never the `service_role` key) |
| `CATALOG_TRUST_ID` | backend/.env | Trust id sent as `p_trust_id` |
| `SITE_URL` | frontend/.env | Public domain (canonical, sitemap, Open Graph) |
| `BACKEND_URL` | frontend/.env | Where Vite dev/preview proxies `/api` (default `http://localhost:5000`) |
| `VITE_CATALOG_ENDPOINT` | frontend/.env | Same-origin path, `/api/catalog` |
| `VITE_FEATURED_PRODUCT_CODE` | frontend/.env | Optional `product_code` to badge "Most chosen" |
