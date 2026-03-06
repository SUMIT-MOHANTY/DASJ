const request = require('supertest');
const app = require('../../src/app');
describe('Books API integration', () => {
  it('GET /api/books should return 200 and JSON array', async () => {
    const res = await request(app).get('/api/books');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
