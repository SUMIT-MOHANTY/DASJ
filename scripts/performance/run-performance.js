const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const PERF_BUDGET_MS = 200;
async function run() {
  const url = process.env.PERF_PLACEHOLDER_URL;
  if (!url) {
    console.error('[PERF] Error: PERF_PLACEHOLDER_URL not set');
    process.exit(1);
  }
  const outDir = path.resolve(__dirname, '../../docs/performance');
  fs.mkdirSync(outDir, { recursive: true });
  const htmlReport = path.join(outDir, 'lighthouse-report.html');
  const jsonReport = path.join(outDir, 'lighthouse-report.json');
  let useLighthouse = true;
  try { execSync('lighthouse --version', { stdio: 'ignore' }); }
  catch (e) { useLighthouse = false; }
  if (useLighthouse) {
    console.log('[PERF] Running Lighthouse...');
    const configPath = path.resolve(__dirname, 'lighthouse.config.js');
    const cmd = `lighthouse ${url} --output=json --output=html --output-path=${jsonReport} --output-path=${htmlReport} --config-path=${configPath}`;
    try { execSync(cmd, { stdio: 'inherit' }); }
    catch (e) { console.error('[PERF] Lighthouse failed'); process.exit(1); }
  } else {
    console.warn('[PERF] Lighthouse not available, fallback to WebPageTest (not implemented).\n[PERF] Please provide a valid API key and implement fallback.');
    process.exit(1);
  }
  const result = JSON.parse(fs.readFileSync(jsonReport, 'utf-8'));
  const fcp = result.lhr?.audits?.['first-contentful-paint']?.numericValue;
  const lcp = result.lhr?.audits?.['largest-contentful-paint']?.numericValue;
  let validationMsg = '';
  if (fcp && fcp > PERF_BUDGET_MS) validationMsg += `FCP ${Math.round(fcp)}ms exceeds ${PERF_BUDGET_MS}ms\n`;
  if (lcp && lcp > PERF_BUDGET_MS) validationMsg += `LCP ${Math.round(lcp)}ms exceeds ${PERF_BUDGET_MS}ms\n`;
  if (validationMsg) {
    console.warn('[PERF] Performance budget exceeded');
    fs.writeFileSync(path.join(outDir, 'validation.txt'), validationMsg);
  }
  console.log(`[PERF] Summary: FCP=${Math.round(fcp)}ms, LCP=${Math.round(lcp)}ms`);
}
run();
