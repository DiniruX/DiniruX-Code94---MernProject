import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../UpdateRecipe/UpdateRecipe.css'

function UpdateRecipe() {

    const navigate = useNavigate()

    const [recipeName, setRecipeName] = useState("");
    const [RecipeIngredients, setRecipeIngredients] = useState("");
    const [RecipeDescription, setRecipeDescription] = useState("");

    const id = useParams();

    const [recipes, setRecipes] = useState({
        recipeName: "",
        RecipeIngredients: "",
        RecipeDescription: ""
    })

    const changeOnClick = e => {
        e.preventDefault();


        const formData = new FormData();

        formData.append("recipeName", recipeName);
        formData.append("RecipeIngredients", RecipeIngredients);
        formData.append("RecipeDescription", RecipeDescription);

        setRecipeName("");
        setRecipeIngredients("");
        setRecipeDescription("");

        console.log(formData.get('recipeName'));


        recipes.recipeName = formData.get('recipeName');
        recipes.RecipeIngredients = formData.get('RecipeIngredients');
        recipes.RecipeDescription = formData.get('RecipeDescription');


        console.log(recipes);

        //validations


        // console.log(typeof(user.userNumber))


        axios.put(`http://localhost:8000/recipe/update/${id.id}`, recipes)
            .then(res =>
                //alert(res.data.message),
                navigate('/')
            )
            .catch(err => {
                alert("update failed")
                console.log(err);
            });


    };

    useEffect(() => {
        axios.get(`http://localhost:8000/recipe/display/${id.id}`)

            .then(res => [
                setRecipeName(res.data.recipeName),
                setRecipeIngredients(res.data.RecipeIngredients),
                setRecipeDescription(res.data.RecipeDescription),
            ])

            .catch((err) => console.log(err));
    }, [])

    const refreshOption = () => {
        window.location.reload();
      }

    return <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" style={{ marginLeft: '30px' }} href="#">-Update Recipe Details-</a>
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
                    <li class="nav-item active" style={{ marginLeft: '1420px' }}>
                        <button class="btn btn-danger btn-sm" href="#" onClick={refreshOption}><i class="fas fa-redo"></i></button>
                    </li>
                </ul>
            </div>
        </nav>

        <center><div className='container'>
            <div class="card" style={{ width: "40%" }}>
                <div class="card-header">
                    <b>Update Recipe</b>
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
                        <a class="btn btn-primary" onClick={changeOnClick} class="btn btn-primary">Submit</a>
                    </form>
                </div>
            </div>
        </div></center>
    </div>;
}

export default UpdateRecipe;
