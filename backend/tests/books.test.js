const request = require('supertest');
const jwt = require('jsonwebtoken');
const app = require('../src/app');

const token = jwt.sign({ id: 'test-user' }, process.env.JWT_SECRET || 'testsecret');

describe('Books API', () => {
  let createdId;

  test('POST /api/books - unauthorized', async () => {
    const res = await request(app).post('/api/books').send({ title: 'Test', author: 'Auth' });
    expect(res.statusCode).toBe(401);
  });

  test('POST /api/books - success', async () => {
    const res = await request(app)
      .post('/api/books')
      .set('Authorization', `Bearer ${token}`)
      .send({ title: 'Book One', author: 'Author A' });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    createdId = res.body.id;
  });

  test('GET /api/books - list', async () => {
    const res = await request(app)
      .get('/api/books')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('GET /api/books/:id - fetch', async () => {
    const res = await request(app)
      .get(`/api/books/${createdId}`)
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBe(createdId);
  });

  test('PUT /api/books/:id - update', async () => {
    const res = await request(app)
      .put(`/api/books/${createdId}`)
      .set('Authorization', `Bearer ${token}`)
      .send({ title: 'Updated Title' });
    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe('Updated Title');
  });

  test('DELETE /api/books/:id - delete', async () => {
    const res = await request(app)
      .delete(`/api/books/${createdId}`)
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(204);
  });
});
