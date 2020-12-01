import React, { useState } from "react";
import CreateAvatar from "./Avatar";
import Features from "./Features";
import Footer from "./Footer";
import Header from "./Header";
import Video from "./Video";

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <CreateAvatar show={isOpen} handleClose={() => setIsOpen(false)} />
      <Header handleOpen={() => setIsOpen(true)} />
      <Video />
      <Features />
      <Footer />
    </div>
  );
};

export default Homepage;
