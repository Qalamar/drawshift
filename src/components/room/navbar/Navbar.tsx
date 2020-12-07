import React from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarButtons from "./NavbarButtons";
import NavbarCode from "./NavbarCode";
import { styles } from "../RoomStyles";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 1 }}>
      <div className={styles.navbar}>
        <NavbarLogo />
        <NavbarCode />
        <NavbarButtons />
      </div>
    </motion.div>
  );
};

export default Navbar;
