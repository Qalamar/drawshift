import React from "react";
import DottedBackground from "../../assets/ui/DottedBackground";
import ListItem from "../../assets/components/ListItem";

const features = require("../../assets/data/features.json");

const styles = {
  container:
    "px-4 mt-16 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20",
  header: "max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12",
  title:
    "max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto",
  list: "max-w-lg space-y-3 sm:mx-auto lg:max-w-xl",
};
const Features = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          <span className="relative inline-block">
            <DottedBackground />
            <span className="relative">Play</span>
          </span>{" "}
          anywhere you want
        </h2>
      </div>
      {/* Features List */}
      <div className={styles.list}>
        {features.map((feature: { text: string; icon: string }) => (
          <ListItem
            key={feature.text}
            text={feature.text}
            icon={feature.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
