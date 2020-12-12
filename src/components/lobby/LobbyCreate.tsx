import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import tw, { styled } from "twin.macro";
import { useDencrypt } from "use-dencrypt-effect";
import { auth, toast } from "../../store/Store";
import { createRoom } from "../../utils/firebase.utils";
import Button from "../common/Button";
import {
  Backdrop,
  Card,
  Container,
  Popup,
  PopupContainer,
  StepProgress,
  Title,
} from "../common/Modal";

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "-100%" },
};

interface props {
  handleClose: any;
  show: boolean;
  confirmed: any;
}

export const Code = styled.div`
  ${tw`text-center text-5xl text-deep-purple-accent-400 font-bold p-4`}
`;

const Create = ({ handleClose, show, confirmed }: props) => {
  const { result, dencrypt } = useDencrypt();
  const controls = useAnimation();

  useEffect(() => {
    dencrypt(Math.random().toString(16).substr(2, 4));
  }, [dencrypt, show]);

  const handleSubmit = async () => {
    createRoom(result);
    console.log("Done");
    toast.setVisible(false);
    auth.setRoom(result);
    await controls.start({
      opacity: [1, 0],
    });
    confirmed();
  };
  return (
    <motion.div
      animate={controls}
      className={` ${PopupContainer} ${show ? "block" : "hidden"}`}
    >
      <Popup>
        <Backdrop />
      </Popup>
      <motion.div animate={show ? "open" : "closed"} variants={variants}>
        <Container>
          <Card>
            <Title>Share this code</Title>
            <Code className="my-4">{result}</Code>
          </Card>
          <StepProgress>
            <Button
              Rounded
              whileTap={{ scale: 0.9 }}
              onClick={() => handleClose()}
            >
              Cancel
            </Button>
            <div className="col-span-3"></div>
            <Button
              Primary
              whileTap={{ scale: 0.9 }}
              onClick={() => handleSubmit()}
            >
              Create
            </Button>
          </StepProgress>
        </Container>
      </motion.div>
    </motion.div>
  );
};

export default Create;
