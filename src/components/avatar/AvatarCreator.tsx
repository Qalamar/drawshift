import { BigHead } from "@bigheads/core";
import { motion } from "framer-motion";
import LZString from "lz-string";
import { observer } from "mobx-react";
import React, { useCallback, useEffect, useState } from "react";
import tw, { styled } from "twin.macro";
import { auth, avatar, toast } from "../../store/Store";
import Button from "../common/Button";
import Input from "../common/Input";
import MultiStep from "../common/MultiStep";
import AvatarButtons from "./AvatarButtons";
import { Basic, Colored, Modal } from "./AvatarProps";

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "-100%" },
};

const PopupContainer =
  "flex justify-center fixed w-screen h-screen z-50 items-center";

const Backdrop = styled.div`
  ${tw`absolute inset-0 bg-gray-900 opacity-75`}
`;

const Container = styled.div`
  ${tw`inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all align-middle max-w-lg w-full`}
`;

const Card = styled.div`
  ${tw`bg-white pt-5 pb-4 sm:p-6 sm:pb-2`}
`;

const Title = styled.h3`
  ${tw`text-xl mt-4 font-semibold text-center sm:text-2xl`}
`;

const StepProgress = styled.div`
  ${tw`bg-gray-50 py-3 sm:px-9 grid grid-cols-5`}
`;

const Popup = styled.div`
  ${tw`inset-0 transition-opacity`}
`;

const Divider = styled.hr`
  ${tw`w-full my-8 border-gray-300`}
`;

const Avatar = observer(({ handleClose, show, confirmed }: Modal) => {
  // Handles Step proccessing during avatar creation
  const [Step, setStep] = useState(0);
  const incrementSteps = useCallback(() => setStep(Step + 1), [Step]);
  const decreaseSteps = useCallback(() => setStep(Step - 1), [Step]);

  // Button text depends on step number
  const [CancelButton, setCancelButton] = useState("Cancel");
  const [NextButton, setNextButton] = useState("Next");
  useEffect(() => {
    Step === 0 ? setCancelButton("Cancel") : setCancelButton("Back");
    Step < 2 ? setNextButton("Next") : setNextButton("Done");
  }, [Step]);

  // Confirms and save choices for later use (Compressed with lz-string)

  const handleSubmit = () => {
    localStorage.setItem("avatar", LZString.compress(JSON.stringify(avatar)));
    handleClose();
    toast.setVisible(true);
    auth.setRegistred(true);
    confirmed();
  };

  return (
    <div className={` ${PopupContainer} ${show ? "block" : "hidden"}`}>
      <Popup>
        <Backdrop />
      </Popup>
      <motion.div animate={show ? "open" : "closed"} variants={variants}>
        <Container>
          <Card>
            <Title>Customize your character</Title>
            <Divider />
            <div className="-mt-16 mb-8">
              <BigHead {...avatar} />
            </div>
            {Step === 0 && <AvatarButtons parts={Basic} />}
            {Step === 1 && <AvatarButtons parts={Colored} />}
            {Step === 2 && (
              <Input
                onChange={(e: any) => avatar.setName(e.target.value)}
                value={avatar.name}
                placeholder="Nickname"
              />
            )}
          </Card>
          <StepProgress>
            <Button
              Sharp
              whileTap={{ scale: 0.9 }}
              onClick={() => (Step === 0 ? handleClose() : decreaseSteps())}
            >
              {CancelButton}
            </Button>
            <MultiStep steps={3} progress={Step} />
            <Button
              Sharp
              whileTap={{ scale: 0.9 }}
              onClick={() => (Step < 2 ? incrementSteps() : handleSubmit())}
            >
              {NextButton}
            </Button>
          </StepProgress>
        </Container>
      </motion.div>
    </div>
  );
});

export default Avatar;
