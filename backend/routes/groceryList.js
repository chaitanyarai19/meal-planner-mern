const express = require('express');
const router = express.Router();
const Planner = require('../models/Planner');

router.get('/', async (req, res) => {
  const plan = await Planner.find().populate('meal');
  const grocery = {};

  plan.forEach(entry => {
    entry.meal.ingredients.forEach(ing => {
      const key = `${ing.name}-${ing.unit}`;
      if (!grocery[key]) grocery[key] = 0;
      grocery[key] += ing.quantity;
    });
  });

  const list = Object.entries(grocery).map(([key, quantity]) => {
    const [name, unit] = key.split('-');
    return { name, quantity, unit };
  });

  res.json(list);
});

module.exports = router;