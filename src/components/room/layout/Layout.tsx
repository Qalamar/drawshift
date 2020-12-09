import React from "react";
import { BigHead } from "@bigheads/core";
import { avatar } from "../../../utils/Store";
import { motion } from "framer-motion";
import LayoutPlayers from "./LayoutPlayers";

const Layout = () => {
  return (
    <div className="grid grid-cols-10 h-full">
      <motion.div
        animate={{ opacity: [0, 1], y: [100, 0] }}
        transition={{ duration: 1, delay: 1.5 }}
        className="col-span-8"
      ></motion.div>
      <LayoutPlayers />
    </div>
  );
};

export default Layout;
