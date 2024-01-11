"use client";
import React, { createContext, useContext, useState } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [grid, setGrid] = useState([
    [3, 3, 3],
    [3, 3, 3],
    [3, 3, 3],
  ]);
  const [victory, setVictory] = useState(false);
  const [rotation, setRotation] = useState(90);

  const updateGrid = (newGrid) => {
    setGrid(newGrid);
  };

  const rotateSquare = () => {
    setRotation((prevRotation) => (prevRotation + 90) % 360);
  };

  const updateVictory = (newVictory) => {
    setVictory(newVictory);
  };

  const toggleSquare = (row, col) => {
    const newGrid = [...grid];
    newGrid[row][col] = (newGrid[row][col] + 1) % 4;
    setGrid(newGrid);

    // Verifica della vittoria
    const victoryCondition = [
      [0, 1, 0],
      [1, 2, 2],
      [0, 2, 1],
    ];
    if (JSON.stringify(newGrid) === JSON.stringify(victoryCondition)) {
      setVictory(true);
    } else {
      setVictory(false);
    }
  };

  return (
    <GameContext.Provider
      value={{ grid, victory, rotation, toggleSquare, rotateSquare }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  return useContext(GameContext);
};
