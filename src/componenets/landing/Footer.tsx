import React from "react";
import Github from "../../assets/icons/Github";
import Twitter from "../../assets/icons/Twitter";
import Divider from "../../assets/ui/Divider";

const Footer = () => {
  return (
    <div className="relative mt-32 bg-deep-purple-accent-400">
      <Divider />
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
          <p className="text-sm text-gray-100">
            Made by{" "}
            <a
              href="/"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400 font-bold"
            >
              Tariq Hamrit
            </a>
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <Github />
            <Twitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
