const express = require('express');
const router = express.Router();
const Meal = require('../models/Meal');

router.post('/',async (req, res) => {
    const meal = new Meal(req.body);
    await meal.save();
    res.json(meal);
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
    res.json({ message: 'Meal deleted' });
});

module.exports = router;

