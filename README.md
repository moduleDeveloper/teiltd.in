# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

## Catalog API (Plans section)

The Plans section loads live products from a Supabase RPC (`get_products_by_trust_id`) with axios.
Only **active** products / prices / features are shown (`status === 'active'`).

The browser never talks to Supabase directly. It POSTs `{ "p_trust_id": "<id>" }` to the same-origin path
`/api/catalog`, and a proxy forwards that to Supabase and adds the `apikey` + `Authorization` headers.
The backend URL and key have no `VITE_` prefix, so they are never bundled into the browser code.

### Environment variables

Copy `.env.example` to `.env` and fill it in (restart `npm run dev` after any change).

| Variable | Where | Purpose |
|---|---|---|
| `CATALOG_API_URL` | server only | Full Supabase RPC URL |
| `CATALOG_API_KEY` | server only | Supabase **anon** key (never the `service_role` key) |
| `VITE_CATALOG_ENDPOINT` | client | Same-origin path, `/api/catalog` |
| `VITE_CATALOG_TRUST_ID` | client | Trust id sent as `p_trust_id` |
| `VITE_FEATURED_PRODUCT_CODE` | client, optional | `product_code` to badge "Most chosen" |

### Proxy

- **Dev / `vite preview`**: `vite.config.ts` proxies `/api/catalog` to `CATALOG_API_URL`.
- **Production**: a static build has no proxy, so configure the same on your host. Example (nginx):

  ```nginx
  location = /api/catalog {
    proxy_pass https://<project-ref>.supabase.co/rest/v1/rpc/get_products_by_trust_id;
    proxy_set_header apikey "<anon-key>";
    proxy_set_header Authorization "Bearer <anon-key>";
    proxy_set_header Host <project-ref>.supabase.co;
    proxy_ssl_server_name on;
  }
  ```

  Vercel/Netlify: use a rewrite, or a small serverless function. In production, pin `p_trust_id`
  on the server so callers cannot query other trusts through your proxy.
