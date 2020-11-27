import React, { useState } from "react";
import Features from "./componenets/landing/Features";
import Footer from "./componenets/landing/Footer";
import Header from "./componenets/landing/Header";
import Register from "./componenets/profile/Register";
import Video from "./componenets/landing/Video";
import "./styles.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Register show={isOpen} handleClose={() => setIsOpen(false)} />
      <Header handleOpen={() => setIsOpen(true)} />
      <Video />
      <Features />
      <Footer />
    </div>
  );
};

export default App;
