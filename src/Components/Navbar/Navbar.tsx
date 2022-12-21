import React from "react";
import {Link} from "react-router-dom";
import { RecipesType } from "../../App";
import logo from "../../assets/chef.jpeg"
//import { Style } from "@mui/material/style";

import "./Navbar.css";
type Prop={favorite:RecipesType[]};

function Navbar({favorite}:Prop)

{
   const style = { textDecoration: 'none' };
   let length:Number;
   length=favorite.length;
   return <div> 
    
        <div className="Navbar">
         <div className="Logo">
         <img className="LogoImage" src={logo} alt="logo"></img>
        <p>YUMMY</p>
         </div>
       
        <div className="Link">
        <Link style={style} to="/"><span>HOME</span></Link> 
        <Link style={style} to="/recipe"><span>RECIPE</span></Link>
        <Link style={style} to="/favorite">
         <span>FAVORITE</span>
        
       <span className='Badge BadgeWrning' id='FavoriteCount'>
         {length.toString()}
           </span> 
        
        </Link>
        <Link style={style} to="/contact"><span>CONTACT</span></Link>
       
       
        </div>
        
        </div>
    
     
   </div>;

}
export default  Navbar;




