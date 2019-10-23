import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

const dice = [
  { value: 1, image: "onedie.svg" },
  { value: 2, image: "twodie.svg" },
  { value: 3, image: "threedie.svg" },
  { value: 4, image: "fourdie.svg" },
  { value: 5, image: "fivedie.svg" },
  { value: 6, image: "sixdie.svg" }
];

function DiceGrid({ emitDiceRoll }) {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container>
      {dice.map(die => (
        <Grid item xs={6}>
          <Button onPress={() => emitDiceRoll(die.value)}>
            <img alt={die.value} src={die.image} />
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}

export default DiceGrid;
