import React from "react";

interface props {
  onClick?: any;
  clickable?: boolean;
  text: string;
  selection?: boolean;
}

const Button: React.FC<props> = ({ onClick, clickable, selection, text }) => {
  return (
    <button
      onClick={onClick}
      className={`h-10 flex w-full capitalize items-center justify-center transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline text-sm font-medium text-gray-700 ${
        clickable && "hover:bg-gray-50 cursor-pointer"
      } ${selection && "col-start-0 col-span-3"}`}
    >
      {text}
    </button>
  );
};

export default Button;
