import React, { useState } from "react";
import Features from "./componenets/Features";
import Footer from "./componenets/Footer";
import Header from "./componenets/Header";
import Intro from "./componenets/Intro";
import Modal from "./componenets/Modal";
import Video from "./componenets/Video";
import "./styles.css";
const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <Modal show={isOpen} handleClose={() => setIsOpen(false)} />
      <Header handleOpen={() => setIsOpen(true)} />
      <Video />
      <Features />
      {/* <Intro /> */}
      {/*  */}
      {/* <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-64">
        <div className="max-w-screen-sm sm:text-center sm:mx-auto">
          <a
            href="/"
            aria-label="View"
            className="inline-block mb-5 rounded-full sm:mx-auto"
          >
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </a>
          <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Cross-platform
          </h2>
          <p className="text-base text-gray-700 md:text-lg sm:px-4">
            You can play <strong>Drawshift</strong> on mobile devices or in the
            browser
          </p>
          <hr className="w-full my-8 border-gray-300" />
        </div>
      </div> */}

      <Footer />
    </div>
  );
};

export default App;
