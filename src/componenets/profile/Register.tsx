import { BigHead } from "@bigheads/core";
import { motion, useAnimation } from "framer-motion";
import { produce } from "immer";
import React, { useEffect, useState } from "react";
import { Avatar, Modal, skinTones } from "./Model";

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "-100%" },
};

const Register: React.FC<Modal> = ({ handleClose, show }) => {
  const [Avatar, setAvatar] = useState<Avatar>({
    skinTone: "light",
    body: "chest",
    accessory: "none",
    hairColor: "black",
    hair: "short",
    clothingColor: "black",
    clothing: "shirt",
  });

  const controls = useAnimation();

  const capitalize = (str: string) => str[0].toUpperCase() + str.slice(1);

  useEffect(() => {
    {
      show ? controls.start("open") : controls.start("closed");
    }
  }, [show]);
  return (
    <div
      className={`flex justify-center fixed w-screen z-50 items-center ${
        show ? "block" : "hidden"
      }`}
    >
      <div className="inset-0 transition-opacity" aria-hidden="true">
        <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
      </div>

      <span
        className="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
      >
        &#8203;
      </span>
      <motion.div animate={controls} variants={variants}>
        <div
          className="inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start justify-center">
              <div className="mt-3 text-center sm:mt-0 sm:text-left">
                <h3 className="text-xl mt-4 font-semibold sm:text-center sm:text-2xl">
                  Choose your characteristics
                </h3>
              </div>
            </div>
            <hr className="w-full my-8 border-gray-300" />
            <div className="-mt-24 mb-8">
              <BigHead
                accessory={Avatar.accessory}
                body={Avatar.body}
                circleColor="blue"
                clothing={Avatar.clothing}
                clothingColor={Avatar.clothingColor}
                eyebrows="angry"
                eyes="wink"
                facialHair="none"
                graphic="none"
                hair={Avatar.hair}
                hairColor={Avatar.hairColor}
                hat="none"
                hatColor="green"
                lashes={false}
                faceMask={false}
                lipColor="purple"
                mouth="open"
                skinTone={Avatar.skinTone}
              />
            </div>

            {/* fd */}
            <div className="justify-center mb-3 grid grid-cols-5 gap-0">
              <button
                onClick={() =>
                  setAvatar(
                    produce((draft) => {
                      draft.skinTone =
                        skinTones[
                          (skinTones.indexOf(Avatar.skinTone) +
                            skinTones.length -
                            1) %
                            skinTones.length
                        ];
                    })
                  )
                }
                className="w-10 p-2 h-10 hover:bg-gray-50 cursor-pointer items-center justify-center transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="rgba(97, 97, 97)"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div className="h-10 ml-1 flex items-center justify-center col-start-0 col-span-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline text-sm font-medium text-gray-700">
                Skin
              </div>
              <button
                onClick={() =>
                  setAvatar(
                    produce((draft) => {
                      draft.skinTone =
                        skinTones[
                          (skinTones.indexOf(Avatar.skinTone) + +1) %
                            skinTones.length
                        ];
                    })
                  )
                }
                className="w-10 p-2 h-10 hover:bg-gray-50 cursor-pointer flex items-center justify-center transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="rgba(97, 97, 97)"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {/* <div className="mb-1 sm:mb-2">
              <input
                placeholder="Nickname"
                required
                type="text"
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                id="firstName"
                name="firstName"
              />
            </div> */}
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 grid grid-cols-5">
            <button
              type="button"
              onClick={handleClose}
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
            <div className="col-span-3 px-4 py-2 flex flex-row items-center justify-center">
              <div className="mx-2 ml-4 rounded-full bg-deep-purple-accent-400 w-3 h-3"></div>
              <div className="mx-2 rounded-full bg-deep-purple-accent-400 w-3 h-3 shadow-outline"></div>
              <div className="mx-2 rounded-full bg-gray-500 opacity-25 w-3 h-3"></div>
              <div className="mx-2 rounded-full bg-gray-500 opacity-25 w-3 h-3"></div>
            </div>
            <button
              type="button"
              className="w-full animate-pulse inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Next
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
