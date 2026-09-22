import { chromium } from 'playwright';

const url = process.argv[2] || 'http://localhost:5183/';
const outPrefix = process.argv[3] || 'scratch';
const widths = [1440, 1000, 800, 380];

const browser = await chromium.launch();
for (const width of widths) {
  const page = await browser.newPage({ viewport: { width, height: 1000 } });
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(400);
  const height = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < height; y += 900) {
    await page.evaluate((y) => window.scrollTo(0, y), y);
    await page.waitForTimeout(150);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${outPrefix}-${width}.png`, fullPage: true });
  await page.close();
  console.log('Saved', `${outPrefix}-${width}.png`);
}
await browser.close();
