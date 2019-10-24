import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import DiceGrid from "./components/diceGrid";
import DiceCountSelector from "./components/diceCountSelector";
import DiceRoll from "./components/diceRoll";
import RecordedRolls from "./components/recordedRolls";
import { Button } from "@material-ui/core";

function App() {
  const [numberOfDice, setNumberOfDice] = useState(null);
  const [rolledSets, setRolledSets] = useState([]);
  const [stagedDice, setStagedDice] = useState([]);

  if (stagedDice.count === numberOfDice) {
    setRolledSets(rolledSets.push(stagedDice));
    setStagedDice([]);
  }

  const handleDiceRoll = value => {
    setStagedDice(stagedDice.concat([value]));
  };

  const submit = () => {
    console.log(rolledSets);
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
        <>
          <div>
            <RecordedRolls rolls={rolledSets} />
            <Button onClick={submit}>Submit</Button>
          </div>
          <DiceRoll maxDice={numberOfDice} rolledDice={stagedDice} />
          <DiceGrid emitDiceRoll={handleDiceRoll} />
        </>
      )}
    </div>
  );
}

export default App;
