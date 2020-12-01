import React from "react";

interface props {
  onClick?: any;
  direction: string;
}

const SelectButton: React.FC<props> = ({ onClick, direction }) => {
  return (
    <button
      onClick={onClick}
      className="w-10 p-2 h-10 hover:bg-gray-50 cursor-pointer items-center justify-center transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="rgba(97, 97, 97)"
      >
        {direction === "left" && (
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        )}
        {direction === "right" && (
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        )}
      </svg>
    </button>
  );
};

export default SelectButton;
