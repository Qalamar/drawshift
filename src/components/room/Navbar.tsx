import React from "react";
import Logo from "./navbar/Logo";
import Navigation from "./navbar/Navigation";
import RoomCode from "./navbar/RoomCode";
import { styles } from "./RoomStyles";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Logo />
      <RoomCode />
      <Navigation />
    </div>
  );
};

export default Navbar;
