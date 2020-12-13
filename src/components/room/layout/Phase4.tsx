import { useAnimation, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import CanvasDraw from "react-canvas-draw";
import { auth, room } from "../../../store/Store";
import Button from "../../common/Button";

const colors = [
  "#ffffff",
  "#30d343",
  "#FFFF33",
  "#6200F5",
  "#ed4e4e",
  "#141314",
];
let saveableCanvas: {
  clear: () => void;
  getSaveData: () => string;
  undo: () => void;
};

const Phase4 = () => {
  const [brushColor, setbrushColor] = useState("#0e0e0e0");
  const [brushRadius, setbrushRadius] = useState(5);
  const updateColors = (color: string) => {
    setbrushColor(color);
  };

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
      room.setPhase(4);
    }
  };

  return (
    <motion.div
      animate={controls}
      transition={{ duration: 1 }}
      initial={{ opacity: 0 }}
    >
      <div className="grid grid-cols-2 h-full">
        <div className="flex justify-center -mt-24 h-screen items-center flex-col space-y-2">
          <div className="text-left pt-16">
            <h1 className="font-bold text-4xl">Phase 4</h1>
            <p className=" font-medium text-vod-primary">
              Choose what you think the drawing represents
            </p>
            <div className="flex items-center justify-center py-12">
              <Button Rounded className="mx-2">
                Word
              </Button>
              <Button Rounded className="mx-2">
                Basketball Hop
              </Button>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex justify-center -mt-12 h-screen items-center flex-col space-y-4">
          <div className="shadow-card w-wide rounded-xl mb-10">
            <CanvasDraw
              disabled={true}
              brushColor={brushColor}
              brushRadius={brushRadius}
              hideInterface={true}
              hideGrid={true}
              canvasWidth={363}
              lazyRadius="0"
              className="rounded-xl"
              ref={(canvasDraw: any) => (saveableCanvas = canvasDraw)}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Phase4;
