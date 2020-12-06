import React from "react";
import { styles } from "./RoomStyles";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className="flex-none w-64 h-64 bg-vod-logo rounded-r-full border-r-8 border-vod-primary"></div>
      <div className="flex-grow "></div>
      <div className="flex-none w-64"></div>
    </div>
  );
};

export default Navbar;
