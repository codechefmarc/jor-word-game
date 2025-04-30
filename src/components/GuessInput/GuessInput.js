import React from 'react';

function GuessInput({ guesses, setGuesses }) {
  const [guess, setGuess] = React.useState('');

  function handleGuessSubmit(event) {
    event.preventDefault();
    setGuesses([...guesses, guess]);
    setGuess('');
  }
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => handleGuessSubmit(event)}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        pattern="[A-Z]{5}"
        minLength={5}
        maxLength={5}
        onChange={(event) => {
          const guessText = event.target.value;
          setGuess(guessText.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
