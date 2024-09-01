import React from 'react';
import { WORD_LENGTH } from '../../constants';

function GuessInput({addGuess}) {
  const [guess, setGuess] = React.useState("");
  return (
    <form 
      className="guess-input-wrapper"
      onSubmit={(event)=>{
        // Don't actually submit the form (which would reload the page, since there is no action=url)
        event.preventDefault();
        if (guess.length < WORD_LENGTH) {
          alert(`Please guess exactly ${WORD_LENGTH} characters.`);
          return;
        }
        addGuess(guess);
        setGuess("");
      }}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        id="guess-input" 
        type="text"
        maxLength={WORD_LENGTH}
        minLength={WORD_LENGTH}
        // minLength attribute fails when the toUpperCase() method changes the characters entered.
        // Using pattern instead, with title for clarification of the error.
        pattern={`[a-zA-Z]{${WORD_LENGTH}}`}
        title={`${WORD_LENGTH} letter word`}
        required
        value={guess}
        onChange={(event)=>{
          setGuess(event.target.value.toUpperCase());
        }} 
      />
    </form>);
}

export default GuessInput;

