import React from "react";
import { RegisterBg } from "../../assets";
import { Button, Input } from "../../components";

const Register = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-1">
        <img
          src={RegisterBg}
          alt="image-register"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-[500px] p-8">
        <p className="text-xl font-bold mb-4">Register</p>
        <Input label="Full Name" placeholder="Full Name" />
        <Input label="Email" placeholder="Email" />
        <Input label="Password" placeholder="Password" type="password" />
        <Button title="Register" />
      </div>
    </div>
  );
};

export default Register;
