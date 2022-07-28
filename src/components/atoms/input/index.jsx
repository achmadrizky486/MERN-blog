import React from "react";

const Input = () => {
  return (
    <div className="mb-4">
      <p className="text-base mb-2">Label Input</p>
      <input
        placeholder="Form Input"
        className="border border-gray-500 p-3 rounded-lg outline-none w-full box-border"
      />
    </div>
  );
};

export default Input;
