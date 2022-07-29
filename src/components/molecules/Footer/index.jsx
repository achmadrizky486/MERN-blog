import React from "react";
import {
  Discord,
  Facebook,
  Github,
  Instagram,
  Logo,
  Telegram,
  Twitter,
} from "../../../assets";

const Icon = ({ img }) => {
  return (
    <>
      <div>
        <img
          src={img}
          className="p-2 bg-white rounded-full mx-1 cursor-pointer"
        />
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <div className="bg-blue-400 items-center justify-between py-3 px-10 flex mt-5">
        <div>
          <img src={Logo} alt="" className="bg-white rounded-lg mx-1" />
        </div>
        <div className="flex">
          <Icon img={Facebook} />
          <Icon img={Instagram} />
          <Icon img={Telegram} />
          <Icon img={Twitter} />
          <Icon img={Discord} />
          <Icon img={Github} />
        </div>
      </div>
      <div className="bg-blue-500 text-center py-2 text-white text-sm font-semibold">
        <p>Copyright</p>
      </div>
    </>
  );
};

export default Footer;
