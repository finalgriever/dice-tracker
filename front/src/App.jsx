import React, { useState } from "react";
import "./App.css";
import DiceGrid from "./components/diceGrid";
import DiceCountSelector from "./components/diceCountSelector";
import DiceRoll from "./components/diceRoll";
import RecordedRolls from "./components/recordedRolls";
import Grid from "@material-ui/core/Grid";
import { IconButton } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import * as sessions from "./services/sessions";

function App() {
  const [numberOfDice, setNumberOfDice] = useState(null);
  const [rolledSets, setRolledSets] = useState([]);
  const [stagedDice, setStagedDice] = useState([]);

  const handleDiceRoll = value => {
    if (stagedDice.length + 1 === numberOfDice) {
      const newStage = stagedDice.concat([value]);
      const newRolledSets = rolledSets.concat([newStage]);
      setRolledSets(newRolledSets);
      setStagedDice([]);
    } else {
      setStagedDice(stagedDice.concat([value]));
    }
  };

  const submit = async () => {
    let response = await sessions.postSession(rolledSets);
    console.log(response);
  };

  return (
    <div className="App">
      <h1>Dice Tracker</h1>
      {numberOfDice === null ? (
        <DiceCountSelector emitDiceCount={setNumberOfDice} />
      ) : (
        <>
          <Grid container>
            <Grid item xs={10}>
              <RecordedRolls rolls={rolledSets} />
            </Grid>
            <Grid item xs={2}>
              <IconButton onClick={submit}>
                <Send />
              </IconButton>
            </Grid>
          </Grid>
          <DiceRoll maxDice={numberOfDice} rolledDice={stagedDice} />
          <DiceGrid emitDiceRoll={value => handleDiceRoll(value)} />
        </>
      )}
    </div>
  );
}

export default App;
