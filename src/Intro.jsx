import { useGame } from "./Context";
//define the default Intro component and extract setPage from the hook
//render the welcome screen main container with a title and instructions
//render a start button that updates the page state to game when clicked
export default function Intro() {
  const { setPage } = useGame();

  return (
    <main className="welcome-screen">
      <h1>Whack a Mole</h1>
      <p>Click the moles to score points!</p>
      <button onClick={() => setPage("GAME")}>Start Game</button>
    </main>
  );
}
