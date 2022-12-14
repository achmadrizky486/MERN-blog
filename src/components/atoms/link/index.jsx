import React from "react";

const Link = ({ title, onClick }) => {
  return (
    <>
      <p className="text-base underline cursor-pointer" onClick={onClick}>
        {title}
      </p>
    </>
  );
};

export default Link;
