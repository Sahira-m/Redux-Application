import React from "react";
import "./Homes.css";
import Food from "../../assets/food.jpeg";
import Shrimp from "../../assets/shrimp.avif";
 import Cake from "../../assets/cake.avif";
 import Pizza from "../../assets/pizza.webp";
 import salad from "../../assets/salad.avif";
 import chicken from "../../assets/chicken.avif";
function Homes()
{
   return <div> 
    
<div className="Background">
   
  
<img className="MainBackground" src= {Food} alt ="background"></img>
<div className="BackgroundTitle">

   <p>HEALTHY DELICIOUS RECIPES</p>
   </div>
</div>

<div className="DownPart">
  <div className="SubTitles"> 
<h4>Popular food</h4>
<p>We provides variety foods and beverages</p>
<div className="RecipesPic ">
   <img className="Recipes"  src={salad} alt="salad"></img>
   <img className="Recipes" src={Shrimp} alt="shrimp"></img>
   <img className="Recipes" src={Cake} alt="cake"></img>
   <img className="Recipes" src={Pizza} alt="pizza"></img>
   <img className="Recipes" src={chicken} alt="chicken"></img>

    </div>
</div>

</div>
   </div>;

}
export default Homes;