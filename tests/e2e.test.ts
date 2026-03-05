import { test, expect } from '@playwright/test';

test('HTTPS, performance & CDN validation', async ({ page }) => {
  const siteUrl = process.env.SITE_URL;
  expect(siteUrl).toBeTruthy();
  expect(siteUrl.startsWith('https://')).toBeTruthy();

  const response = await page.goto(siteUrl, { waitUntil: 'networkidle' });
  expect(response).not.toBeNull();

  // Measure load time using the Navigation Timing API
  const timingJson = await page.evaluate(() => JSON.stringify(window.performance.timing));
  const timing = JSON.parse(timingJson);
  const loadTime = timing.loadEventEnd - timing.navigationStart;
  // Assert load time < 200 ms (allow small margin)
  expect(loadTime).toBeLessThan(200);

  // Verify CDN caching headers
  const headers = response?.headers() || {};
  const cdnHeader = headers['x-azure-cache-status'] || headers['cache-control'];
  expect(cdnHeader).toBeTruthy();
});
