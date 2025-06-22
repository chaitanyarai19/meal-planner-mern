const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Meal = require('../../models/Meal');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

it('should save and retrieve a meal', async () => {
  const meal = new Meal({ name: 'Integration Meal', ingredients: [], diet: 'vegan' });
  await meal.save();
  const found = await Meal.findOne({ name: 'Integration Meal' });
  expect(found).not.toBeNull();
  expect(found.diet).toBe('vegan');
});