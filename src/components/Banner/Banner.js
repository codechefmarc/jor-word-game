import React from 'react';
import ResetGame from '../ResetGame/ResetGame';

function Banner({ status, children, resetGame }) {
  return (
    <div className={`${status} banner`}>
      {children}
      <ResetGame resetGame={resetGame} />
    </div>
  );
}
export default Banner;
