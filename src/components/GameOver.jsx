// src/components/GameOver.jsx
import React from "react";

const GameOver = ({ resetGame }) => {
  return (
    <div className="game-over">
      <h2>Game Over!</h2>
      <button onClick={resetGame}>Play Again</button>
    </div>
  );
};

export default GameOver;
