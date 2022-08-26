import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../DisplayRecipe/DisplayRecipe.css'

function DisplayRecipe() {

  const navigate = useNavigate()

  const id = useParams();

  const [recipeName, setRecipeName] = useState("");
  const [RecipeIngredients, setRecipeIngredients] = useState("");
  const [RecipeDescription, setRecipeDescription] = useState("");

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
      <a class="navbar-brand" style={{marginLeft:'30px'}} href="#">-See Recipe Details-</a>
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
    <div className='container'>
      <div class="card">
        <div class="card-header">
          <b>Recipe Details</b>
        </div>
        <div class="card-body">
          <center>

            <table style={{ marginTop: '40px', width: '50%' }}>
              <tr>
                <th>Recipe Name:</th>
              </tr>
              <tr>
                <td>{recipeName}</td>
              </tr>
              <tr>
                <th>Recipe Ingredients:</th>
              </tr>
              <tr>
                <td>{RecipeIngredients}</td>
              </tr>
              <tr>
                <th>Recipe Description:</th>
              </tr>
              <tr>
                <td>{RecipeDescription}</td>
              </tr>
            </table>
          </center>
        </div>
      </div>
    </div>


  </div>;
}

export default DisplayRecipe;
