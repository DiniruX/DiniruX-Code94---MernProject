import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//importing components
import RecipeHome from './components/RecipeHome/RecipeHome';
import UpdateRecipe from './components/UpdateRecipe/UpdateRecipe';
import InsertRecipe from './components/InsertRecipe/InsertRecipe';
import DisplayRecipe from './components/DisplayRecipe/DisplayRecipe';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<RecipeHome />} />
          <Route path="/update/:id" element={<UpdateRecipe />} />
          <Route path="/insert" element={<InsertRecipe />} />
          <Route path="/display/:id" element={<DisplayRecipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
