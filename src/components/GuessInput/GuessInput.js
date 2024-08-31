import React from 'react';

function GuessInput({addGuess}) {
  const [guess, setGuess] = React.useState("");
  const minLength = 5;
  return (
    <form 
      className="guess-input-wrapper"
      onSubmit={(event)=>{
        // Don't actually submit the form (which would reload the page, since there is no action=url)
        event.preventDefault();
        if (guess.length < minLength) {
          alert(`Please guess exactly ${minLength} characters.`);
          return;
        }
        console.info({guess});
        addGuess(guess);
        setGuess("");
      }}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        id="guess-input" 
        type="text"
        maxLength={minLength}
        minLength={minLength}
        // minLength attribute fails when the toUpperCase() method changes the characters entered.
        // Using pattern instead, with title for clarification of the error.
        pattern={`[a-zA-Z]{${minLength}}`}
        title={`${minLength} letter word`}
        required
        value={guess}
        onChange={(event)=>{
          setGuess(event.target.value.toUpperCase());
        }} 
      />
    </form>);
}

export default GuessInput;

