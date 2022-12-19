import React  from "react";
import { Routes,Route } from"react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Favorite from "./pages/Favorite/Favoirate";
import Recipe from "./pages/Recipe";
import Navbar from "./Components/Navbar/Navbar";
import { useState,useEffect } from "react";
export type RecipesType={
  idMeal:String;
  
  strMeal:String;
  strCategory:string;
  strArea:string;
  strMealThumb:string;
  strTags:string;
  strIngredient1:string;
  
  strIngredient2:string;
  strIngredient3:string;
};
const url="https://www.themealdb.com/api/json/v1/1/search.php?s";
function App() {
  
  
const [recipes, setRecipes]=useState<RecipesType[]>([]);
// const [isLoad ,setLoad]=useState<boolean>(false);
//const [searchName ,setSearchName]=useState<string>("");
const [favorite,setFavorite]=useState<RecipesType[]>([]);
const [searchRecipes ,setSearchRecipes]=useState<RecipesType[]>([]);
//setSearchRecipes(url+searchRecipes);

  //FUNCTIONS
  async function fetchData() {
    try
    {
await fetch(url).then((response)=>response.json().then((data)=>setRecipes(data.meals)))
    }
    catch(error )
    
    {
alert(error);
    }
    
  }
  useEffect(()=>
  {fetchData();},[]);
 // setFavorite(recipes);
  console.log("recipes is app ",recipes);
  return <div className="App">
    <Navbar></Navbar>
 <Routes>
    <Route>
    <Route path="/" element={<Home/>}></Route> 
    <Route path="/contact" element={<Contact/>}></Route> 
    <Route path="/favorite" element={<Favorite favorite={favorite} setFavorite={setFavorite}/>}></Route> 
     <Route path="/recipe" element={<Recipe  items={recipes}  
     searchRecipes={searchRecipes} setSearchRecipes={setSearchRecipes}
     favorite={favorite} setFavorite={setFavorite} />}>
      
      </Route>  
    </Route>
  </Routes>


  </div>;
}

export default App;
