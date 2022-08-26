import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../RecipeHome/RecipeHome.css'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

function RecipeHome() {

    const navigate = useNavigate()

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/recipe/display/')
            .then((res) => {
                setRecipes(res.data);
                console.log(recipes)
            })
    }, [])

    const removeRecipe = (id) => {
        axios.delete(`http://localhost:8000/recipe/delete/${id}`)
            .then(res =>
                //alert("Successfully Deleted..."),
                navigate('/'),
                window.location.reload()
            );
    };

    const refreshOption = () => {
        window.location.reload();
      }

    const deleteCon = (id) => {

        confirmAlert({
          title: 'Delete Confirmation',
          message: 'You will not able to undo once deleted!',
          buttons: [
            {
              label: 'Delete',
              onClick: () => removeRecipe(id)
            },
            {
              label: 'Cancel',
              //do nothing
            }
          ]
        });
      }



    return <div>

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" style={{ marginLeft: '30px' }} href="#">-All Recipes-</a>
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
                    <li class="nav-item active" style={{ marginLeft: '1524px' }}>
                        <button class="btn btn-danger btn-sm" href="#" onClick={refreshOption}><i class="fas fa-redo"></i></button>
                    </li>
                </ul>
            </div>
        </nav>
        

        <div class="row">
            {recipes.map((value, key) => (

                <div class="col-lg-3" style={{ margin: "20px," }}>
                    <div class="card">
                        <div class="card-body">

                            <Link className="link" to={{ pathname: `/display/${value._id}` }}>
                                <h5 class="card-title">{value.recipeName}</h5>
                            </Link>
                            <small>Click to See in Full Detail.</small><br/>
                            {/* <p class="card-text">{value.RecipeIngredients}</p>

                            <p class="card-text">{value.RecipeDescription}</p> */}

                            <Link to={{ pathname: `/update/${value._id}` }}>
                                <a href="#" class="btn btn-primary btn-sm">Update Recipe</a>
                            </Link>

                            <a href="#" onClick={() => deleteCon(value._id)} class="btn btn-warning btn-sm">Delete Recipe</a>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
}

export default RecipeHome;
