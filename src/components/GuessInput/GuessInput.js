import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState("");
  return (
  <form 
    className="guess-input-wrapper"
    onSubmit={(event)=>{
      // Don't actually submit the form (which would reload the page, since there is no action=url)
      event.preventDefault();
      console.info({guess});
      setGuess("");
    }}>
    <label htmlFor="guess-input">Enter guess:</label>
    <input 
      id="guess-input" 
      type="text"
      maxLength={5}
      minLength={5}
      required
      value={guess}
      onChange={(event)=>{
        setGuess(event.target.value.toUpperCase());
      }} 
    />
  </form>);
}

export default GuessInput;

