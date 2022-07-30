import React from "react";
import { LoginBg } from "../../../assets";

const Upload = () => {
  return (
    <div className="my-5">
      <img
        className="w-40 h-40 object-cover my-5 rounded-lg"
        src={LoginBg}
        alt="preview"
      />
      <input type="file" name="" id="" />
    </div>
  );
};

export default Upload;
