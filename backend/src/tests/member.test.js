const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
jest.mock('../models/member', () => {
  const mockFindAll = jest.fn().mockResolvedValue([
    { id: '1', firstName: 'John', lastName: 'Doe', email: 'john@example.com' }
  ]);
  const mockCreate = jest.fn().mockResolvedValue({ id: '2', firstName: 'Jane', lastName: 'Doe', email: 'jane@example.com' });
  const mockFindByPk = jest.fn().mockImplementation(id => {
    if (id !== '1') return null;
    return {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      update: jest.fn().mockResolvedValue(),
      destroy: jest.fn().mockResolvedValue()
    };
  });
  return (sequelize) => ({ findAll: mockFindAll, create: mockCreate, findByPk: mockFindByPk });
});
const membersRouter = require('../routes/members');
const app = express();
app.use(bodyParser.json());
app.use('/api/members', membersRouter);

describe('Member API', () => {
  test('GET /api/members should return list', async () => {
    const res = await request(app).get('/api/members');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body[0]).toHaveProperty('email');
  });

  test('POST /api/members creates a member', async () => {
    const payload = { firstName: 'Jane', lastName: 'Doe', email: 'jane@example.com' };
    const res = await request(app).post('/api/members').send(payload);
    expect(res.statusCode).toBe(201);
    expect(res.body).toMatchObject(payload);
  });

  test('PUT /api/members/:id updates a member', async () => {
    const payload = { firstName: 'John', lastName: 'Smith', email: 'johnsmith@example.com' };
    const res = await request(app).put('/api/members/1').send(payload);
    expect(res.statusCode).toBe(200);
    expect(res.body).toMatchObject({ id: '1', ...payload });
  });

  test('DELETE /api/members/:id removes a member', async () => {
    const res = await request(app).delete('/api/members/1');
    expect(res.statusCode).toBe(204);
  });
});
