import React,{useState}  from "react";
import {RecipesType} from "../../App"
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

type RecipesType1={
    recipes:RecipesType;
    favorite:RecipesType[]; 
    setFavorite:React.Dispatch<React.SetStateAction<RecipesType[]>>;
   };
   // new codes from mui
   type ExpandMoreProps= IconButtonProps &{ expand :boolean;}
  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  export function MealsItem({recipes,favorite,setFavorite}:RecipesType1 )
{
 
    function   addFavorite():void
    {
      
      let existVal;
     
       existVal= favorite?favorite.filter((item)=>item.idMeal===recipes.idMeal.toString()):""
console.log( "value is",existVal,typeof(existVal));
       if(existVal )
       {
       const  result=[...favorite, recipes]

        setFavorite(result );
       }
  
   
     console.log("fav new list is",favorite);
     
      };
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    return (
      <Card sx={{ maxWidth: 350 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor:red[500] }} aria-label="recipe">
             {recipes.strMeal.charAt(0)}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
             </IconButton>
          }
          title={recipes.strMeal}
          subheader={recipes.strCategory}
        />
        <CardMedia
          component="img"
          height="194"
          image={recipes.strMealThumb}
          alt={recipes.strMeal}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Ingredient:
          </Typography>
          <List>
            <ListItem>1.{recipes.strIngredient1}:{recipes.strMeasure1}</ListItem>
            <ListItem>2.{recipes.strIngredient2}:{recipes.strMeasure2}</ListItem>
            <ListItem>3.{recipes.strIngredient3}:{recipes.strMeasure3}</ListItem>
          </List>
        </CardContent>
         <CardActions disableSpacing> 
          <IconButton aria-label="add to favorites" onClick={addFavorite}>
            <FavoriteIcon  />
          </IconButton>
          
           <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions> 
     <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Instructions:</Typography>
            <Typography paragraph>
             {recipes.strInstructions}
            </Typography>
          </CardContent>
        </Collapse> 
      </Card>)
}
export default MealsItem;












    /*console.log("meals item  page recipe",recipes);
    console.log("recipes is  meals item ",recipes);
    console.log("favotrrrrr list is",favorite);
    function   addFavorite():void
   {
    
      setFavorite( [...favorite, recipes]);
  
    console.log("fav new list is",favorite);
    
     };
    
    return(
    
        <div  className="MealsItems">
   
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
      
    
      
       );*/

