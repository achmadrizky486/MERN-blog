import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-blue-400 py-5 px-10">
      <p className="text-xl font-bold text-white">MERN Blog</p>
      <p className="underline cursor-pointer text-white">Logout</p>
    </div>
  );
};

export default Header;
