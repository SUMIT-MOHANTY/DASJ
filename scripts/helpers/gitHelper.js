module.exports = { exec: (cmd) => require('child_process').execSync(cmd, { stdio: 'inherit' }) };
