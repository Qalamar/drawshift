import { motion } from "framer-motion";
import React, { useEffect } from "react";
import Button from "../common/Button";
import { styles } from "./LobbyStyles";
import { useDencrypt } from "use-dencrypt-effect";

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "-100%" },
};

interface props {
  handleClose: any;
  show: boolean;
}

const Create = ({ handleClose, show }: props) => {
  const { result, dencrypt } = useDencrypt();
  useEffect(() => {
    dencrypt(Math.random().toString(16).substr(2, 4));
  }, [show]);
  return (
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
            <h3 className={styles.title}>Share this code</h3>
            <hr className={styles.divider} />
            <div className="text-center text-5xl text-deep-purple-accent-400 font-bold p-4">
              {result}
            </div>
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
              onClick={() => handleClose()}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Create;
