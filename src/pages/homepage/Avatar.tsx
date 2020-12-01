import React, { useCallback, useEffect, useState } from "react";
import { BigHead } from "@bigheads/core";
import { motion } from "framer-motion";
import { observer } from "mobx-react";
import { useHistory } from "react-router-dom";
import LZString from "lz-string";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import MultiStep from "../../components/common/MultiStep";
import {
  Basic,
  Modal,
  Parts,
  Colored,
} from "../../components/avatar/AvatarProps";
import { styles } from "../../components/avatar/AvatarStyles";
import { avatar, toast } from "../../utils/Store";

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "-100%" },
};

const CreateAvatar: React.FC<Modal> = observer(({ handleClose, show }) => {
  const history = useHistory();

  // Handles Step proccessing during avatar creation
  const [Step, setStep] = useState(0);
  const incrementSteps = useCallback(() => setStep(Step + 1), [Step]);
  const decreaseSteps = useCallback(() => setStep(Step - 1), [Step]);

  // Button text depends on step number
  const [CancelButton, setCancelButton] = useState("Cancel");
  const [NextButton, setNextButton] = useState("Next");
  useEffect(() => {
    Step === 0 ? setCancelButton("Cancel") : setCancelButton("Previous");
    Step < 2 ? setNextButton("Next") : setNextButton("Confirm");
  }, [Step]);

  // Confirms and save choices for later use (Compressed with lz-string)

  const handleSubmit = () => {
    localStorage.setItem("avatar", LZString.compress(JSON.stringify(avatar)));
    handleClose();
    toast.setVisible(true);
    history.push("/lobby");
  };

  // Avatar customization buttons
  const AvatarParts: React.FC<Parts> = ({ parts }) => (
    <div className="justify-center my-6 sm:px-3 md:px-12 grid grid-cols-3 gap-4">
      {parts.map((part: any) => (
        <Button
          key={part.property}
          clickable={true}
          text={part.text}
          onClick={() => avatar.setProperty(part.property)}
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

              {Step === 0 && <AvatarParts parts={Basic} />}
              {Step === 1 && <AvatarParts parts={Colored} />}
              {Step === 2 && (
                <>
                  <Input
                    onChange={(e: any) => avatar.setName(e.target.value)}
                    value={avatar.name}
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
    </>
  );
});

export default CreateAvatar;
