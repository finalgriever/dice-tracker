import React from "react";
import DieRenderer from "./dieRenderer";

function Empty({ onClick }) {
  return (
    <DieRenderer onClick={onClick}>
      {
        "M74.5 36 A38.5 38.5 0 0 0 36 74.5 v363 A38.5 38.5 0 0 0 74.5 476 h363 a38.5 38.5 0 0 0 38.5-38.5 v-363 A38.5 38.5 0 0 0 437.5 36 h-363 z"
      }
    </DieRenderer>
  );
}

export default Empty;
