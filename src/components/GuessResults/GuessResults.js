import React from 'react';
import Guess from '../Guess/Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess) => (
        <Guess guess={guess} />
      ))}
      {range(0, NUM_OF_GUESSES_ALLOWED - guesses.length).map((row) => (
        <Guess />
      ))}
    </div>
  );
}

export default GuessResults;
