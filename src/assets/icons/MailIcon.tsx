import React from "react";

const Mail = () => {
  return (
    <button>
      <a
        href="mailto:contact@tariqhamrit.com"
        target="_blank"
        className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          className="h-7"
          fill="currentColor"
        >
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      </a>
    </button>
  );
};

export default Mail;
