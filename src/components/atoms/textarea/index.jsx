import React from "react";

const TextArea = ({ ...rest }) => {
  return (
    <div>
      <textarea
        className="w-full box-border rounded-lg p-4 outline-1 min-h-[100px] outline-black/50 outline"
        {...rest}
      ></textarea>
    </div>
  );
};

export default TextArea;
