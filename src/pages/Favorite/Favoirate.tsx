import React from "react";
import {RecipesType} from "../../App";
import "./favoirate.css";
export type FavTypes={
  favorite:RecipesType[]; 
  setFavorite:Function;
 
};
function Favoirate(fav:FavTypes)
{
  return  <div className="Favorite">
    <h2>This is Favoirate page</h2> 
{
  fav.favorite.map((recipes)=>
<div  >    
  <div className="Sympol"> {recipes.strMeal.charAt(0)}  </div>
 <div className="Name" ><p>{recipes.strMeal} </p>    <p>{recipes.strCategory}</p>   </div> 
 
 <div  > 
 
  <img className="recipeImage" src={recipes.strMealThumb} alt={recipes.strMeal.toString()} ></img>
     </div> 
 <div > Tags: {recipes.strTags}  </div> 
 <div  className="Ingredient"> Ingredients:<p>1. {recipes.strIngredient1}</p>   <p>2. {recipes.strIngredient2}</p> <p>3.{recipes.strIngredient3}</p>     </div> 
 
  
 </div>


   )

}

  </div>;

}
export default Favoirate;