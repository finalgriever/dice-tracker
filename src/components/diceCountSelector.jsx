import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { IconButton } from "@material-ui/core";
import { RemoveCircleIcon, AddCircleIcon, SendIcon } from "@materila-ui/icons";

function DiceCountSelector({ emitDiceCount }) {
  const [count, setCount] = useState(2);
  return (
    <Grid container>
      <Grid item xs={4}>
        <IconButton onClick={setCount(count > 0 ? count - 1 : count)}>
          <RemoveCircleIcon />
        </IconButton>
      </Grid>
      <Grid item xs={4}>
        {count}
      </Grid>
      <Grid item xs={4}>
        <IconButton onClick={setCount(count + 1)}>
          <AddCircleIcon />
        </IconButton>
      </Grid>
      <Grid item xs={12}>
        <IconButton onClick={() => emitDiceCount(count)}>
          <SendIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default DiceCountSelector;
