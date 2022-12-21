import React from "react";
import Meals from "../Components/Meals/Meals";
import {RecipesType} from "../App";
import {SearchBar} from "../Components/SearchBar/SearchBar";
 type RecipesTypes={
  items:RecipesType[];
  setSearchRecipes:React.Dispatch<React.SetStateAction<string>>;
  favorite:RecipesType[]; 
  setFavorite:React.Dispatch<React.SetStateAction<RecipesType[]>>;
 
};

function Recipe({items,setSearchRecipes,favorite, setFavorite}:RecipesTypes)
{
  return(
      <div  >
    
         <SearchBar  setSearchRecipes={setSearchRecipes} ></SearchBar>
         <Meals recipes={items } favorite={favorite} setFavorite={setFavorite}></Meals>
        </div> 
  );
}
export default Recipe;