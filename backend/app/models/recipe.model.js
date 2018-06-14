const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
    title: String,
    description: String,
    thumbnail: String,
    description: String,
    ingredients: {
        type: [{
            name: { type: String },
            amount: { type: String }
        }]
    },
    instructions: String,
    author: String,
    totalLikes: Number
}, {
        timestamps: true
    });

module.exports = mongoose.model('Recipe', RecipeSchema);