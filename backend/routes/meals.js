const express = require('express');
const router = express.Router();
const Meal = require('../models/Meal');

router.post('/', async (req, res) => {
  try {
    const meal = new Meal(req.body);
    await meal.save();
    res.status(201).json(meal); // <-- Make sure to use 201 here
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  const filter = req.query.diet ? { diet: req.query.diet } : {};
  const meals = await Meal.find(filter);
  res.json(meals);
});

router.put('/:id', async (req, res) => {
  const meal = await Meal.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(meal);
});

router.delete('/:id', async (req, res) => {
  await Meal.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

module.exports = router;