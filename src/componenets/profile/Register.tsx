import React, { useCallback, useEffect, useState } from "react";
import { BigHead } from "@bigheads/core";
import { motion } from "framer-motion";
import { produce } from "immer";
import {
  Avatar,
  Modal,
  Parts,
  skinTone,
  body,
  hair,
  hairColor,
  clothing,
  clothingColor,
  accessory,
  eyes,
  mouth,
  facialHair,
  hat,
  hatColor,
} from "./Model";
import { styles } from "./Styles";
import SelectButton from "../common/SelectButton";
import Button from "../common/Button";

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "-100%" },
};

const Register: React.FC<Modal> = ({ handleClose, show }) => {
  // Avatar props
  const [Avatar, setAvatar] = useState<Avatar>({
    skinTone: "light",
    eyes: "normal",
    mouth: "open",
    facialHair: "none",
    body: "chest",
    accessory: "none",
    hairColor: "black",
    hair: "short",
    clothingColor: "white",
    clothing: "shirt",
    hat: "none",
    hatColor: "white",
  });

  // Handles Step proccessing during avatar creation
  const [Step, setStep] = useState(0);
  const incrementSteps = useCallback(() => setStep(Step + 1), [Step]);
  const decreaseSteps = useCallback(() => setStep(Step - 1), [Step]);

  // Changes button text depending on step number
  const [CancelButton, setCancelButton] = useState("Cancel");
  const [NextButton, setNextButton] = useState("Next");
  useEffect(() => {
    {
      Step === 0 ? setCancelButton("Cancel") : setCancelButton("Previous");
      Step < 2 ? setNextButton("Next") : setNextButton("Confirm");
    }
  }, [Step]);

  // Props to create buttons

  const bodyParts = [
    { property: "body", type: body },
    { property: "accessory", type: accessory },
    { property: "skinTone", type: skinTone },
  ];

  const hairParts = [
    { property: "hair", type: hair },
    { property: "hairColor", type: hairColor },
  ];

  const clothingParts = [
    { property: "clothing", type: clothing },
    { property: "clothingColor", type: clothingColor },
  ];

  const hatParts = [
    { property: "hat", type: hat },
    { property: "hatColor", type: hatColor },
  ];

  const faceParts = [
    { property: "eyes", type: eyes },
    { property: "mouth", type: mouth },
    { property: "facialHair", type: facialHair },
  ];

  const SimpleParts: React.FC<Parts> = ({ parts }) => (
    <div className="justify-center my-8 px-12 grid grid-cols-3 gap-4">
      {parts.map((part: any) => (
        <Button
          key={part.property}
          clickable={true}
          text={part.property}
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

  const ComplexParts: React.FC<Parts> = ({ parts }) => (
    <div className="justify-center my-6 px-12 grid grid-cols-2 gap-4">
      {parts.map((part: any) => (
        <div className="justify-center grid grid-cols-5 gap-0">
          <SelectButton
            direction="left"
            onClick={() =>
              setAvatar(
                produce((draft) => {
                  if (Avatar.hasOwnProperty(part.property)) {
                    draft[part.property] =
                      part.type[
                        (part.type.indexOf(Avatar[part.property]) +
                          part.type.length -
                          1) %
                          part.type.length
                      ];
                  }
                })
              )
            }
          />
          <Button text={part.property} selection={true} />
          <SelectButton
            direction="right"
            onClick={() =>
              setAvatar(
                produce((draft) => {
                  if (Avatar.hasOwnProperty(part.property)) {
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
        </div>
      ))}
    </div>
  );

  const Name = () => (
    <div className="my-6 px-12">
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
    <div className={` ${styles.popup} ${show ? "block" : "hidden"}`}>
      <div className="inset-0 transition-opacity" aria-hidden="true">
        <div className={styles.backdrop}></div>
      </div>

      <motion.div animate={show ? "open" : "closed"} variants={variants}>
        <div
          className={styles.cardContainer}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className={styles.card}>
            <h3 className={styles.title}>Choose your characteristics</h3>

            <hr className="w-full my-8 border-gray-300" />
            <div className="-mt-16 mb-8">
              <BigHead
                accessory={Avatar.accessory}
                body={Avatar.body}
                circleColor="blue"
                clothing={Avatar.clothing}
                clothingColor={Avatar.clothingColor}
                eyebrows="angry"
                eyes={Avatar.eyes}
                facialHair={Avatar.facialHair}
                graphic="none"
                hair={Avatar.hair}
                hairColor={Avatar.hairColor}
                hat={Avatar.hat}
                hatColor={Avatar.hatColor}
                lashes={false}
                faceMask={false}
                lipColor="purple"
                mouth={Avatar.mouth}
                skinTone={Avatar.skinTone}
              />
            </div>

            {Step === 0 && (
              <>
                <ComplexParts parts={hairParts} />
                <SimpleParts parts={bodyParts} />
              </>
            )}
            {Step === 1 && (
              <>
                <ComplexParts parts={clothingParts} />
                <SimpleParts parts={faceParts} />
              </>
            )}
            {Step === 2 && (
              <>
                <ComplexParts parts={hatParts} />
                <Name />
              </>
            )}
          </div>
          <div className={styles.stepsContainer}>
            <Button
              text={CancelButton}
              clickable={true}
              onClick={() => (Step === 0 ? handleClose() : decreaseSteps())}
            />

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
            <Button
              text={NextButton}
              clickable={true}
              onClick={() => (Step < 2 ? incrementSteps() : handleClose())}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
