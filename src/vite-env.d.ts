/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Same-origin path the browser calls for the catalog (proxied to the real backend). */
  readonly VITE_CATALOG_ENDPOINT?: string;
  /** Trust id passed to the get_products_by_trust_id RPC. */
  readonly VITE_CATALOG_TRUST_ID?: string;
  /** Optional product_code to highlight as "Most chosen". */
  readonly VITE_FEATURED_PRODUCT_CODE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
