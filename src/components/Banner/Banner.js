import React from 'react';

function Banner({won, guessNumber, answer}) {
  if (won) {
    return <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in {' '}
        <strong>{guessNumber} guess{guessNumber > 1 && "es"}</strong>.
      </p>
    </div>
  }
  return <div className="sad banner">
    <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
  </div>;
}

export default Banner;
