import Game from "./Game";
import Intro from "./Intro";
import { useGame } from "./Context";

//implement conditional if statements to check the page state value
//render the Intro component if the page matches WELCOME
//render the Game component if the page matches GAME
export default function App() {
  const { page } = useGame();

  if (page === "WELCOME") {
    return <Intro />;
  }

  if (page === "GAME") {
    return <Game />;
  }
}
