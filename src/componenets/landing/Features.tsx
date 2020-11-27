import React from "react";
import DottedBackground from "../../assets/ui/DottedBackground";
import ListItem from "../common/ListItem";

const features = require("../../assets/data/features.json");

const Features = () => {
  return (
    <div className="px-4 mt-16 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      {/* Features Header */}
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          Cross-Platform
        </p>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <DottedBackground />
            <span className="relative">Play</span>
          </span>{" "}
          anywhere you want
        </h2>
        <p className="text-base text-gray-700 md:text-lg px-20">
          You can play <strong>Drawshift</strong> on mobile platforms (iOS,
          Android) or in the browser and any touch devices.
        </p>
      </div>
      {/* Features List */}
      <div className="max-w-lg space-y-3 sm:mx-auto lg:max-w-xl">
        {features.map((feature: { text: string; icon: string }) => (
          <ListItem text={feature.text} icon={feature.icon} />
        ))}
      </div>
    </div>
  );
};

export default Features;
