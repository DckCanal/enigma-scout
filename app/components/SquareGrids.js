"use client";
import React, { useState } from "react";
import { useGameContext } from "../contexts/gameContext";

const SquareGrid = () => {
  const { rotation, rotateSquare } = useGameContext();

  const getColor = (index) => {
    switch (index) {
      case 0:
        return "bg-red-500";
      case 1:
        return "bg-green-500";
      case 2:
        return "bg-red-500";
      case 3:
        return "bg-green-500";
      case 4:
        return "bg-blue-500";
      case 5:
        return "bg-blue-500";
      case 6:
        return "bg-red-500";
      case 7:
        return "bg-blue-500";
      case 8:
        return "bg-green-500";
    }
  };

  return (
    <div
      style={{
        width: "300px", // Puoi regolare la dimensione a tuo piacimento
        height: "300px",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "repeat(3, 1fr)",
        transform: `rotate(${rotation}deg)`, // Applica la rotazione
        transition: "transform 0.5s ease", // Aggiunge una transizione per una rotazione più fluida
        //cursor: "pointer",
        border: rotation != 0 ? "4px solid red" : "4px solid green",
      }}
      className="mx-auto mt-3"
      onClick={rotateSquare}
    >
      {Array.from({ length: 9 }).map((_, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #000",
            boxSizing: "border-box",
            textAlign: "center",
            lineHeight: "100px", // Centra il testo verticalmente
          }}
          className={getColor(index)}
        />
      ))}
    </div>
  );
};

export default SquareGrid;
