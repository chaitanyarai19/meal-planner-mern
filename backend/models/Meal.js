const mongoose = require('mongoose');
const MealSchema = new mongoose.Schema({
  name: String,
  ingredients: [{
    name: String,
    quantity: Number,
    unit: String
  }],
  diet: String
});
module.exports = mongoose.model('Meal', MealSchema);