import React from 'react';

import { sample } from '../../utils';
import GuessInput from '../GuessInput';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  return <GuessInput/>;
}

export default Game;
