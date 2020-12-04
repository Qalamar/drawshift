import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDencrypt } from "use-dencrypt-effect";
import { createRoom } from "../../firebase/firebase.utils";
import Button from "../common/Button";
import { styles } from "./LobbyStyles";

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "-100%" },
};

interface props {
  handleClose: any;
  show: boolean;
}

const Create = ({ handleClose, show }: props) => {
  const history = useHistory();

  const { result, dencrypt } = useDencrypt();
  useEffect(() => {
    dencrypt(Math.random().toString(16).substr(2, 4));
  }, [show]);

  const handleSubmit = () => {
    createRoom(result);
    console.log("Done");
    history.push(`/lobby/${result}`);
  };
  return (
    <div className={` ${styles.popup} ${show ? "block" : "hidden"}`}>
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
    </div>
  );
};

export default Create;
