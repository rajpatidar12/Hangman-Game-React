// src/hooks/useHangman.js
import { useState, useEffect } from "react";

const wordsWithHints = {
  react: "A JavaScript library for building user interfaces.",
  javascript: "A programming language commonly used in web development.",
  hangman: "A game of guessing letters to find a word.",
  programming: "The process of writing computer programs.",
  vite: "A build tool that provides a faster development experience.",
  coffee: "A popular beverage made from roasted coffee beans.",
  apple: "A fruit that comes in various colors, often red or green.",
  bicycle: "A two-wheeled vehicle powered by pedaling.",
  computer:
    "An electronic device for processing data and performing calculations.",
  travel: "To move from one place to another, often for pleasure.",
  library: "A place where you can borrow books or access information.",
  music:
    "An art form consisting of sound and silence, often organized in time.",
  learning:
    "The process of acquiring knowledge or skills through study or experience.",
  chocolate: "A sweet treat made from roasted and ground cacao seeds.",
  family: "A group of individuals related by blood or marriage.",
  garden: "A plot of land where flowers, plants, or vegetables are cultivated.",
  sunshine: "The light and warmth that comes from the sun.",
  friendship: "A relationship between people who care for each other.",
  happiness: "A state of well-being and contentment.",
  adventure: "An exciting experience or journey.",
  photography: "The art of capturing images using a camera.",
  chocolate: "A sweet treat made from cacao beans.",
  ocean: "A vast body of saltwater that covers much of the earth.",
  basketball: "A sport played with a ball and hoop.",
  television: "A device used for viewing shows and movies.",
  internet: "A global network connecting millions of computers.",
  smartphone: "A mobile phone with advanced features and capabilities.",
  fashion: "A popular trend in clothing, accessories, and lifestyle.",
  pizza:
    "A dish made of flattened bread topped with sauce, cheese, and various toppings.",
  soccer: "A team sport played with a round ball on a rectangular field.",
  history: "The study of past events, particularly in human affairs.",
  mathematics: "The study of numbers, shapes, and patterns.",
  science:
    "The systematic study of the natural world through observation and experimentation.",
  culture: "The social behavior and norms found in human societies.",
  language:
    "A system of communication used by a particular community or country.",
  nature:
    "The physical world collectively, including plants, animals, and landscapes.",
  mountain: "A large natural elevation of the Earth's surface.",
  river: "A large natural stream of water flowing in a channel.",
  dessert: "A sweet course typically eaten at the end of a meal.",
  sandwich: "Two slices of bread with filling in between.",
  travel: "The act of moving from one place to another.",
  vacation: "A period of time spent away from home or work for relaxation.",
  recipe: "A set of instructions for preparing a particular dish.",
  computer: "An electronic device for processing data.",
  volunteer: "To offer services willingly without pay.",
  exercise: "Physical activity to improve health and fitness.",
  meditation: "A practice to train attention and awareness.",
  painting: "The practice of applying pigment to a surface to create art.",
  yoga: "A practice of physical, mental, and spiritual disciplines.",
  chocolate: "A sweet treat made from cacao beans.",
  emotion:
    "A natural instinctive state of mind derived from one’s circumstances.",
  ocean: "A vast body of saltwater that covers much of the earth.",
  sandwich: "Two slices of bread with filling in between.",
  bicycle:
    "A vehicle composed of two wheels held in a frame one behind the other.",
  birthday: "The anniversary of the day on which a person was born.",
  technology: "The application of scientific knowledge for practical purposes.",
  cinema: "A theater where films are shown for public entertainment.",
  bakery: "A place where bread, pastries, and other baked goods are made.",
  chocolate: "A sweet treat made from cacao beans.",
  volunteer: "To offer services willingly without pay.",
  happiness: "A state of well-being and contentment.",
  adventure: "An exciting experience or journey.",
  friendship: "A relationship between people who care for each other.",
  sunlight: "The light that comes from the sun.",
  musician: "A person who plays a musical instrument or sings.",
  theater: "A place where plays, movies, and other performances are presented.",
  astronaut: "A person trained to travel in space.",
  community:
    "A group of people living in the same place or having a particular characteristic in common.",
  identity:
    "The qualities, beliefs, and personality that make a person or group different from others.",
};

const useHangman = () => {
  const [word, setWord] = useState("");
  const [hint, setHint] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [mistakes, setMistakes] = useState(0);

  useEffect(() => {
    const randomWord =
      Object.keys(wordsWithHints)[
        Math.floor(Math.random() * Object.keys(wordsWithHints).length)
      ];
    setWord(randomWord);
    setHint(wordsWithHints[randomWord]);
  }, []);

  const handleGuess = (letter) => {
    if (guessedLetters.includes(letter)) return;
    setGuessedLetters((prev) => [...prev, letter]);
    if (!word.includes(letter)) {
      setMistakes((prev) => prev + 1);
    }
  };

  const resetGame = () => {
    const randomWord =
      Object.keys(wordsWithHints)[
        Math.floor(Math.random() * Object.keys(wordsWithHints).length)
      ];
    setWord(randomWord);
    setHint(wordsWithHints[randomWord]);
    setGuessedLetters([]);
    setMistakes(0);
  };

  return { word, hint, guessedLetters, mistakes, handleGuess, resetGame };
};

export default useHangman;
