import React from "react";
import {Link} from "react-router-dom";

//import { Style } from "@mui/material/style";

import "./Navbar.css";
function Navbar()
{
   const style = { textDecoration: 'none' };
   return <div> 
    
        <div className="Navbar">
         <div className="Logo">
         <img className="LogoImage" src="https://cdn-icons-png.flaticon.com/512/2388/2388960.png" alt="logo"></img>
        <p>YUMMY</p>
         </div>
       
        <div className="Link">
        <Link style={style} to="/"><span>HOME</span></Link> 
        <Link style={style} to="/recipe"><span>RECIPE</span></Link>
        <Link style={style} to="/favorite">
         <span>FAVORITE</span>
        {/* <span className='Badge BadgeWrning' id='FavoriteCount'>
             
           </span> */}
        </Link>
        <Link style={style} to="/contact"><span>CONTACT</span></Link>
       
       
        </div>
        
        </div>
    
     
   </div>;

}
export default  Navbar;




