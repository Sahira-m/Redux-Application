import React  from "react";
import { Routes,Route } from"react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Favorite from "./pages/Favoirate";
import Recipe from "./pages/Recipe";
import Navbar from "./Components/Navbar/Navbar";
import { useState,useEffect } from "react";
export type RecipesType={
  idMeal:String;
  
  strMeal:string;
  strCategory:string;
  strArea:string;
  strMealThumb:string;
  strTags:string;
  strIngredient1:string;
  strIngredient2:string;
  strIngredient3:string;
  strMeasure1:string;
  strMeasure2:string;
  strMeasure3:string;
  strInstructions:string;
};
//const url="https://www.themealdb.com/api/json/v1/1/search.php?s";

function App() {
  
  
const [recipes, setRecipes]=useState<RecipesType[]>([]);
const [favorite,setFavorite]=useState<RecipesType[]>([]);
const [userInput ,setSearchRecipes]=useState<string>("");
console.log("userinput is",userInput);
const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`;
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
  {fetchData();},[userInput]);
 
 
  return <div className="App">
    <Navbar favorite={favorite}></Navbar>
 <Routes>
    <Route>
    <Route path="/" element={<Home/>}></Route> 
    <Route path="/contact" element={<Contact/>}></Route> 
    <Route path="/favorite" element={<Favorite favorite={favorite} setFavorite={setFavorite}/>}></Route> 
     <Route path="/recipe" element={<Recipe  items={recipes}  
     setSearchRecipes={setSearchRecipes}
     favorite={favorite} setFavorite={setFavorite} />}>
      
      </Route>  
    </Route>
  </Routes>


  </div>;
}

export default App;
