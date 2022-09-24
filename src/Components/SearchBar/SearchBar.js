import { Grid } from "@mui/material";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import {searchPark} from "../../ApiCalls/SearchPark"
import "./SearchBar.css";


function SearchBar() {
  const [inputText, setInputText] = useState("");

  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <div className="search">
          <TextField
            id="outlined-basic"
            onChange={inputHandler}
            variant="outlined"
            fullWidth
            label="search"
          />
        </div>
        <button onClick={() => searchPark(inputText)}>Default</button>
        
      </Grid>
    </Grid>
  );
}

export default SearchBar;
