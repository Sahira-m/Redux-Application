import React from "react";
import {RecipesType} from "../App";
import FavoriteComponent from "../Components/FavoriteComponent.tsx/Favoritecomponent";
 type FavTypes={
  favorite:RecipesType[]; 
  setFavorite:React.Dispatch<React.SetStateAction<RecipesType[]>>;
 
};
function Favoirate({favorite, 
  setFavorite}:FavTypes)
{
 return <div>
  <FavoriteComponent favorite={favorite} ></FavoriteComponent>
{/* <FavoriteComponent favorite={favorite} setFavorite={setFavorite}></FavoriteComponent> */}
  </div>;
}
export default Favoirate;