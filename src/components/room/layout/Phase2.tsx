import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import RangeSlider from "react-bootstrap-range-slider";
import CanvasDraw from "react-canvas-draw";
import SubmitIcon from "../../../assets/icons/SubmitIcon";
import UndoIcon from "../../../assets/icons/UndoIcon";
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

const Phase2 = () => {
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
      room.setPhase(3);
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
          <div className="text-left">
            <h1 className="font-bold text-4xl">Phase 2</h1>
            <p className=" font-medium text-vod-primary">
              Draw the following word on the canvas
            </p>
            <div className=" shadow-card w-full h-28 my-10 text-4xl font-semibold flex justify-center items-center text-opacity-30 rounded-lg">
              Word
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex justify-center -mt-12 h-screen items-center flex-col space-y-4">
          <div className="shadow-card w-wide rounded-xl mb-10">
            <CanvasDraw
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
          <div className="shadow-card w-wide h-14 rounded-xl flex items-center justify-center space-x-6">
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.7654 19.9379C8.17959 20.1042 5.83289 21.0891 4.50132 24.5979C4.34986 24.9981 3.9857 25.2411 3.56097 25.2411C2.84491 25.2411 0.630984 23.4577 0 23.0272C0.000644519 28.3349 2.4453 33 8.25048 33C13.1398 33 16.5003 30.1789 16.5003 25.2534C16.5003 25.0529 16.4584 24.8615 16.4378 24.6649L10.7654 19.9379ZM29.5125 0C28.5354 0 27.6196 0.432481 26.9209 1.06025C13.7463 12.8294 12.3754 13.1059 12.3754 16.5703C12.3754 17.4533 12.5849 18.295 12.9381 19.0646L17.0514 22.4922C17.5161 22.6082 17.995 22.6875 18.4945 22.6875C22.4976 22.6875 24.8178 19.7568 32.1041 6.15785C32.5798 5.23295 33 4.23393 33 3.19365C33 1.33031 31.3243 0 29.5125 0Z"
                fill="#666FE4"
              />
            </svg>

            <RangeSlider
              value={brushRadius}
              min={2}
              max={16}
              onChange={(changeEvent: any) =>
                setbrushRadius(changeEvent.target.value)
              }
            />
          </div>
          <div className="shadow-card w-wide h-14 rounded-xl flex items-center justify-center space-x-6">
            {colors.map((color) => (
              <motion.div
                onClick={() => updateColors(color)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  borderRadius: "50%",
                  scale: brushColor === color ? 1.3 : 1,
                }}
                className="w-7 h-7 rounded-full shadow-card"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <div className="flex justify-between w-wide">
            <div>
              <Button
                Rounded
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  saveableCanvas.undo();
                }}
              >
                <UndoIcon />
                <span className="pl-2">Undo</span>
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

export default Phase2;
