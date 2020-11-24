import { BigHead } from "@bigheads/core";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
interface Modal {
  handleClose: any;
  show: boolean;
}

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "-100%" },
};

const Modal: React.FC<Modal> = ({ handleClose, show }) => {
  const controls = useAnimation();
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
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <svg
                  className="h-6 w-6 text-red-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                {/* <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-headline"
                >
                  Deactivate account
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Are you sure you want to deactivate your account? All of
                    your data will be permanently removed. This action cannot be
                    undone.
                  </p>
                </div> */}
                <BigHead
                  accessory={avatar.accessory}
                  body={avatar.body}
                  circleColor="blue"
                  clothing={avatar.clothing}
                  clothingColor={avatar.clothingColor}
                  eyebrows="angry"
                  eyes="wink"
                  facialHair="none"
                  graphic="none"
                  hair={avatar.hair}
                  hairColor={avatar.hairColor}
                  hat="none"
                  hatColor="green"
                  lashes={false}
                  lipColor="purple"
                  mask={true}
                  mouth="open"
                  skinTone={avatar.skinTone}
                />
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              onClick={handleClose}
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Deactivate
            </button>
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;
