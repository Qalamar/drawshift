import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import SubmitIcon from "../../../assets/icons/SubmitIcon";
import UndoIcon from "../../../assets/icons/UndoIcon";
import { auth, room } from "../../../store/Store";
import Button from "../../common/Button";

const Phase1 = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: [0, 1],
      y: [-100, 0],
    });
  }, []);

  const transition = async () => {
    if (auth.isRegistred) {
      await controls.start({
        opacity: [1, 0],
        y: [0, -100],
      });
      room.setPhase(2);
    }
  };

  return (
    <motion.div
      animate={controls}
      transition={{ duration: 1 }}
      initial={{ opacity: 0 }}
    >
      <div className="flex justify-center -mt-24 h-screen items-center flex-col space-y-2 col-span-2">
        <div className="text-left">
          <h1 className="font-bold text-4xl">Phase 1</h1>
          <p className=" font-medium text-vod-primary">
            Suggest a word that other players will have to draw
          </p>
          <div className=" shadow-card w-full h-28 my-10  text-center text-4xl flex justify-center text-opacity-30 rounded-lg">
            <input
              placeholder="Word"
              type="text"
              className=" max-w-sm focus:border-deep-purple-accent-400 px-2 focus:outline-none rounded-lg"
            />
          </div>
          <div className="flex justify-between py-6">
            <div>
              <Button
                Rounded
                whileTap={{ scale: 0.9 }}
                onClick={() => transition()}
              >
                <UndoIcon />
                <span className="pl-2">Clear</span>
              </Button>
            </div>
            <div>
              <Button
                Primary
                whileTap={{ scale: 0.9 }}
                onClick={() => transition()}
              >
                <SubmitIcon />
                <span className="pl-2">Submit</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Phase1;
