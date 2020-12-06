import React from "react";
import Sidebar from "../components/room/Sidebar";
import Navbar from "../components/room/Navbar";

const Room = () => {
  return (
    <div className="h-screen overflow-hidden">
      <Navbar />
      <Sidebar />
    </div>
  );
};

export default Room;
