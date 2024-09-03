import React from "react";
import Banner from "../Banner";

function HappyBanner({ guessNumber, restart }) {
  return (
    <Banner className="happy banner" restart={restart}>
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {guessNumber} Guess{guessNumber > 1 && "es"}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default HappyBanner;
