import { Grid } from "@mui/material";


function NationalPark(props) {
  return (
    <Grid container spacing={2}>
      <h1>{props.name}</h1>
    </Grid>
  );
}

export default NationalPark;
