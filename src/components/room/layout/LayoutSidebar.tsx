import { BigHead } from "@bigheads/core";
import { motion } from "framer-motion";
import { observer } from "mobx-react";
import React from "react";
import LZString from "lz-string";
import { avatar, room } from "../../../store/Store";

const LayoutPlayers = observer(() => {
  return (
    <motion.div
      animate={{ opacity: [0, 1], y: [100, 0] }}
      transition={{ duration: 1, delay: 1 }}
      className="col-span-2 bg-vod-action"
    >
      <div className="w-full p-4 ml-1 font-medium text-center bg-white border-b-2 text-vod-content border-vod-primary">
        Round One
      </div>
      <div className="flex flex-col justify-center p-10 space-y-4">
        {room.playerList.map((player) => (
          <div className="flex items-center w-full h-20 px-4 font-semibold bg-white cursor-pointer rounded-xl text-vod-primary shadow-card">
            <div className="w-20 h-20 -mt-3">
              {/* <BigHead {...JSON.parse(LZString.decompress(player.avatar))} /> */}
            </div>
            <span className="px-2">{player.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
});

export default LayoutPlayers;
