//import useState, useContext, createContext from react

import { useState, useContext, createContext } from "react";

//create a GameContext to store the shared data
const GameContext = createContext();
//define GameProvider function component to bundle the application and provide state
//initialize page, score, and field states using useState hooks
//create moveMole function to increment the score and randomize the mole position
//assign all states and functions to a single value object
//return the GameContext Provider component with the value object for all child components
//define a custom hook function named useGame to extract the context data
//implement an if statement to throw an error if useGame is used outside the Provider
//define makeField helper function to create an array of 9 slots with one random mole
export function GameProvider({ children }) {
  const [page, setPage] = useState("WELCOME");
  const [score, setScore] = useState(0);
  const [field, setField] = useState(makeField());

  const moveMole = () => {
    setScore(score + 1);
    setField(makeField());
  };

  const value = { page, setPage, score, setScore, field, moveMole };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const value = useContext(GameContext);
  if (!value) {
    throw Error("useGame must be used inside GameProvider");
  }
  return value;
}

function makeField() {
  const field = Array(9).fill(false);
  const randomIndex = Math.floor(Math.random() * field.length);
  field[randomIndex] = true;
  return field;
}
