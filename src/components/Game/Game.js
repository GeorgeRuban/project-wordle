import React from 'react';

import { range, sample } from '../../utils';
import GuessInput from '../GuessInput';
import { WORDS } from '../../data';
import GuessResults from '../GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';
import HappyBanner from '../HappyBanner';
import SadBanner from '../SadBanner';


function Game() {
  const [guessResults, setGuessResults] = React.useState(
    range(NUM_OF_GUESSES_ALLOWED).map(() => null));
  const [guessNumber, setGuessNumber] = React.useState(0);
  const [gameOver, setGameOver] = React.useState(false);
  const [won, setWon] = React.useState(false);
  const [answer, setAnswer] = React.useState(sample(WORDS));

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

  function restart() {
    setWon(false);
    setGuessResults(range(NUM_OF_GUESSES_ALLOWED).map(() => null));
    setAnswer(sample(WORDS));
    setGameOver(false);
    setGuessNumber(0);
  }

  return (<>
    {gameOver && (won 
      ? <HappyBanner guessNumber={guessNumber} restart={restart}/> 
      : <SadBanner answer={answer} restart={restart}/>)}
    <GuessResults results={guessResults} />
    <GuessInput addGuess={addGuess} disabled={gameOver}/>
  </>);
}

export default Game;
