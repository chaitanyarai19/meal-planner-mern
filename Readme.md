# Meal Planner Backend

A Node.js and MongoDB backend for managing meals, meal planning, and generating grocery lists.

---

## API Endpoints

| Method | Endpoint                | Description                        |
|--------|-------------------------|------------------------------------|
| POST   | /api/meals              | Add a new meal                     |
| GET    | /api/meals              | Get all meals (optionally filter)  |
| PUT    | /api/meals/:id          | Update a meal                      |
| DELETE | /api/meals/:id          | Delete a meal                      |
| POST   | /api/planner            | Assign meal to a day               |
| GET    | /api/grocery-list       | Generate combined grocery list     |

---

## Sample Test Cases

Assume your server is running at:  
`http://localhost:5000`

### 🍽️ 1. POST /api/meals — Create a Meal

**Postman:**  
Method: POST  
URL: http://localhost:5000/api/meals  
Body (JSON):
```json
{
  "name": "Grilled Chicken Salad",
  "ingredients": [
    { "name": "Chicken", "quantity": 200, "unit": "grams" },
    { "name": "Lettuce", "quantity": 100, "unit": "grams" }
  ],
  "diet": "high-protein"
}
```
**curl:**
```bash
curl -X POST http://localhost:5000/api/meals \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Grilled Chicken Salad",
    "ingredients": [
      { "name": "Chicken", "quantity": 200, "unit": "grams" },
      { "name": "Lettuce", "quantity": 100, "unit": "grams" }
    ],
    "diet": "high-protein"
  }'
```

---

### 📖 2. GET /api/meals — Get All Meals (optional ?diet=)

**Get all meals:**
```bash
curl http://localhost:5000/api/meals
```
**Filter by diet:**
```bash
curl http://localhost:5000/api/meals?diet=vegetarian
```

---

### ✏️ 3. PUT /api/meals/:id — Update a Meal

Replace `<meal_id>` with a real _id from your database.

**Postman:**  
PUT http://localhost:5000/api/meals/<meal_id>  
Body:
```json
{
  "name": "Updated Chicken Salad",
  "ingredients": [
    { "name": "Chicken", "quantity": 250, "unit": "grams" },
    { "name": "Lettuce", "quantity": 150, "unit": "grams" }
  ],
  "diet": "high-protein"
}
```
**curl:**
```bash
curl -X PUT http://localhost:5000/api/meals/<meal_id> \
  -H "Content-Type: application/json" \
  -d '{"name":"Updated Chicken Salad","ingredients":[{"name":"Chicken","quantity":250,"unit":"grams"},{"name":"Lettuce","quantity":150,"unit":"grams"}],"diet":"high-protein"}'
```

---

### 🗑️ 4. DELETE /api/meals/:id

**curl:**
```bash
curl -X DELETE http://localhost:5000/api/meals/<meal_id>
```

---

### 📅 5. POST /api/planner — Assign Meal to Day

**Postman Body:**
```json
{
  "day": "Monday",
  "meal": "<meal_id>"
}
```
**curl:**
```bash
curl -X POST http://localhost:5000/api/planner \
  -H "Content-Type: application/json" \
  -d '{"day":"Monday","meal":"<meal_id>"}'
```

---

### 🛒 6. GET /api/grocery-list — Generate Grocery List

**curl:**
```bash
curl http://localhost:5000/api/grocery-list
```

---

## ✅ 7. Testing Checklist

| Endpoint             | Method | Description                |
|----------------------|--------|----------------------------|
| /api/meals           | POST   | Add a new meal             |
| /api/meals           | GET    | Get all meals (filterable) |
| /api/meals/:id       | PUT    | Update meal info           |
| /api/meals/:id       | DELETE | Remove a meal              |
| /api/planner         | POST   | Assign meal to a day       |
| /api/grocery-list    | GET    | Generate grocery list      |

---

## 🧪8. Testing

- **Frameworks:** Jest, Supertest, mongodb-memory-server
- **How to run tests:**  
  ```bash
  npm test
  ```
- **Test Types:**
  - **Unit tests:** Located in `tests/unit/`, these test individual models and logic (e.g., `meal.test.js` checks the Meal model’s structure and validation).
  - **Integration tests:** Located in `tests/integration/`, these verify the interaction between your models and a real or in-memory database (e.g., `meal.integration.test.js` checks saving and retrieving meals).
  - **API tests:** Located in `tests/api/`, these use Supertest to make HTTP requests to your Express API and verify responses (e.g., creating, updating, and retrieving meals).

### Example Unit Test

```javascript
// tests/unit/meal.test.js
const Meal = require('../../models/Meal');

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
```

### Test Coverage

After running `npm test`, a coverage report will be generated.  
Include a screenshot or summary of your coverage in the README.

**Test Coverage:**  
![coverage screenshot](./coverage/coverage-summary.png)