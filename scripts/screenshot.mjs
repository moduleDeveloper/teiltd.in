import { chromium } from 'playwright';

const url = process.argv[2] || 'http://localhost:5183/';
const out = process.argv[3] || 'scratch-screenshot.png';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
const errors = [];
page.on('console', (msg) => {
  if (msg.type() === 'error') errors.push(msg.text());
});
page.on('pageerror', (err) => errors.push(String(err)));

await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(500);

// Scroll through the whole page in viewport-sized steps so IntersectionObserver
// reveal animations actually fire, matching how a real visitor would see it.
const height = await page.evaluate(() => document.body.scrollHeight);
const step = 900;
for (let y = 0; y < height; y += step) {
  await page.evaluate((y) => window.scrollTo(0, y), y);
  await page.waitForTimeout(250);
}
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(500);

await page.screenshot({ path: out, fullPage: true });
await browser.close();

console.log('Saved', out);
if (errors.length) {
  console.log('Console errors:');
  errors.forEach((e) => console.log(' -', e));
}
