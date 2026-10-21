/** Tiny JSON POST helper on top of the browser's built-in `fetch` (replaces axios,
 * which was ~13 KB gzipped for this one call). It only ever talks to same-origin
 * paths; the real backend URL (and any API key) lives server-side in the proxy,
 * never in this bundle. Rejects on non-2xx responses and after `timeout` ms. */
export async function postJson(url, body, { signal, timeout = 12_000 } = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(new DOMException('Request timed out', 'TimeoutError')), timeout);
  const onAbort = () => controller.abort(signal.reason);
  signal?.addEventListener('abort', onAbort, { once: true });

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
    return await res.json();
  } finally {
    clearTimeout(timer);
    signal?.removeEventListener('abort', onAbort);
  }
}
