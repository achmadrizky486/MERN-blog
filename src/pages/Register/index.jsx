import React from "react";
import { RegisterBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";

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
      <div className="w-[500px] p-8 flex flex-col justify-center">
        <p className="text-xl font-bold mb-4 text-center">Register</p>
        <Input label="Full Name" placeholder="Full Name" />
        <Gap height={18} />
        <Input label="Email" placeholder="Email" />
        <Gap height={18} />
        <Input label="Password" placeholder="Password" type="password" />
        <Gap height={20} />
        <Button title="Register" />
        <Gap height={100} />
        <Link title="Kembali ke Login" />
      </div>
    </div>
  );
};

export default Register;
