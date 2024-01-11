"use client";

import React from "react";
import { useGameContext } from "../contexts/gameContext";

const ColorGrid = () => {
  const { grid, toggleSquare } = useGameContext();

  const getSquareColor = (value) => {
    switch (value) {
      case 0:
        return "bg-red-500";
      case 1:
        return "bg-green-500";
      case 2:
        return "bg-blue-500";
      case 3:
        return "bg-white";
      default:
        return "black"; // Colore di fallback nel caso ci siano valori non validi
    }
  };

  const handleSquareClick = (row, col) => {
    // Chiamare la funzione toggleGrid con le coordinate desiderate
    toggleSquare(row, col);
  };

  return (
    <div
      style={{
        width: "300px", // Puoi regolare la dimensione a tuo piacimento
        height: "300px",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        // gridTemplateRows: "repeat(3, 1fr)",
        //gap: "8px",
      }}
      className="mx-auto mt-8"
    >
      {grid.map((row, rowIndex) =>
        row.map((value, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            onClick={() => handleSquareClick(rowIndex, colIndex)}
            style={{
              width: "100px", // Puoi regolare la dimensione a tuo piacimento
              height: "100px",
              //backgroundColor: getSquareColor(value),
              border: "1px solid #000",
              boxSizing: "border-box",
              textAlign: "center",
              lineHeight: "100px", // Centra il testo verticalmente
              cursor: "pointer",
            }}
            className={getSquareColor(value)}
          />
          //     {value}
          //   </div>
        ))
      )}
    </div>
  );
};

export default ColorGrid;
