import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  container: {
    height: "100%"
  },
  coloured: {
    fill: "#333",
    height: "100%"
  }
});

function DieRenderer({ onClick, children }) {
  const classes = useStyles();
  return (
    <svg
      className={classes.container}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      onClick={onClick}
    >
      <path className={classes.coloured} d={children} />
    </svg>
  );
}

export default DieRenderer;
