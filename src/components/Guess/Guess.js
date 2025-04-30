import React from 'react';
import { range } from '../../utils';

function Guess({ guess }) {
  let guessArray = ['', '', '', '', ''];

  if (guess) {
    guessArray = guess.split('');
  }

  return (
    <>
      <p key={Math.random()} className="guess">
        {guessArray.map((letter) => (
          <span key={Math.random()} className="cell">
            {letter}
          </span>
        ))}
      </p>
    </>
  );
}

export default Guess;
