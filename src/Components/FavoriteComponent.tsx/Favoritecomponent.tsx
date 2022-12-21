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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import "./FavoriteComponent.css";
type FavTypes={
    favorite:RecipesType[]; 
    // setFavorite:React.Dispatch<React.SetStateAction<RecipesType[]>>;
   
  };
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
  export function FavoriteComponent({favorite}:FavTypes)
    //setFavorite}:FavTypes)
{
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
      };
    return  <div className="favorite">
    <h2>This is Favoirate page</h2> 
  <div > 
  {
    favorite.map((recipes,index)=>

    <Card sx={{ maxWidth: 350 }}>
        <CardHeader
        key={index}
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
</div>

</div>

}
export default FavoriteComponent;