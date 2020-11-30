import React from "react";
import Github from "../../assets/icons/Github";
import InfoIcon from "../../assets/icons/InfoIcon";
import Twitter from "../../assets/icons/Twitter";
import Divider from "../../assets/ui/Divider";

const Footer = () => {
  return (
    <div className="relative mt-32 bg-deep-purple-accent-400">
      <Divider />
      <div className="flex justify-center h-28 items-center mt-4 space-x-4 sm:mt-0">
        <Github />
        <Twitter />
        <InfoIcon />
      </div>
    </div>
  );
};

export default Footer;
