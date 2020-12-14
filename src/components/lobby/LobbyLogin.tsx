import { motion, useAnimation } from "framer-motion";
import result from "postcss/lib/result";
import React, { useState } from "react";
import { toast, auth, room } from "../../store/Store";
import { joinRoom } from "../../utils/firebase.utils";
import Button from "../common/Button";
import Input from "../common/Input";
import {
  Backdrop,
  Card,
  Container,
  Divider,
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

const Login = ({ handleClose, show, confirmed }: props) => {
  const [code, setCode] = useState("");

  const controls = useAnimation();

  const handleSubmit = async () => {
    room.setLoading(true);
    joinRoom(code);
    console.log("Done");
    toast.setVisible(false);
    room.setRoom(code);
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
            <Title>Enter the room code</Title>
            <Input
              onChange={(e: any) => setCode(e.target.value)}
              value={code}
              placeholder="4-character code"
            />
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
              Join
            </Button>
          </StepProgress>
        </Container>
      </motion.div>
    </motion.div>
  );
};

export default Login;
