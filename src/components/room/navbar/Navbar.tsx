import React from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarButtons from "./NavbarButtons";
import NavbarCode from "./NavbarCode";
import { styles } from "../RoomStyles";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
      animate={{ opacity: [0, 1], y: [-100, 0] }}
      transition={{ duration: 1, delay: 0.5 }}
      initial={{ opacity: 0 }}
      className={styles.navbar}
    >
      <NavbarLogo />
      <NavbarCode />
      <NavbarButtons />
    </motion.div>
  );
};

export default Navbar;
