import React from "react";
import ClearButton from "./ClearButton";
import SubmitButton from "./SubmitButton";

const Phase1 = () => {
  return (
    <div className="flex justify-center -mt-24 h-screen items-center flex-col space-y-2 col-span-2">
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
        <div className="flex justify-between py-6">
          <div>
            <ClearButton />
          </div>
          <div>
            <SubmitButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phase1;
