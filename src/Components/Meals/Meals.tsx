import React from "react";
import {RecipesType} from "../../App";
import "./Meals.css";
import Button from '@mui/material/IconButton';
import { useState } from "react";

export type RecipesType1={
  recipes:RecipesType;
  favorite:RecipesType[]; 
  setFavorite:Function;
 };
function Meals( {recipes,favorite,setFavorite}:RecipesType1):any
{
  console.log("favotrrrrr list is",favorite);
  function   addFavorite():void
 {
  let arrayVal:RecipesType
  arrayVal=recipes;
  //let  favouriteList=new Array();
  //favouriteList=[...favorite];
  //favorite=[...favorite];
  if(recipes.idMeal===arrayVal.idMeal)
  {
    //favorite.filter((item)=>item.idMeal.includes(recipes.idMeal.toString()))
    //favouriteList.push(recipes.idMeal);
    //favorite.push(recipes);
    //favorite=[recipes];
    //favorite=[...favorite];
    setFavorite( [...favorite, recipes]);
  }
  //console.log("fav list is",favouriteList);
  console.log("fav new list is",favorite);
   //addFavorites(favouriteList);
   };
   


  //  const addFavorite = (item: any) => {
    
  //   let cartarray = [...favorite];
    
  //   let updateatribute = { ...item, quantity: 1 };

  //   let productindex = cartarray.findIndex((product) => {});
  //   setFavorite([...cartarray, item]);

    
  // };

    console.log("meals page recipe",recipes);
    //console.log("meals page",recipe.recipes.strCatogery);
    return(
    
 <div  className="Meals">
 
 {

<div  >    
  <div className="Sympol"> {recipes.strMeal.charAt(0)}  </div>
 <div className="Name" ><p>{recipes.strMeal} </p>    <p>{recipes.strCategory}</p>   </div> 
 
 <div  > 
 
  <img className="recipeImage" src={recipes.strMealThumb} alt={recipes.strMeal.toString()} ></img>
     </div> 
 <div > Tags: {recipes.strTags}  </div> 
 <div  className="Ingredient"> Ingredients:<p>1. {recipes.strIngredient1}</p>   <p>2. {recipes.strIngredient2}</p> <p>3.{recipes.strIngredient3}</p>     </div> 
 
  <Button onClick={addFavorite}>FAV</Button>
 
 </div>
 }

</div>
    
  
    
     );
   

  
}
export default Meals;