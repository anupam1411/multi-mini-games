"use client";
import React, { useState, useEffect } from "react";
import Reload from "./reload";
import BackHome from "./backHome";

// const emojis = ["@", "#", "$", "%", "&", "?", "+", "="];
const emojis = ["😊", "😑", "😂", "😒", "😁", "😉", "😎", "😮"];

const generateGrid = (targetemoji) => {
  const grid = [];
  const totalBoxes = 4 * 5;

  // Calculate the number of boxes that should contain the targetemoji
  const numTargetemojiBoxes = 1;

  // Create an array with repeated emojis, including the targetemoji
  const emojiArray = Array.from({ length: numTargetemojiBoxes }, () =>
    targetemoji === undefined
      ? emojis[Math.floor(Math.random() * emojis.length)]
      : targetemoji
  );

  // Calculate the number of boxes that should contain other emojis
  const numOtherBoxes = totalBoxes - emojiArray.length;

  // Create an array with other emojis (excluding the targetemoji)
  const otheremojis = emojis.filter((emoji) => emoji !== emojiArray[0]);

  // Create a combined array with repeated other emojis
  const otheremojiArray = Array.from(
    { length: numOtherBoxes },
    () => otheremojis[Math.floor(Math.random() * otheremojis.length)]
  );

  // Combine the arrays and shuffle them randomly
  const combinedArray = [...emojiArray, ...otheremojiArray];
  for (let i = combinedArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [combinedArray[i], combinedArray[j]] = [combinedArray[j], combinedArray[i]];
  }

  // Fill the grid with emojis from the shuffled combinedArray
  let currentIndex = 0;
  for (let i = 0; i < 4; i++) {
    const row = [];
    for (let j = 0; j < 5; j++) {
      row.push(combinedArray[currentIndex]);
      currentIndex = (currentIndex + 1) % combinedArray.length;
    }
    grid.push(row);
  }

  return grid;
};

const GuessGame = ({ targetemoji }) => {
  const [grid, setGrid] = useState(generateGrid(targetemoji));
  const [revealed, setRevealed] = useState(
    Array.from({ length: 4 }, () => Array.from({ length: 5 }, () => false))
  );
  const [won, setWon] = useState(false);

  useEffect(() => {
    setGrid(generateGrid(targetemoji));
    setRevealed(
      Array.from({ length: 4 }, () => Array.from({ length: 5 }, () => false))
    );
    setWon(false);
  }, [targetemoji]);

  const handleBoxClick = (i, j) => {
    if (grid[i][j] === targetemoji) {
      setWon(true);
      setRevealed(
        Array.from({ length: 4 }, () => Array.from({ length: 5 }, () => true))
      );
    } else {
      setRevealed((prev) => {
        const newRevealed = [...prev];
        newRevealed[i][j] = true;
        return newRevealed;
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[80vh] w-[80vw] bg-gray-900">
      <BackHome />
      <Reload />
      <div className="border-2 rounded-md p-4 mb-4">
        {grid.map((row, i) => (
          <div key={i} className="flex justify-center">
            {row.map((emoji, j) => (
              <div
                key={j}
                className="w-12 h-12 md:w-16 md:h-16 border-2 border-black rounded-xl text-center cursor-pointer select-none flex items-center justify-center bg-gray-300 transition-opacity duration-500 hover:bg-gray-400"
                onClick={() => handleBoxClick(i, j)}
              >
                <div
                  className={` text-4xl transition-opacity duration-500 ${
                    revealed[i][j] ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {emoji}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      {won && <div className="mt-4 text-green-600 font-bold">You won!</div>}
    </div>
  );
};

export default GuessGame;
