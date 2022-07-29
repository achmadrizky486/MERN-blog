import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-blue-400 py-5 px-10">
      <p className="text-xl font-bold text-white">MERN Blog</p>
      <div className="cursor-pointer px-2 rounded-md bg-white hover:bg-blue-400 hover:text-white text-blue-400 font-normal">
        <p>Logout</p>
      </div>
    </div>
  );
};

export default Header;
