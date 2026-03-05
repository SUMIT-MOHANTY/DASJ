const fs = require('fs');
const path = require('path');

// Locate the JSON result from Playwright (default name)
const resultPath = path.resolve('test-results.json');

let summary = '';
if (fs.existsSync(resultPath)) {
  const raw = fs.readFileSync(resultPath, 'utf8');
  const data = JSON.parse(raw);
  const total = data?.suites?.[0]?.specs?.reduce((c, s) => c + (s.tests?.length ?? 0), 0) || 0;
  const passed = data?.suites?.[0]?.specs?.reduce((c, s) => c + (s.tests?.filter(t => t.status === 'expected').length || 0), 0) || 0;
  const failed = total - passed;
  summary = `**Total tests:** ${total}\n**Passed:** ${passed}\n**Failed:** ${failed}`;
} else {
  summary = '_No Playwright JSON result found - the test may have failed to run._';
}

const reportContent = `# End‑to‑End Deployment Test Report\n\n## Overview\nThe CI job validates that the deployed static site is served over HTTPS, loads in under 200 ms, and is cached by Azure CDN.\n\n## Results\n${summary}\n`;

const reportPath = path.resolve('reports', 'e2e-report.md');
fs.writeFileSync(reportPath, reportContent);
console.log('[REPORT] Written to', reportPath);
