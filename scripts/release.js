const { execSync } = require('child_process');
const version = process.argv[2];
if (!version) { console.error('Usage: node release.js <tag>'); process.exit(1); }
execSync('git add -A', { stdio: 'inherit' });
execSync(`git commit -m "Release ${version}`", { stdio: 'inherit' });
execSync(`git tag ${version}` , { stdio: 'inherit' });
execSync('git push && git push --tags', { stdio: 'inherit' });
console.log('Release pushed');
