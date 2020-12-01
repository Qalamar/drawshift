import { BigHead } from "@bigheads/core";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Create from "../../components/lobby/LobbyCreate";
import Login from "../../components/lobby/LobbyLogin";
import { avatar } from "../../utils/Store";

const styles = {};
const Lobby = () => {
  const [login, setLogin] = useState(false);
  const [create, setCreate] = useState(false);
  return (
    <motion.div
      animate={{ opacity: [0, 1], y: [-100, 0] }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <Login show={login} handleClose={() => setLogin(false)} />
      <Create show={create} handleClose={() => setCreate(false)} />
      <div className=" w-screen h-screen justify-center items-center flex">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col justify-between lg:flex-row">
            <div className="mb-12 lg:max-w-lg lg:pr-5 lg:mb-0">
              <div className="max-w-xl mb-6 px-4">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Greetings{" "}
                  <span className="inline-block text-deep-purple-accent-400">
                    {avatar.name}!
                  </span>
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  <strong>Note:</strong> You might encounter occasional bugs,
                  please reach out to us with details if you face any.
                </p>
              </div>
              <hr className="mb-6 border-gray-300" />
              <div className="flex">
                <div className="h-32 w-32 -mt-6">
                  <BigHead
                    skinTone={avatar.skinTone}
                    accessory={avatar.accessory}
                    body={avatar.body}
                    circleColor="blue"
                    clothing={avatar.clothing}
                    clothingColor={avatar.clothingColor}
                    eyebrows="angry"
                    eyes={avatar.eyes}
                    graphic="none"
                    faceMask={false}
                    facialHair={avatar.facialHair}
                    hair={avatar.hair}
                    hairColor={avatar.hairColor}
                    hat={avatar.hat}
                    hatColor={avatar.hatColor}
                    lashes={false}
                    lipColor="red"
                    mask
                    mouth={avatar.mouth}
                  />
                </div>
                <div className="flex flex-col mt-8">
                  <div className="text-sm font-semibold">Level 01</div>
                  <div className="text-xs text-gray-700">Novice</div>
                </div>
              </div>
            </div>
            <div className="px-5 pt-6 pb-5 text-center border border-gray-300 rounded lg:w-2/5">
              <div className="mb-5 font-semibold">Get Started</div>
              <div className="flex justify-center w-full mb-3">
                <button
                  onClick={() => setCreate(true)}
                  className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                  <div className="flex items-center animate-pulse">
                    <div className="mr-3 font-semibold text-white">
                      Create a room
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                    </svg>
                  </div>
                </button>
              </div>
              <p className="max-w-md px-5 mb-3 text-xs text-gray-600 sm:text-sm md:mb-5">
                This will generate a room identifier that you can share with
                whom you are playing with.
              </p>
              <div className="flex items-center w-full mb-5">
                <hr className="flex-1 border-gray-300" />
                <div className="px-3 text-xs text-gray-500 sm:text-sm">or</div>
                <hr className="flex-1 border-gray-300" />
              </div>
              <button
                onClick={() => setLogin(true)}
                className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold transition duration-200 bg-white border border-gray-300 rounded md:w-auto hover:bg-gray-100 focus:shadow-outline focus:outline-none"
              >
                Join an existing one
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Lobby;
