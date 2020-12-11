import { motion } from "framer-motion";
import React, { useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import { styles } from "./LobbyStyles";

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
    <div className={` ${styles.popup} ${show ? "block" : "hidden"}`}>
      <div className="inset-0 transition-opacity">
        <div className={styles.backdrop}></div>
      </div>
      <motion.div animate={show ? "open" : "closed"} variants={variants}>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <h3 className={styles.title}>Enter room code</h3>
            <hr className={styles.divider} />
            <Input
              onChange={(e: any) => setCode(e.target.value)}
              value={code}
              placeholder="4-character code"
            />
          </div>
          <div className={styles.stepsContainer}>
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
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
