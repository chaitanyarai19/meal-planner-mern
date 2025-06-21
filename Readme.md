# Meal Planner Backend

A simple Node.js and MongoDB backend for managing meals.

## Features

- RESTful API for CRUD operations on meals
- MongoDB with Mongoose ODM
- Express.js server
- Environment variable support with dotenv

## Prerequisites

- [Node.js](https://nodejs.org/) (v14+ recommended)
- [MongoDB](https://www.mongodb.com/try/download/community) (local or cloud)
- [npm](https://www.npmjs.com/)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/meal-planner.git
cd meal-planner/backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the `backend` directory:

```
MONGODB_URI=mongodb://127.0.0.1:27017/meal-planner
PORT=5000
```

Adjust the `MONGODB_URI` if using a remote MongoDB instance.

### 4. Start MongoDB

Make sure MongoDB is running locally:

```bash
mongod
```

### 5. Run the Server

```bash
node index.js
```

The server should start on the port specified in `.env` (default: 5000).

## API Endpoints

| Method | Endpoint      | Description         |
|--------|--------------|---------------------|
| GET    | /meals       | Get all meals       |
| POST   | /meals       | Add a new meal      |
| PUT    | /meals/:id   | Update a meal       |
| DELETE | /meals/:id   | Delete a meal       |

### Example Meal Object

```json
{
  "name": "Chicken Salad",
  "calories": 350,
  "date": "2025-06-21T12:00:00.000Z"
}
```

## Development

- Use [Postman](https://www.postman.com/) or [curl](https://curl.se/) to test API endpoints.
- Modify or extend the `Meal` model in `index.js` as needed.
