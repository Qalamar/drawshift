import { BigHead } from "@bigheads/core";
import { motion } from "framer-motion";
import React from "react";
import { avatar } from "../../../utils/Store";

const LayoutPlayers = () => {
  return (
    <motion.div
      animate={{ opacity: [0, 1], y: [100, 0] }}
      transition={{ duration: 1, delay: 1 }}
      className="col-span-2 bg-vod-action"
    >
      <div className="bg-white w-full ml-1 text-center text-vod-content font-medium p-4 border-b-2 border-vod-primary">
        Round One
      </div>
      <div className="flex flex-row justify-center p-10">
        <div className="rounded-xl text-vod-primary cursor-pointer bg-white font-semibold shadow-card flex px-4 items-center w-full h-20">
          <div className="w-20 h-20 -mt-3">
            <BigHead {...avatar} />
          </div>
          <span className="px-2">{avatar.name}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default LayoutPlayers;
