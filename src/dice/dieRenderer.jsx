import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  coloured: {
    fill: "#700"
  }
});

function DieRenderer({ children }) {
  const classes = useStyles();
  return (
    <svg
      className={classes.coloured}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path className={classes.coloured} d={children[0]} />
    </svg>
  );
}

export default DieRenderer;
