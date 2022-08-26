import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../InsertRecipe/InsertRecipe.css'

function InsertRecipe() {

    const navigate = useNavigate();

    const [recipeName, setRecipeName] = useState("");
    const [RecipeIngredients, setRecipeIngredients] = useState("");
    const [RecipeDescription, setRecipeDescription] = useState("");

    const insertRecipe = () => {
        axios.post("http://localhost:8000/recipe/insert", {
            recipeName: recipeName,
            RecipeIngredients: RecipeIngredients,
            RecipeDescription: RecipeDescription
        }).then(res =>
            //alert("Successfully Insert"),
            navigate('/')
        )
    };

    const refreshOption = () => {
        window.location.reload();
      }


    return <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" style={{ marginLeft: '30px' }} href="#">-Insert New Recipe-</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="/insert">Insert Recipe</a>
                    </li>
                    <li class="nav-item active" style={{ marginLeft: '1460px' }}>
                        <button class="btn btn-danger btn-sm" href="#" onClick={refreshOption}><i class="fas fa-redo"></i></button>
                    </li>
                </ul>
            </div>
        </nav>

        <center><div className='container'>
            <div class="card" style={{ width: "40%" }}>
                <div class="card-header">
                    <b>Insert Recipe</b>
                </div>
                <div class="card-body">
                    <form>
                        <div class="mb-3">
                            <label for="recName" class="form-label">Recipe Name:</label>
                            <input type="text" value={recipeName} onChange={e => setRecipeName(e.target.value)} class="form-control" id="recName" required />
                        </div>

                        <div class="mb-3">
                            <label for="ingredients" class="form-label">Ingredients:</label>
                            <input type="text" value={RecipeIngredients} onChange={e => setRecipeIngredients(e.target.value)} class="form-control" id="ingredients" required />
                        </div>

                        <div class="mb-3">
                            <label for="description" class="form-label">Description:</label>
                            <input type="text" value={RecipeDescription} class="form-control" onChange={e => setRecipeDescription(e.target.value)} id="description" required />
                        </div>
                        <a class="btn btn-primary" onClick={insertRecipe} class="btn btn-primary">Submit</a>
                    </form>
                </div>
            </div>
        </div></center>
    </div>;
}

export default InsertRecipe;
