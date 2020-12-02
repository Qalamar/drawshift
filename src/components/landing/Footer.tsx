import React from "react";
import Github from "../../assets/icons/GithubIcon";
import InfoIcon from "../../assets/icons/InfoIcon";
import Mail from "../../assets/icons/MailIcon";
import Divider from "../../components/common/Divider";

const Footer = () => {
  return (
    <div className="relative mt-32 bg-deep-purple-accent-400">
      <Divider />
      <div className="flex justify-center h-28 items-center mt-4 space-x-4 sm:mt-0">
        <Github />
        <Mail />
        <InfoIcon />
      </div>
    </div>
  );
};

export default Footer;
