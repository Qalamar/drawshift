import React from "react";

interface MultiStep {
  steps: number;
  progress: number;
}
const MultiStep: React.FC<MultiStep> = ({ steps, progress }) => {
  return (
    <div className="col-span-3 ml-4 px-4 py-2 flex flex-row items-center justify-center">
      {[...Array(steps)].map((circle, stepIndex) => {
        return (
          <div
            key={stepIndex}
            className={`mx-2 w-3 h-3 rounded-full ${
              progress >= stepIndex
                ? "bg-deep-purple-accent-400"
                : "bg-gray-500 opacity-25 "
            } ${progress === stepIndex && "shadow-outline"}`}
          ></div>
        );
      })}
    </div>
  );
};

export default MultiStep;
