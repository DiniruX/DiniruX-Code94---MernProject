const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({

    recipeName:{
        type:String,
        required:true
    },

    RecipeIngredients:{
        type:String,
        required:true
    },
    RecipeDescription:{
        type:String,
        required:true
    }
});

const recipe = mongoose.model('recipeData', recipeSchema);
module.exports = recipe;