import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import Die from "./die";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

function DiceGrid({ emitDiceRoll }) {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container>
      {[1, 2, 3, 4, 5, 6].map(value => (
        <Grid key={value} item xs={6}>
          <Button onClick={() => emitDiceRoll(value)}>
            <Die value={value} />
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}

export default DiceGrid;
