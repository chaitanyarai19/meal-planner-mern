const Meal = require('../../models/Meal'); // adjust path as needed

describe('Meal Model', () => {
  it('should create a meal object', () => {
    const meal = new Meal({
      name: 'Test Meal',
      ingredients: [{ name: 'Egg', quantity: 2, unit: 'pcs' }],
      diet: 'vegetarian'
    });
    expect(meal.name).toBe('Test Meal');
    expect(meal.ingredients.length).toBe(1);
    expect(meal.diet).toBe('vegetarian');
  });
});