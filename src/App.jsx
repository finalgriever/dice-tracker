import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import DiceGrid from "./components/diceGrid";
import DiceCountSelector from "./components/diceCountSelector";

function App() {
  const [numberOfDice, setNumberOfDice] = useState(null);
  const [rolledSets, setRolledSets] = useState([]);
  const [stagedDice, setStagedDice] = [];

  if (stagedDice.count === numberOfDice) {
    setRolledSets(rolledSets.push(stagedDice));
    setStagedDice([]);
  }

  const handleDiceRoll = value => {
    setStagedDice(stagedDice.concat([value]));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Dice Tracker</h1>
      </header>
      {numberOfDice === null ? (
        <DiceCountSelector emitDiceCount={setNumberOfDice} />
      ) : (
        // RecordedRolls
        // DiceStage
        <DiceGrid emitDiceRoll={handleDiceRoll} />
      )}
    </div>
  );
}

export default App;
