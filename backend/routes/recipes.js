const express = require('express');
const Recipes = require('../models/recipes');

const router = express.Router();

//insert recipe

router.post('/recipe/insert', (req, res) => {
    const newRecipe = new Recipes({

        recipeName : req.body.recipeName,
        RecipeIngredients : req.body.RecipeIngredients,
        RecipeDescription : req.body.RecipeDescription,
    })

    console.log(newRecipe)
    newRecipe.save()

    .then(() => {
        res.send('Details added successfully...');
    })
    .catch(err => res.status(400).json(`${err}`));
});



//display all recipes

router.get('/recipe/display', (req, res) => {
    Recipes.find()

    .then(Recipes => res.json(Recipes))
    .catch(err => res.status(400).json(`${err}`));
})

//display specific recipe details
router.get(`/recipe/display/:id`, (req, res) => {
    Recipes.findById(req.params.id)

    .then(Recipes => res.json(Recipes))
    .catch(err => res.status(400).json(`${err}`));
});



//update recipe

router.put(`/recipe/update/:id`, (req, res) => {
    Recipes.findByIdAndUpdate(req.params.id)

    .then(Recipes => {
        Recipes.recipeName = req.body.recipeName,
        Recipes.RecipeIngredients = req.body.RecipeIngredients,
        Recipes.RecipeDescription = req.body.RecipeDescription

        console.log(Recipes)
        Recipes.save()

        .then(() => res.send("Recipe updates successfully..."))
        .catch(err => res.status(400).json(`${err}`));
    })
});



//delete recipe

router.delete('/recipe/delete/:id', (req, res) => {
    Recipes.findByIdAndDelete(req.params.id)

    .then(() => res.send("Recipe deleted successfully..."))
    .catch(err => res.status(400).json(`${err}`));
})


module.exports= router;