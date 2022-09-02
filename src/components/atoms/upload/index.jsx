import React from "react";
// import { LoginBg } from "../../../assets";

const Upload = ({ img, ...rest }) => {
  return (
    <div className="my-5">
      {img && (
        <img
          className="w-40 h-40 object-cover my-5 rounded-lg"
          src={img}
          alt="preview"
        />
      )}
      <input type="file" {...rest} />
    </div>
  );
};

export default Upload;
