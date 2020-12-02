import React, { useState } from "react";
import Avatar from "../components/avatar/AvatarCreate";
import Features from "../components/landing/Features";
import Footer from "../components/landing/Footer";
import Header from "../components/landing/Header";
import Video from "../components/landing/Video";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Avatar show={isOpen} handleClose={() => setIsOpen(false)} />
      <Header handleOpen={() => setIsOpen(true)} />
      <Video />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
