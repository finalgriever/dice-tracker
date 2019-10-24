import React from "react";
import Die from "./die";

function DiceRoll({ maxDice = false, rolledDice }) {
  maxDice = maxDice || rolledDice[0].count;
  let dice = [];
  for (let i = 0; i < maxDice; i++) {
    rolledDice[i]
      ? dice.push(<Die key={i} value={rolledDice[i]} />)
      : dice.push(<Die key={i} value={0} />);
  }
  return <div>{dice}</div>;
}

export default DiceRoll;
