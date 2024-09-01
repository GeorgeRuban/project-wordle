import React from 'react';
import { WORD_LENGTH } from '../../constants';
import { range } from '../../utils';

function Guess({guess}) {
  return <p className="guess">
    { range(WORD_LENGTH).map(index =>
        <span class="cell" key={index}>{guess ? guess.charAt(index) : ''}</span>
    )}
  </p>;
}

export default Guess;
