const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//importing routes
const recipeRoutes = require('./routes/recipes')

//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(recipeRoutes);

const PORT = 8000;
const DB_URL = "mongodb+srv://admin:admin@recipe.azzyh.mongodb.net/RecipeData?retryWrites=true&w=majority";

mongoose.connect(DB_URL, {

    //warnings
})
.then(() => {
    console.log('DB connected...');
})
.catch((err) => {
    console.log('DB connection error...', err);
})

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
})