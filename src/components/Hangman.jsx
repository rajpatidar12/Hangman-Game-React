// src/components/Hangman.jsx
import React from "react";
import WordDisplay from "./WordDisplay";
import LetterButtons from "./LetterButtons";
import GameOver from "./GameOver";
import useHangman from "../hooks/useHangman";

const Hangman = () => {
  const { word, hint, guessedLetters, mistakes, handleGuess, resetGame } =
    useHangman();
  const isGameOver = mistakes >= 6;
  const isWordGuessed = word
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  // Function to render SVG for hangman stages
  const renderHangman = (mistakes) => {
    return (
      <svg width="100" height="200" xmlns="http://www.w3.org/2000/svg">
        <line
          x1="10"
          y1="180"
          x2="90"
          y2="180"
          stroke="black"
          strokeWidth="2"
        />{" "}
        {/* Base */}
        <line
          x1="50"
          y1="180"
          x2="50"
          y2="20"
          stroke="black"
          strokeWidth="2"
        />{" "}
        {/* Vertical Post */}
        <line
          x1="10"
          y1="20"
          x2="50"
          y2="20"
          stroke="black"
          strokeWidth="2"
        />{" "}
        {/* Horizontal Post */}
        <line
          x1="10"
          y1="20"
          x2="10"
          y2="60"
          stroke="black"
          strokeWidth="2"
        />{" "}
        {/* Noose */}
        {mistakes > 0 && (
          <circle
            cx="10"
            cy="70"
            r="10"
            stroke="black"
            strokeWidth="2"
            fill="none"
          />
        )}{" "}
        {/* Head */}
        {mistakes > 1 && (
          <line
            x1="10"
            y1="80"
            x2="10"
            y2="120"
            stroke="black"
            strokeWidth="2"
          />
        )}{" "}
        {/* Body */}
        {mistakes > 2 && (
          <line
            x1="10"
            y1="90"
            x2="30"
            y2="110"
            stroke="black"
            strokeWidth="2"
          />
        )}{" "}
        {/* Right Arm */}
        {mistakes > 2 && (
          <line
            x1="10"
            y1="90"
            x2="-10"
            y2="110"
            stroke="black"
            strokeWidth="2"
          />
        )}{" "}
        {/* Left Arm */}
        {mistakes > 4 && (
          <line
            x1="10"
            y1="120"
            x2="30"
            y2="140"
            stroke="black"
            strokeWidth="2"
          />
        )}{" "}
        {/* Right Leg */}
        {mistakes > 4 && (
          <line
            x1="10"
            y1="120"
            x2="-10"
            y2="140"
            stroke="black"
            strokeWidth="2"
          />
        )}{" "}
        {/* Left Leg */}
      </svg>
    );
  };

  return (
    <div className="hangman-container">
      <h2>Guesses: {mistakes} / 6</h2>
      {renderHangman(mistakes)}
      <WordDisplay word={word} guessedLetters={guessedLetters} />
      <LetterButtons
        guessedLetters={guessedLetters}
        handleGuess={handleGuess}
        disabled={isGameOver || isWordGuessed}
      />
      {isGameOver && <GameOver resetGame={resetGame} />}
      {isWordGuessed && !isGameOver && <h2>You guessed the word!</h2>}
      <p className="hint">Hint: {hint}</p>
    </div>
  );
};

export default Hangman;
