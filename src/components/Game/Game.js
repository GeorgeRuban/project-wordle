import React from 'react';

import { range, sample } from '../../utils';
import GuessInput from '../GuessInput';
import { WORDS } from '../../data';
import GuessResults from '../GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState(
    range(NUM_OF_GUESSES_ALLOWED).map(() => ''));
  const [guessNumber, setGuessNumber] = React.useState(0);

  function addGuess(newGuess) {
    setGuessResults(
      guessResults.map((result, index) => 
        (index === guessNumber) ? newGuess : result
    ));
    setGuessNumber(guessNumber + 1);
  }

  return (<>
    <GuessResults results={guessResults} />
    <GuessInput addGuess={addGuess} />
  </>);
}

export default Game;
