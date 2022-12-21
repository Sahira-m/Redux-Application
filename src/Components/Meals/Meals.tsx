import React from "react";
import {RecipesType} from "../../App";
import "./Meals.css";
import MealsItem from "./MealsItems";

 type RecipesType1={
  recipes:RecipesType[];
  favorite:RecipesType[]; 
  setFavorite:React.Dispatch<React.SetStateAction<RecipesType[]>>;};
function Meals( {recipes,favorite,setFavorite}:RecipesType1):any
{
   if(!recipes)
   {
    return(<div>Sorry we have  Not got this recipes yet </div>);
   }
// return(<div className="Meals">

// {
  
// recipes? recipes.map((items,index)=>
// {              
// return <MealsItem recipes={items } key={index} favorite={favorite} setFavorite={setFavorite}/> 
// }): <div>" No items" </div>

//  }
// </div>);
 
  
  return (
    <div >
       <h5>Our Recipes are</h5>
      <div className="Meals">
        {
        recipes? recipes.map((items,index) => {
          return <MealsItem recipes={items } key={index} favorite={favorite} 
          setFavorite={setFavorite} />;
        }): <div>" No items" </div>

       }
    </div>
      
      {/* ); */}
  
</div>
      
)}

export default Meals;