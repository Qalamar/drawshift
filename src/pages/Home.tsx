import { motion, useAnimation } from "framer-motion";
import { observer } from "mobx-react";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Avatar from "../components/avatar/AvatarCreate";
import Features from "../components/landing/Features";
import Footer from "../components/landing/Footer";
import Header from "../components/landing/Header";
import Video from "../components/landing/Video";
import { auth } from "../utils/Store";

const Home = observer(() => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  const controls = useAnimation();

  const transition = async () => {
    if (auth.isRegistred) {
      await controls.start({
        opacity: [1, 0],
        y: [0, -100],
      });
      history.push("/lobby");
    }
  };

  return (
    <motion.div animate={controls}>
      <Avatar
        show={isOpen}
        handleClose={() => setIsOpen(false)}
        confirmed={() => transition()}
      />
      <Header handleOpen={() => setIsOpen(true)} />
      <Video />
      <Features />
      <Footer />
    </motion.div>
  );
});

export default Home;
