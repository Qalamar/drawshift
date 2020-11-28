import React, { useCallback, useState } from "react";
import { BigHead } from "@bigheads/core";
import { motion } from "framer-motion";
import { produce } from "immer";
import {
  Avatar,
  Modal,
  skinTone,
  body,
  hair,
  hairColor,
  clothing,
  clothingColor,
  accessory,
} from "./Model";
import SelectButton from "../common/SelectButton";
import Button from "../common/Button";

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
    clothingColor: "white",
    clothing: "shirt",
  });

  const capitalize = (str: string) => str[0].toUpperCase() + str.slice(1);
  const [Step, setStep] = useState(0);

  const incrementSteps = useCallback(() => setStep(Step + 1), [Step]);
  const decreaseSteps = useCallback(() => setStep(Step - 1), [Step]);

  const bodyParts = [
    { property: "body", type: body },
    { property: "accessory", type: accessory },
    { property: "skinTone", type: skinTone },
  ];

  const faceParts = [
    { property: "body", type: body },
    { property: "accessory", type: accessory },
    { property: "skinTone", type: skinTone },
  ];

  const Hair = () => (
    <div className="justify-center my-6 px-12 grid grid-cols-2 gap-4">
      <div className="justify-center grid grid-cols-5 gap-0">
        <SelectButton
          direction="left"
          onClick={() =>
            setAvatar(
              produce((draft) => {
                draft.hair =
                  hair[
                    (hair.indexOf(Avatar.hair) + hair.length - 1) % hair.length
                  ];
              })
            )
          }
        />

        <Button text="Hair Style" selection={true} />

        <SelectButton
          direction="right"
          onClick={() =>
            setAvatar(
              produce((draft) => {
                draft.hair =
                  hair[(hair.indexOf(Avatar.hair) + 1) % hair.length];
              })
            )
          }
        />
      </div>

      <div className="justify-center grid grid-cols-5 gap-0">
        <SelectButton
          direction="left"
          onClick={() =>
            setAvatar(
              produce((draft) => {
                draft.hairColor =
                  hairColor[
                    (hairColor.indexOf(Avatar.hairColor) +
                      hairColor.length -
                      1) %
                      hairColor.length
                  ];
              })
            )
          }
        />

        <Button text="Hair Color" selection={true} />

        <SelectButton
          direction="right"
          onClick={() =>
            setAvatar(
              produce((draft) => {
                draft.hairColor =
                  hairColor[
                    (hairColor.indexOf(Avatar.hairColor) + 1) % hairColor.length
                  ];
              })
            )
          }
        />
      </div>
    </div>
  );

  const Body = () => (
    <div className="justify-center my-8 px-12 grid grid-cols-3 gap-4">
      {bodyParts.map((part) => (
        <Button
          key={part.property}
          clickable={true}
          text={capitalize(part.property)}
          onClick={() =>
            setAvatar(
              produce((draft) => {
                if (Avatar.hasOwnProperty(part.property)) {
                  console.log(draft.part);
                  console.log(Avatar.clothing);
                  draft[part.property] =
                    part.type[
                      (part.type.indexOf(Avatar[part.property]) + 1) %
                        part.type.length
                    ];
                }
              })
            )
          }
        />
      ))}
    </div>
  );

  const Face = () => (
    <div className="justify-center my-6 px-12 grid grid-cols-2 gap-4">
      <div className="justify-center grid grid-cols-5 gap-0">
        <SelectButton
          direction="left"
          onClick={() =>
            setAvatar(
              produce((draft) => {
                draft.clothing =
                  clothing[
                    (clothing.indexOf(Avatar.clothing) + clothing.length - 1) %
                      clothing.length
                  ];
              })
            )
          }
        />

        <Button text="Clothes" selection={true} />

        <SelectButton
          direction="right"
          onClick={() =>
            setAvatar(
              produce((draft) => {
                draft.clothing =
                  clothing[
                    (clothing.indexOf(Avatar.clothing) + 1) % clothing.length
                  ];
              })
            )
          }
        />
      </div>

      <div className="justify-center grid grid-cols-5 gap-0">
        <SelectButton
          direction="left"
          onClick={() =>
            setAvatar(
              produce((draft) => {
                draft.clothingColor =
                  clothingColor[
                    (clothingColor.indexOf(Avatar.clothingColor) +
                      clothingColor.length -
                      1) %
                      clothingColor.length
                  ];
              })
            )
          }
        />

        <Button text="Clothes Color" selection={true} />

        <SelectButton
          direction="right"
          onClick={() =>
            setAvatar(
              produce((draft) => {
                draft.clothingColor =
                  clothingColor[
                    (clothingColor.indexOf(Avatar.clothingColor) + 1) %
                      clothingColor.length
                  ];
              })
            )
          }
        />
      </div>
    </div>
  );

  const Face = () => (
    <div className="justify-center my-8 px-12 grid grid-cols-3 gap-4">
      {bodyParts.map((part) => (
        <Button
          key={part.property}
          clickable={true}
          text={capitalize(part.property)}
          onClick={() =>
            setAvatar(
              produce((draft) => {
                if (Avatar.hasOwnProperty(part.property)) {
                  console.log(draft.part);
                  console.log(Avatar.clothing);
                  draft[part.property] =
                    part.type[
                      (part.type.indexOf(Avatar[part.property]) + 1) %
                        part.type.length
                    ];
                }
              })
            )
          }
        />
      ))}
    </div>
  );

  const Name = () => (
    <div className="mb-1 sm:mb-2">
      <input
        placeholder="Nickname"
        required
        type="text"
        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
        id="firstName"
        name="firstName"
      />
    </div>
  );

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
      <motion.div animate={show ? "open" : "closed"} variants={variants}>
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
            <div className="-mt-16 mb-8">
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

            {Step === 0 && (
              <>
                <Hair />
                <Body />
              </>
            )}
            {Step === 1 && (
              <>
                <Face />
                <Body />
              </>
            )}
            {Step === 2 && <Name />}
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 grid grid-cols-5">
            <button
              type="button"
              onClick={() => (Step === 0 ? handleClose() : decreaseSteps())}
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
            >
              {Step === 0 ? "Cancel" : "Previous"}
            </button>
            <div className="col-span-3 ml-4 px-4 py-2 flex flex-row items-center justify-center">
              {[...Array(3)].map((circle, stepIndex) => {
                return (
                  <div
                    key={stepIndex}
                    className={`mx-2 w-3 h-3 rounded-full ${
                      Step >= stepIndex
                        ? "bg-deep-purple-accent-400"
                        : "bg-gray-500 opacity-25 "
                    } ${Step === stepIndex && "shadow-outline"}`}
                  ></div>
                );
              })}
            </div>
            <button
              onClick={() => incrementSteps()}
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
