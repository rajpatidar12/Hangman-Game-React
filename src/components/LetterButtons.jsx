// src/components/LetterButtons.jsx
import React from "react";

const LetterButtons = ({ guessedLetters, handleGuess, disabled }) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  return (
    <div className="letter-buttons">
      {alphabet.map((letter) => (
        <button
          key={letter}
          onClick={() => handleGuess(letter)}
          disabled={guessedLetters.includes(letter) || disabled}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default LetterButtons;
