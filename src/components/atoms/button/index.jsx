import React from "react";

const Button = ({ title, ...rest }) => {
  return (
    <div>
      <button
        className="p-3 text-base bg-blue-400 w-full box-border text-white rounded-lg uppercase cursor-pointer"
        {...rest}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
