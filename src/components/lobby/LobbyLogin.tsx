import { motion } from "framer-motion";
import React, { useState } from "react";
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
            <Input
              onChange={(e: any) => setCode(e.target.value)}
              value={code}
              placeholder="4-character code"
            />
          </Card>
          <StepProgress>
            <Button
              Sharp
              whileTap={{ scale: 0.9 }}
              onClick={() => handleClose()}
            >
              Cancel
            </Button>
            <Button
              Sharp
              whileTap={{ scale: 0.9 }}
              onClick={() => handleClose()}
            >
              Join
            </Button>
          </StepProgress>
        </Container>
      </motion.div>
    </div>
  );
};

export default Login;
