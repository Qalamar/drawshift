import { motion } from "framer-motion";
import React from "react";
import LayoutSidebar from "./LayoutSidebar";

const Layout = () => {
  return (
    <div className="grid grid-cols-10 h-full">
      <motion.div
        animate={{ opacity: [0, 1], y: [100, 0] }}
        transition={{ duration: 1, delay: 1.5 }}
        className="col-span-8"
      >
        <div className="grid grid-cols-2 h-full">
          <div className="flex justify-center items-center flex-col">
            <div className="text-left">
              <h1 className="font-bold text-4xl py-2">Phase 1</h1>
              <p className=" font-medium text-vod-primary">
                Suggest a word that other players will have to draw
              </p>
              <div className=" shadow-card w-full h-24 my-6  text-center text-4xl flex justify-center text-opacity-30 rounded-lg">
                <input
                  placeholder="Word"
                  type="text"
                  className=" max-w-sm focus:border-deep-purple-accent-400 px-2 focus:outline-none"
                />
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </motion.div>
      <LayoutSidebar />
    </div>
  );
};

export default Layout;
