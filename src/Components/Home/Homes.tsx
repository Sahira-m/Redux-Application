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
   <h1>HEALTHY DELICIOUS RECIPES</h1>
<img className="MainBackground" src= {Food} alt ="background"></img>
</div>

<div className="DownPart">
  <div className="SubTitles"> 
<h3>Popular food</h3>
<p>We provides variety foods and beverages</p>
<div className="Recipes">
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