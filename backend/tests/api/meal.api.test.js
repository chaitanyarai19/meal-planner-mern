const app = require('../../index'); // Import the app
const request = require('supertest');

describe('Meal API', () => {
  it('POST /api/meals should create a meal', async () => {
    const res = await request(app)
      .post('/api/meals')
      .send({
        name: 'API Meal',
        ingredients: [{ name: 'Rice', quantity: 100, unit: 'grams' }],
        diet: 'vegetarian'
      });
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('API Meal');
  });

  it('GET /api/meals should return meals', async () => {
    const res = await request(app).get('/api/meals');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});