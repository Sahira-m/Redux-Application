import React  from "react";
import TextField from   "@mui/material/TextField";
import "./SearchBar.css"; 
type SearchType={setSearchRecipes:React.Dispatch<React.SetStateAction<string>>};
  export function SearchBar(propsearch:SearchType)
{
  function onChangeEvent(event:any):string
  {
    
propsearch.setSearchRecipes(event.target.value);
return event.currentTarget.value;
  }

    return(<div className="searchPart"> <form id="recipes">
    <div > 
    <TextField type="text" id="txtName" helperText="suggestion: pizza, pork, lamb, ..." name="txtName" label="Please enter the Name" variant="standard"  onChange={onChangeEvent} />
  
    </div>
    </form>
    </div>);
}
export default SearchBar;