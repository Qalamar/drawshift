import React from "react";

const Navigation = () => {
  return (
    <div className="flex-none w-min flex flex-row px-6 invisible md:visible">
      <div className="rounded-full text-vod-content bg-vod-action cursor-pointer font-semibold shadow-card flex justify-center items-center w-auto h-12 mx-3 px-6">
        <span>Xorium</span>
      </div>
      <div className="rounded-full text-vod-primary bg-vod-action cursor-pointer font-semibold shadow-card flex justify-center items-center w-12 h-12 mx-3">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="2.9707"
            width="20"
            height="4"
            rx="2"
            transform="rotate(45 2.9707 0)"
            fill="#4E4B66"
          />
          <rect
            x="16.9707"
            y="3"
            width="20"
            height="4"
            rx="2"
            transform="rotate(135 16.9707 3)"
            fill="#4E4B66"
          />
        </svg>
      </div>
    </div>
  );
};

export default Navigation;
