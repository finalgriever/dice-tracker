import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Die from "./die";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    justifyContent: "center",
    width: "100%"
  },
  item: {
    height: "7rem"
  },
  button: {
    height: "100%",
    width: "100%"
  }
});

function DiceGrid({ emitDiceRoll }) {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container>
      {[1, 2, 3, 4, 5, 6].map(value => (
        <Grid className={classes.item} key={value} item xs={6}>
          <div className={classes.button}>
            <Die value={value} onClick={() => emitDiceRoll(value)} />
          </div>
        </Grid>
      ))}
    </Grid>
  );
}

export default DiceGrid;
