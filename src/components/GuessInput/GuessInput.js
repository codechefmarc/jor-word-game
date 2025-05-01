import React from 'react';

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  function handleTentativeGuess(event) {
    event.preventDefault();
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess('');
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleTentativeGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        disabled={gameStatus !== 'playing'}
        value={tentativeGuess}
        required={true}
        minLength={5}
        maxLength={5}
        pattern="[A-Z]{5}"
        onChange={(event) => {
          setTentativeGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
