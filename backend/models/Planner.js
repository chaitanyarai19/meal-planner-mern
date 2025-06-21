const mongoose = require('mongoose');
const PlannerSchema = new mongoose.Schema({
  day: String,
  meal: { type: mongoose.Schema.Types.ObjectId, ref: 'Meal' }
});
module.exports = mongoose.model('Planner', PlannerSchema);