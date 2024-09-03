import React from "react";
import { WORD_LENGTH } from "../../constants";
import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(WORD_LENGTH).map((index) => {
        const className = "cell " + (guess ? guess[index].status : "");
        const letter = guess ? guess[index].letter : "";
        return (
          <span className={className} key={index}>
            {letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
