import { Grid } from "@mui/material";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import {searchPark} from "../../ApiCalls/SearchPark"
import NationalPark from "../NationalPark/NationalPark"
import "./SearchBar.css";



function SearchBar() {
  const [inputText, setInputText] = useState("");
  const [parkData, setParkData] = useState([]);

  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  let onClickHandler = (e) => {
    const dataPromise = searchPark(inputText);
    dataPromise.then(data => setParkData(data));
    // alert(Object.keys(parkData[0]));
  }

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
        <button onClick={onClickHandler}>Default</button>
        {parkData.map((parkInfo)=>{
            return <NationalPark name = {parkInfo.fullName}></NationalPark>
        })}
      </Grid>
    </Grid>
  );
}

export default SearchBar;
