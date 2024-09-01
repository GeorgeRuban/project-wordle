import React from 'react';

import { range, sample } from '../../utils';
import Banner from '../Banner';
import GuessInput from '../GuessInput';
import { WORDS } from '../../data';
import GuessResults from '../GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers'; 

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState(
    range(NUM_OF_GUESSES_ALLOWED).map(() => null));
  const [guessNumber, setGuessNumber] = React.useState(0);
  const [gameOver, setGameOver] = React.useState(false);
  const [won, setWon] = React.useState(false);

  function addGuess(newGuess) {
    setGuessResults(
      guessResults.map((result, index) => 
        (index === guessNumber) ? checkGuess(newGuess, answer) : result
    ));
    setGuessNumber(guessNumber + 1);
    if (newGuess === answer) {
      setWon(true);
      setGameOver(true);
    } else if (guessNumber === NUM_OF_GUESSES_ALLOWED -1) {
      setGameOver(true);
    }
  }

  return (<>
    {gameOver && 
      <Banner won={won} guessNumber={guessNumber} answer={answer} />}
    <GuessResults results={guessResults} />
    <GuessInput addGuess={addGuess} disabled={gameOver}/>
  </>);
}

export default Game;
