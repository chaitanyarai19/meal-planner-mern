const express = require('express');
const router = express.Router();
const Planner = require('../models/Planner');

router.post('/', async (req, res) => {
    const planner = new Planner(req.body);
    await planner.save();
    res.json(planner);
}); 

router.get('/', async (req, res) => {
    const planners = await Planner.find().populate('meal');
    res.json(planners);
});

module.exports = router; 
