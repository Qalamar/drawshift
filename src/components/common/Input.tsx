import React from "react";

interface props {
  value: any;
  placeholder?: string;
  onChange: any;
}
const Input = ({ value, placeholder, onChange }: props) => {
  return (
    <div className="mb-10 mt-14 sm:px-3 md:px-12">
      <input
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        type="text"
        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
        name="displayName"
        key="displayName"
      />
    </div>
  );
};

export default Input;
