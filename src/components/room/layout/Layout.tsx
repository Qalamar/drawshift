import { motion } from "framer-motion";
import { observer } from "mobx-react";
import React from "react";
import { room } from "../../../store/Store";
import LayoutSidebar from "./LayoutSidebar";
import Phase1 from "./Phase1";
import Phase2 from "./Phase2";
import Phase3 from "./Phase3";
import Phase4 from "./Phase4";

const Layout = observer(() => {
  return (
    <div className="grid grid-cols-10 h-full">
      <motion.div
        animate={{ opacity: [0, 1], y: [100, 0] }}
        transition={{ duration: 1, delay: 1.5 }}
        className="col-span-8"
      >
        {room.phase === 1 && <Phase1 />}
        {room.phase === 2 && <Phase2 />}
        {room.phase === 3 && <Phase3 />}
        {room.phase === 4 && <Phase4 />}
      </motion.div>
      <LayoutSidebar />
    </div>
  );
});

export default Layout;
