import React from "react";
import DiceRoll from "./diceRoll";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "block",
    width: "100%",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textAlign: "left",
    borderBottom: "2px #444 solid",
    borderRight: "2px #444 solid",
    minHeight: "40px"
  },
  item: {
    minWidth: "4rem",
    display: "inline-block",
    padding: "2px"
  },
  spacer: {
    width: "0.5rem",
    display: "inline-block"
  }
});

function RecordedRolls({ rolls }) {
  let incrementor = 0;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {rolls
        .slice(0)
        .reverse()
        .map(roll => {
          incrementor++;
          return (
            <React.Fragment key={incrementor}>
              <div className={classes.item}>
                <DiceRoll rolledDice={roll} />
              </div>
              <div className={classes.spacer}> </div>
            </React.Fragment>
          );
        })}
    </div>
  );
}

export default RecordedRolls;
