const mongoose = require('mongoose');
const MealSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ingredients: [{
        name: String,
        quantity: Number,
        unit: String
    }],
    diet: {
        type: String
    }

});

module.exports = mongoose.model('Meal', MealSchema);
