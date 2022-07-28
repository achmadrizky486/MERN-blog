import React from "react";

const Link = ({ title, onClick }) => {
  return (
    <>
      <p
        className="text-base text-center text-[#ababab] underline"
        onClick={onClick}
      >
        {title}
      </p>
    </>
  );
};

export default Link;
