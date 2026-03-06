const jwt = require('jsonwebtoken');

async function login(req, res) {
  const { email, password } = req.body || {};
  if (!email || !password) {
    return res.status(400).json({ error: 'Invalid credentials' });
  }
  // Mock validation - accept any non‑empty email/password
  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return res.status(200).json({ token });
}

module.exports = { login };
