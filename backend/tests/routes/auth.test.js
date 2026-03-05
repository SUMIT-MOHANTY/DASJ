const request = require('supertest');
const app = require('../../src/app');
const jwt = require('jsonwebtoken');

describe('POST /api/auth/login', () => {
  beforeAll(() => { process.env.JWT_SECRET = 'your-secret-key'; });

  test('successful login returns token', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'user@example.com', password: 'secret' });
    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
    const decoded = jwt.verify(res.body.token, process.env.JWT_SECRET);
    expect(decoded.email).toBe('user@example.com');
  });

  test('missing fields return 400', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: '' });
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe('Invalid credentials');
  });
});
