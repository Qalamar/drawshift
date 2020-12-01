import React from "react";
import { styles } from "./FeatureStyles";
import FeatureItem from "./FeatureItem";

const features = require("../../assets/data/features.json");

const FeatureList = () => {
  return (
    <div className={styles.list}>
      {features.map((feature: { text: string; icon: string }) => (
        <FeatureItem
          key={feature.text}
          text={feature.text}
          icon={feature.icon}
        />
      ))}
    </div>
  );
};

export default FeatureList;
