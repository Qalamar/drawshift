import React from "react";
import DottedBackground from "../../components/common/DottedBackground";
import FeatureList from "../../components/features/FeatureList";
import { styles } from "../../components/features/FeatureStyles";

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
      <FeatureList />
    </div>
  );
};

export default Features;
