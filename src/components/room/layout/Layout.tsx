import { motion } from "framer-motion";
import React from "react";
import LayoutSidebar from "./LayoutSidebar";
import Phase1 from "./Phase1";
import Phase2 from "./Phase2";
import Phase3 from "./Phase3";
import Phase4 from "./Phase4";

const Layout = () => {
  return (
    <div className="grid grid-cols-10 h-full">
      <motion.div
        animate={{ opacity: [0, 1], y: [100, 0] }}
        transition={{ duration: 1, delay: 1.5 }}
        className="col-span-8"
      >
        {/* <Phase1 /> */}
        {/* <Phase2 /> */}
        {/* <Phase3 /> */}
        <Phase4 />
      </motion.div>
      <LayoutSidebar />
    </div>
  );
};

export default Layout;
