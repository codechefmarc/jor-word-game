import React from 'react';

const rows = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'];

function Keyboard({
  guessedCharacters,
  setGuessedCharacters,
  handleSubmitGuess,
  keyboardGuess,
  setKeyboardGuess,
}) {
  function handleKeyboardClick(event) {
    const nextGuessedCharacters = guessedCharacters.concat(
      event.target.innerHTML.split(''),
    );

    const nextKeyboardGuess = [...keyboardGuess, event.target.innerHTML];

    setKeyboardGuess(nextKeyboardGuess);
    if (nextKeyboardGuess.length === 5) {
      handleSubmitGuess(nextKeyboardGuess.join(''));
      setKeyboardGuess([]);
    }
    setGuessedCharacters(nextGuessedCharacters);
  }

  return (
    <div className="keyboard">
      {rows.map((row, index) => (
        <div key={index} className="row">
          {row.split('').map((character) => (
            <button
              onClick={(event) => handleKeyboardClick(event)}
              className={guessedCharacters.includes(character) ? 'used' : ''}
              key={character}
            >
              {character}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
