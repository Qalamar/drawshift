import { BigHead } from "@bigheads/core";
import { motion } from "framer-motion";
import { produce } from "immer";
import LZString from "lz-string";
import React, { useCallback, useEffect, useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import SelectButton from "../common/SelectButton";
import Toast from "../common/Toast";
import {
  Avatar,
  bodyParts,
  clothingParts,
  faceParts,
  hairParts,
  hatParts,
  Modal,
  Parts,
} from "./AvatarProps";
import { styles } from "./AvatarStyls";

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "-100%" },
};

const CreateAvatar: React.FC<Modal> = ({ handleClose, show }) => {
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
  const [Name, setName] = useState("");
  const [toast, setToast] = useState(false);

  // Changes button text depending on step number
  const [CancelButton, setCancelButton] = useState("Cancel");
  const [NextButton, setNextButton] = useState("Next");
  useEffect(() => {
    {
      Step === 0 ? setCancelButton("Cancel") : setCancelButton("Previous");
      Step < 2 ? setNextButton("Next") : setNextButton("Confirm");
    }
  }, [Step]);

  // Player confirms his choices

  const handleSubmit = () => {
    localStorage.setItem("avatar", LZString.compress(JSON.stringify(Avatar)));
    localStorage.setItem("name", Name);
    handleClose();
    setToast(true);
  };
  // Props to create buttons

  const SimpleParts: React.FC<Parts> = ({ parts }) => (
    <div className="justify-center my-6 sm:px-3 md:px-12 grid grid-cols-3 gap-4">
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
    <div className="justify-center my-6 sm:px-3 md:px-12 grid grid-cols-2 gap-4">
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

  return (
    <>
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
              <h3 className={styles.title}>Customize your character</h3>
              <hr className={styles.divider} />
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
                  <Input
                    onChange={(e: any) => setName(e.target.value)}
                    value={Name}
                    placeholder="Nickname"
                  />
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
                onClick={() => (Step < 2 ? incrementSteps() : handleSubmit())}
              />
            </div>
          </div>
        </motion.div>
      </div>
      {toast && (
        <Toast
          shortText="Confirmation successful"
          longText="Your choices have been saved."
          onClick={() => setToast(false)}
        />
      )}
    </>
  );
};

export default CreateAvatar;
