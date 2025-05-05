import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import Keyboard from '../Keyboard/Keyboard';
import LostBanner from '../LostBanner/LostBanner';
import WonBanner from '../WonBanner/WonBanner';

function Game() {
  function getNewAnswer() {
    return sample(WORDS);
  }

  function resetGame() {
    setAnswer(getNewAnswer());
    setGuesses([]);
    setGameStatus('playing');
    setGuessedCharacters([]);
  }

  const [guesses, setGuesses] = React.useState([]);
  const [guessedCharacters, setGuessedCharacters] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('playing');
  const [answer, setAnswer] = React.useState(getNewAnswer());
  const [keyboardGuess, setKeyboardGuess] = React.useState([]);

  // To make debugging easier, we'll log the solution in the console.
  // console.info({ answer });
  // console.info({ guessedCharacters });

  function handleSubmitGuess(tentativeGuess) {
    const nextGuesses = [...guesses, tentativeGuess];
    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }

    const nextGuessedCharacters = guessedCharacters.concat(
      tentativeGuess.split(''),
    );

    setGuessedCharacters(nextGuessedCharacters);
    setGuesses(nextGuesses);
  }

  return (
    <>
      <GuessResults
        guesses={guesses}
        answer={answer}
        setGameStatus={setGameStatus}
      />
      <GuessInput
        guesses={guesses}
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
        keyboardGuess={keyboardGuess}
      />
      <Keyboard
        guessedCharacters={guessedCharacters}
        setGuessedCharacters={setGuessedCharacters}
        handleSubmitGuess={handleSubmitGuess}
        keyboardGuess={keyboardGuess}
        setKeyboardGuess={setKeyboardGuess}
      />
      {gameStatus === 'won' && (
        <WonBanner numGuesses={guesses.length} resetGame={resetGame} />
      )}
      {gameStatus === 'lost' && (
        <LostBanner answer={answer} resetGame={resetGame} />
      )}
    </>
  );
}

export default Game;
