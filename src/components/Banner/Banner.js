import React from "react";

function Banner({ className, restart, children }) {
  return (
    <div className={className}>
      {children}
      <button onClick={restart}>Play again?</button>
    </div>
  );
}

export default Banner;
