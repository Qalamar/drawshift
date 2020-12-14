import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="fixed flex w-screen h-screen justify-center z-50 items-center">
      <div className=" bg-gray-900 opacity-50 fixed w-screen h-full"></div>
      <div className="sk-cube-grid">
        <div className="sk-cube sk-cube1"></div>
        <div className="sk-cube sk-cube2"></div>
        <div className="sk-cube sk-cube3"></div>
        <div className="sk-cube sk-cube4"></div>
        <div className="sk-cube sk-cube5"></div>
        <div className="sk-cube sk-cube6"></div>
        <div className="sk-cube sk-cube7"></div>
        <div className="sk-cube sk-cube8"></div>
        <div className="sk-cube sk-cube9"></div>
      </div>
    </div>
  );
};

export default Spinner;
