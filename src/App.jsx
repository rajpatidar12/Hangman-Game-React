// src/App.jsx
import React from "react";
import Hangman from "./components/Hangman";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <h1>Hangman Game</h1>
      <Hangman />
    </div>
  );
};

export default App;
