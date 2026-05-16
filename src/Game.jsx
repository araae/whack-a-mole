import { useGame } from "./Context";

//define the default Game component and extract the state and actions from the hook
//render the scoreboard section displaying the score and a back button
//map over the field array using a ternary operator to dynamically render moles or holes
export default function Game() {
  const { field, setPage, score, moveMole } = useGame();

  return (
    <main>
      <h1>Game</h1>
      <section>
        <h2>Scoreboard</h2>
        <p>
          <strong>Score: </strong> {score}
        </p>
        <button onClick={() => setPage("WELCOME")}>Go back</button>
      </section>

      <ul className="field">
        {field.map((isMole, i) =>
          isMole ? (
            <li key={i} className="mole" onClick={moveMole}></li>
          ) : (
            <li key={i} className="hole"></li>
          ),
        )}
      </ul>
    </main>
  );
}
