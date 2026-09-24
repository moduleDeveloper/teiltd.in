import express from 'express';
import path from 'node:path';
import fs from 'node:fs';

const PORT = Number(process.env.PORT) || 5000;
const { CATALOG_API_URL, CATALOG_API_KEY, CATALOG_TRUST_ID } = process.env;
/** Argument name of the get_products_by_trust_id function — change if your SQL function names it differently. */
const TRUST_ID_PARAM = 'p_trust_id';

const DIST_DIR = path.resolve(import.meta.dirname, '../frontend/dist');

const app = express();
app.disable('x-powered-by');

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

/** The only call the proxy allows. The trust id is pinned here on the server and the
 * client's request body is ignored, so callers cannot query other trusts with our key. */
app.post('/api/catalog', async (_req, res) => {
  if (!CATALOG_API_URL || !CATALOG_API_KEY || !CATALOG_TRUST_ID) {
    res.status(500).json({ error: 'Catalog API is not configured on the server.' });
    return;
  }
  try {
    const upstream = await fetch(CATALOG_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        // Supabase expects the anon key in both `apikey` and `Authorization`.
        apikey: CATALOG_API_KEY,
        Authorization: `Bearer ${CATALOG_API_KEY}`,
      },
      body: JSON.stringify({ [TRUST_ID_PARAM]: CATALOG_TRUST_ID }),
      signal: AbortSignal.timeout(10_000),
    });
    res.status(upstream.status).type('application/json').send(await upstream.text());
  } catch (err) {
    console.error('Catalog request failed:', err);
    res.status(502).json({ error: 'Catalog service unavailable.' });
  }
});

app.use('/api', (_req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// In production the same server also serves the built frontend (single deployable).
if (fs.existsSync(DIST_DIR)) {
  app.use(express.static(DIST_DIR));
  app.get('/{*splat}', (_req, res) => {
    res.sendFile(path.join(DIST_DIR, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});
