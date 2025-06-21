const mongoose = require('mongoose');

const PlannerSchema = new mongoose.Schema({
    day: {
        type: String,
        required: true
    },
    meal: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Meal',
        required: true
    }
});

module.exports = mongoose.model('Planner', PlannerSchema);