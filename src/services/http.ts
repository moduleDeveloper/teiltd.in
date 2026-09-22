import axios from 'axios';

/** Shared axios instance. It only ever talks to same-origin paths; the real backend
 * URL (and any API key) lives server-side in the proxy, never in this bundle. */
export const http = axios.create({
  timeout: 12_000,
  headers: { Accept: 'application/json' },
});
