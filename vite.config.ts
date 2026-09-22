import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import type { Plugin } from 'vite';

/** Fills %SITE_URL% in index.html and emits robots.txt + sitemap.xml at build time,
 * so the canonical domain lives in one env var (SITE_URL) instead of several files. */
function seoFiles(siteUrl: string): Plugin {
  return {
    name: 'seo-files',
    transformIndexHtml: (html) => html.replaceAll('%SITE_URL%', siteUrl),
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`,
      });
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`,
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  // No VITE_ prefix on purpose: these are read here (Node) only and are never
  // exposed to the browser bundle, so the real backend URL / key stay private.
  const env = loadEnv(mode, process.cwd(), '');

  const siteUrl = (env.SITE_URL || 'https://www.teiltd.in').replace(/\/+$/, '');

  const proxy: Record<string, object> = {};
  if (env.CATALOG_API_URL) {
    const target = new URL(env.CATALOG_API_URL);
    proxy['/api/catalog'] = {
      target: target.origin,
      changeOrigin: true,
      rewrite: () => `${target.pathname}${target.search}`,
      // Supabase expects the anon key in both `apikey` and `Authorization`.
      headers: env.CATALOG_API_KEY ? { apikey: env.CATALOG_API_KEY, Authorization: `Bearer ${env.CATALOG_API_KEY}` } : undefined,
    };
  }

  return {
    plugins: [react(), seoFiles(siteUrl)],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, './src'),
      },
    },
    server: { proxy },
    preview: { proxy },
  };
});
