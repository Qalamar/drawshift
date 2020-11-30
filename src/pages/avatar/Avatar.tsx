import React, { useCallback, useEffect, useState } from "react";
import { BigHead } from "@bigheads/core";
import { motion } from "framer-motion";
import { observer } from "mobx-react";
import LZString from "lz-string";
import Button from "../../assets/components/Button";
import Input from "../../assets/components/Input";
import Toast from "../../assets/components/Toast";
import MultiStep from "../../assets/components/MultiStep";
import { Basic, Modal, Parts, store, Colored } from "./AvatarProps";
import { styles } from "./AvatarStyles";

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "-100%" },
};

const CreateAvatar: React.FC<Modal> = observer(({ handleClose, show }) => {
  // Handles Step proccessing during avatar creation
  const [Step, setStep] = useState(0);
  const incrementSteps = useCallback(() => setStep(Step + 1), [Step]);
  const decreaseSteps = useCallback(() => setStep(Step - 1), [Step]);
  const [toast, setToast] = useState(false);

  // Button text depends on step number
  const [CancelButton, setCancelButton] = useState("Cancel");
  const [NextButton, setNextButton] = useState("Next");
  useEffect(() => {
    {
      Step === 0 ? setCancelButton("Cancel") : setCancelButton("Previous");
      Step < 2 ? setNextButton("Next") : setNextButton("Confirm");
    }
  }, [Step]);

  // Confirms and save choices for later use (Compressed with lz-string)

  const handleSubmit = () => {
    localStorage.setItem("avatar", LZString.compress(JSON.stringify(store)));
    handleClose();
    setToast(true);
  };

  // Avatar customization buttons
  const AvatarParts: React.FC<Parts> = ({ parts }) => (
    <div className="justify-center my-6 sm:px-3 md:px-12 grid grid-cols-3 gap-4">
      {parts.map((part: any) => (
        <Button
          clickable={true}
          text={part.text}
          onClick={() => store.setProperty(part.property)}
        />
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
                  skinTone={store.skinTone}
                  accessory={store.accessory}
                  body={store.body}
                  circleColor="blue"
                  clothing={store.clothing}
                  clothingColor={store.clothingColor}
                  eyebrows="angry"
                  eyes={store.eyes}
                  graphic="none"
                  faceMask={false}
                  facialHair={store.facialHair}
                  hair={store.hair}
                  hairColor={store.hairColor}
                  hat={store.hat}
                  hatColor={store.hatColor}
                  lashes={false}
                  lipColor="red"
                  mask
                  mouth={store.mouth}
                />
              </div>

              {Step === 0 && <AvatarParts parts={Basic} />}
              {Step === 1 && <AvatarParts parts={Colored} />}
              {Step === 2 && (
                <>
                  <Input
                    onChange={(e: any) => store.setName(e.target.value)}
                    value={store.name}
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
              <MultiStep steps={3} progress={Step} />
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
});

export default CreateAvatar;
