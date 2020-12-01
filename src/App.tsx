import React, { useState } from "react";
import Features from "./pages/landing/Features";
import Footer from "./pages/landing/Footer";
import Header from "./pages/landing/Header";
import CreateAvatar from "./pages/landing/Avatar";
import Video from "./pages/landing/Video";

const App = () => {
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

export default App;
