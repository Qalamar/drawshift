import React, { useState } from "react";
import CanvasDraw from "react-canvas-draw";

const colors = [
  "#ffffff",
  "#30d343",
  "#FFFF33",
  "#6200F5",
  "#ed4e4e",
  "#141314",
];
let saveableCanvas: {
  clear: () => void;
  getSaveData: () => string;
  undo: () => void;
};

const Phase2 = () => {
  const [brushColor, setbrushColor] = useState("#0e0e0e0");
  const [brushRadius, setbrushRadius] = useState(5);
  const updateColors = (color: string) => {
    setbrushColor(color);
  };

  return (
    <div className="grid grid-cols-2 h-full">
      <div className="flex justify-center -mt-24 h-screen items-center flex-col space-y-2">
        <div className="text-left">
          <h1 className="font-bold text-4xl">Phase 1</h1>
          <p className=" font-medium text-vod-primary">
            Suggest a word that other players will have to draw
          </p>
          <div className=" shadow-card w-full h-28 my-10  text-center text-4xl flex justify-center text-opacity-30 rounded-lg">
            <input
              placeholder="Word"
              type="text"
              className=" max-w-sm focus:border-deep-purple-accent-400 px-2 focus:outline-none"
            />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="flex justify-center -mt-24 h-screen items-center flex-col space-y-8">
        <div className="shadow-card w-wide rounded-xl">
          <CanvasDraw
            brushColor={brushColor}
            brushRadius={brushRadius}
            hideInterface={true}
            hideGrid={true}
            canvasWidth={363}
            lazyRadius="0"
            className="rounded-xl"
            ref={(canvasDraw: any) => (saveableCanvas = canvasDraw)}
          />
        </div>
        <div className="shadow-card w-wide h-12 rounded-xl"></div>
      </div>
    </div>
  );
};

export default Phase2;
