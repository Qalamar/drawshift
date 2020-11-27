import React, { useState } from "react";
import Features from "./componenets/landing/Features";
import Footer from "./componenets/landing/Footer";
import Header from "./componenets/landing/Header";
import Modal from "./componenets/landing/Modal";
import Video from "./componenets/landing/Video";
import "./styles.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Modal show={isOpen} handleClose={() => setIsOpen(false)} />
      <Header handleOpen={() => setIsOpen(true)} />
      <Video />
      <Features />
      <Footer />
    </div>
  );
};

export default App;
