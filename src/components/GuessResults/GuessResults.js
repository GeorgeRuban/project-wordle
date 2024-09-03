import React from "react";
import Guess from "../Guess";

function GuessResults({ results }) {
  return (
    <div className="guess-results">
      {results.map((result, index) => (
        <Guess key={index} guess={result} />
      ))}
    </div>
  );
}

export default GuessResults;
