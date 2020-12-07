import React from "react";
import Layout from "../components/room/layout/Layout";
import Navbar from "../components/room/navbar/Navbar";

const Room = () => {
  return (
    <div className="h-screen overflow-hidden">
      <Navbar />
      <Layout />
    </div>
  );
};

export default Room;
