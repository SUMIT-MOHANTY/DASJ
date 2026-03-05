const request = require('supertest');
const express = require('express');
const { authenticateToken } = require('../../src/middlewares/auth');
const jwt = require('jsonwebtoken');

const app = express();
app.get('/protected', authenticateToken, (req, res) => res.json({ user: req.user }));

describe('authenticateToken middleware', () => {
  const secret = 'your-secret-key';
  beforeAll(() => { process.env.JWT_SECRET = secret; });

  test('allows request with valid token', async () => {
    const token = jwt.sign({ email: 'test@example.com' }, secret);
    const res = await request(app)
      .get('/protected')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.user.email).toBe('test@example.com');
  });

  test('rejects missing Authorization header', async () => {
    const res = await request(app).get('/protected');
    expect(res.statusCode).toBe(401);
    expect(res.body.error).toBe('Invalid or missing token');
  });

  test('rejects malformed token', async () => {
    const res = await request(app)
      .get('/protected')
      .set('Authorization', 'Bearer malformed');
    expect(res.statusCode).toBe(401);
    expect(res.body.error).toBe('Invalid or missing token');
  });

  test('rejects token with invalid signature', async () => {
    const badToken = jwt.sign({ email: 'bad' }, 'wrong-secret');
    const res = await request(app)
      .get('/protected')
      .set('Authorization', `Bearer ${badToken}`);
    expect(res.statusCode).toBe(401);
    expect(res.body.error).toBe('Invalid or missing token');
  });
});
