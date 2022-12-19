import React from "react";
import Meals from "../Components/Meals/Meals";
import {RecipesType} from "../App";
import {SearchBar} from "../Components/SearchBar/SearchBar"
import { useState,useEffect } from "react";
//import {Favorite} from "../pages/Favoirate"
export type RecipesTypes={
  items:RecipesType[];
  searchRecipes:RecipesType[] ;
  setSearchRecipes:Function;
  favorite:RecipesType[]; 
  setFavorite:Function;
 
};


//   function addFavorite(arrayVal:RecipesType):void

//function Recipe(recipes:RecipesTypes)

function Recipe({items,searchRecipes,setSearchRecipes,favorite, setFavorite}:RecipesTypes)
{
 //let arrayVal:Array<RecipesType>;
 // arrayVal=recipes.items;






  //console.log("recipe page recipes.items is",recipes.items);
  //console.log("recipe page recipes is",recipes);
  const [searchName ,setSearchName]=useState<string>("");
  let resultOutput:Array<RecipesType>;
if(searchName)
{
  resultOutput=items.filter((item)=>item.strMeal.toLowerCase().includes(searchName.toLowerCase()));
console.log("searchName is",searchName );

console.log("res is",resultOutput );
}

  else
  {
    resultOutput=items;
  }
 

  return(

      <div  className="Meals">
         <SearchBar searchName={searchName} setSearchName={setSearchName} ></SearchBar> 
         {/* <Favorite ></Favorite> */}
      {
      
        
         //recipes.items.map((items)=><div> {items.strArea} </div>)
        // searchName?recipes.items.filter((item)=> {item.strMeal.toLowerCase().includes(searchName.toLowerCase())})
   
       resultOutput? resultOutput.map((items,index)=>
   {
    return <Meals recipes={items } key={index} favorite={favorite} setFavorite={setFavorite}/> 
   }):" No items"
  

      }
    </div>
    
   
  )
  ;
}
export default Recipe;
//favorite={favorite} setFavorite={setFavorite}