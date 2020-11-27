import React from "react";
import FeatureIcon from "../../assets/icons/FeatureIcon";

interface Feature {
  text: string;
  icon: string;
}

const ListItem = ({ text, icon }: Feature) => (
  <div
    key={icon}
    className="flex items-center p-2 transition-colors duration-200 border rounded shadow group hover:bg-deep-purple-accent-400 hover:border-deep-purple-accent-400"
  >
    <FeatureIcon />
    <div className="text-gray-800 transition-colors duration-200 group-hover:text-white">
      {text}
    </div>
  </div>
);

export default ListItem;
