import React from "react";
import RoundDivider from "../common/RoundDivider";

interface props {
  handleOpen: any;
}

const styles = {
  background: "relative bg-deep-purple-accent-400",
  text: "mb-6 text-base text-indigo-100 md:text-lg",
  container:
    "px-4 py-32 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 md:py-52",
  content:
    "relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center",
  title:
    "mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl sm:leading-none",
  button:
    "inline-flex cursor-pointer items-center justify-center h-12 px-6 mb-12 font-semibold tracking-wide text-teal-900 transition duration-200 rounded shadow-md hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-deep-purple-accent-100 focus:shadow-outline focus:outline-none",
};

const Header = ({ handleOpen }: props) => {
  return (
    <div className={styles.background}>
      <RoundDivider />
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className="relative inline-block pr-2">
              <span className="relative text-teal-accent-400">Drawshift</span>
              <div className="w-full h-3 -mt-3 bg-deep-purple-accent-200" />
            </span>
            , the game that
            <br className="hidden md:block" /> ruins your friendships
          </h1>
          <p className={styles.text}>
            Create or join a room, make your own avatar and start playing
            <br className="hidden md:block" />
            with your friends in a fun and chaotic drawing game.
          </p>

          <button onClick={handleOpen} className={styles.button}>
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
