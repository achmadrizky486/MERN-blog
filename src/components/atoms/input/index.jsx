import React from "react";

const Input = ({ label, ...rest }) => {
  return (
    <div className="mb-4">
      <p className="text-base mb-2">{label}</p>
      <input
        placeholder="Form Input"
        className="border border-gray-500 p-3 rounded-lg outline-none w-full box-border"
        {...rest}
      />
    </div>
  );
};

export default Input;
