import React from "react";

const Button = ({ title, ...rest }) => {
  return (
    <button
      className="p-2 text-base bg-blue-400 w-full box-border text-white rounded-lg uppercase cursor-pointer"
      {...rest}
    >
      {title}
    </button>
  );
};

export default Button;
