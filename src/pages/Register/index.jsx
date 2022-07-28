import React from "react";
import { RegisterBg } from "../../assets";
import { Input } from "../../components";

const Register = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-1">
        <img src={RegisterBg} className="w-full h-full object-cover" />
      </div>
      <div className="w-[500px] p-8">
        <p className="text-xl font-bold mb-4">Register</p>
        <Input />
        <Input />
        <Input />
      </div>
    </div>
  );
};

export default Register;
