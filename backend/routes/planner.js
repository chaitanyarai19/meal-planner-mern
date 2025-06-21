const express = require('express');
const router = express.Router();
const Planner = require('../models/Planner');

router.post('/', async (req, res) => {
  const entry = new Planner(req.body);
  await entry.save();
  res.json(entry);
});

router.get('/', async (req, res) => {
  const plan = await Planner.find().populate('meal');
  res.json(plan);
});

module.exports = router;