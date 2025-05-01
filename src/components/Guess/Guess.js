import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ value, answer }) {
  let status = '';
  if (value) {
    status = checkGuess(value, answer);
  }

  return (
    <p className="guess">
      {range(5).map((num) => {
        const statusClass = value ? status[num].status : '';
        return (
          <span key={num} className={`cell ${statusClass}`}>
            {value ? value[num] : undefined}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
