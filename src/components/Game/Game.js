import React from 'react';

import { sample } from '../../utils';
import GuessInput from '../GuessInput';
import { WORDS } from '../../data';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);

  function addGuess(newGuess) {
    setGuessResults([...guessResults, newGuess])
  }

  return (<>
    <GuessResults results={guessResults} />
    <GuessInput addGuess={addGuess} />
  </>);
}

export default Game;
