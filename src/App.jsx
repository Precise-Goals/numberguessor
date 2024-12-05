import { useState } from "react";
import "./App.css";

function App() {
  const [random, setRandom] = useState(randnumgen());
  const [guess, setGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [hint, setHint] = useState("");
  const [c, setC] = useState(0);

  let number = 0;

  function randnumgen() {
    return Math.floor(Math.random() * 100) + 1;
  }

  function handleInputChange(e) {
    setGuess(e.target.value);
  }

  function handleGuess() {
    const parsedGuess = parseInt(guess);
    if (isNaN(parsedGuess)) {
      setHint("Please Enter a Valid Number");
      return;
    }
    setGuesses([...guesses, parsedGuess]);
    setC(c + 1);

    if (parsedGuess < random) {
      setHint("Choose a little bit Bigger Number");
    } else if (parsedGuess > random) {
      setHint("Choose a little bit Smaller Number");
    } else {
      setHint("You Guessed the Correct Number in " + `${c}` + " Guesses");
    }
    setGuess("");
  }
  return (
    <div id="king">
      <div id="main">
        <nav className="top">
          <ul className="l">
            <li>Numbo</li>
          </ul>
        </nav>
        <section className="div">
          <h1 className="title"> The Number Guessing Game</h1>
          <div className="game">
            <input
              type="text"
              value={guess}
              onChange={handleInputChange}
              placeholder="Try to Guess a Number"
              className="num"
              onKeyDown={(e) => e.key === "Enter" && handleGuess()}
            />
            <button className="guess" onClick={handleGuess}>
              Guess
            </button>
          </div>
          <div className="hint">
            <p>{hint}</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
