import React  from "react";
import TextField from   "@mui/material/TextField";
import "./SearchBar.css"; 
type SearchType={searchName: string;setSearchName:Function};
  export function SearchBar(propsearch:SearchType)
{
  function onChangeEvent(event:any):string
  {
    
propsearch.setSearchName(event.target.value);
return event.currentTarget.value;
  }
    return( <form id="recipes">
    <div className="searchPart"> 
    <TextField type="text" id="txtName" name="txtName" label="Please enter the Name" variant="standard" onChange={onChangeEvent} />
    <p>suggestion: pizza, pork, lamb, ...</p>
    </div>
    </form>);
}
export default SearchBar;