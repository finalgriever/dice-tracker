import React from "react";
import Die from "./die";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%"
  },
  item: {
    maxHeight: "5vh"
  }
});

function DiceRoll({ maxDice = false, rolledDice }) {
  const classes = useStyles();
  maxDice = maxDice || rolledDice.length;
  let dice = [];
  for (let i = 0; i < maxDice; i++) {
    rolledDice[i]
      ? dice.push(<Die key={i} value={rolledDice[i]} />)
      : dice.push(<Die key={i} value={0} />);
  }
  let incrementor = 0;
  return (
    <Grid container className={classes.container}>
      {dice.map(die => {
        incrementor++;
        return (
          <Grid
            key={incrementor}
            className={classes.item}
            item
            xs={12 / maxDice}
          >
            {die}
          </Grid>
        );
      })}
    </Grid>
  );
}

export default DiceRoll;
