import React from "react";
import DiceRoll from "./diceRoll";

function RecordedRolls({ rolls }) {
  return (
    <div>
      {rolls.map(roll => (
        <DiceRoll rolledDice={roll} />
      ))}
    </div>
  );
}

export default RecordedRolls;
