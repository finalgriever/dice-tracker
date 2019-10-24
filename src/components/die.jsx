import React from "react";
import * as Dice from "../dice";

const dieValueMap = {
  0: Dice.Empty,
  1: Dice.One,
  2: Dice.Two,
  3: Dice.Three,
  4: Dice.Four,
  5: Dice.Five,
  6: Dice.Six
};

function Die({ value }) {
  // This const is capitalised for a reason
  // See: https://reactjs.org/docs/jsx-in-depth.html#choosing-the-type-at-runtime
  const RenderedDie = dieValueMap[value];
  return <RenderedDie />;
}

export default Die;
