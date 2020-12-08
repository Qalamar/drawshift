import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useDencrypt } from "use-dencrypt-effect";
import { createRoom } from "../../firebase/firebase.utils";
import { auth, toast } from "../../utils/Store";
import Button from "../common/Button";
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
      className={` ${styles.popup} ${show ? "block" : "hidden"}`}
    >
      <div className="inset-0 transition-opacity">
        <div className={styles.backdrop}></div>
      </div>
      <motion.div animate={show ? "open" : "closed"} variants={variants}>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <h3 className={styles.title}>Share this code</h3>
            <hr className={styles.divider} />
            <div className={styles.roomCode}>{result}</div>
          </div>
          <div className={styles.stepsContainer}>
            <Button
              text="Cancel"
              clickable={true}
              onClick={() => handleClose()}
            />
            <Button
              text="Create"
              clickable={true}
              onClick={() => handleSubmit()}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Create;
