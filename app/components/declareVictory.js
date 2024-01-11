"use client";
import { useGameContext } from "../contexts/gameContext";
import React, { useState } from "react";

export const DeclareVictory = () => {
  const { victory, rotation } = useGameContext();

  return (
    <div className="mx-auto my-8">
      {victory == true ? (
        <div className="max-w-[450px] mx-auto text-center">
          <p className="font-normal text-lg mb-4">
            Ottimo lavoro! Siete diventati dei maestri della tecnologia e della
            logica! Ormai nemmeno la NASA ha più alcun segreto per voi!
          </p>
          <p className="font-normal text-xl mb-4">
            Eccovi dunque l'ultimo indizio...
          </p>
          <p className="font-medium text-2xl text-blue-700">
            Per concludere il cammino per voi tracciato,
          </p>
          <p className="font-medium text-2xl text-blue-700">
            tornate dove tutto è cominciato...
          </p>
          <p className="font-medium text-2xl text-blue-700">
            Tra il Cobra in agguato e lo Sciacallo che sghignazza,
          </p>
          <p className="font-medium text-2xl text-blue-700">
            giungerai alla fine di quest'avventura pazza!
          </p>
        </div>
      ) : rotation != 0 ? (
        <p className="font-light text-lg text-red-400">
          B. P. sarebbe fiero dei tuoi tentativi, ma ancora non ci siamo...
        </p>
      ) : (
        <p className="font-light text-lg text-green-400">
          Decisamente un bel passo avanti!
        </p>
      )}
    </div>
  );
};
