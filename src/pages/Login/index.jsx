import React from "react";
import { LoginBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";

const Login = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-1">
        <img
          src={LoginBg}
          alt="bg-image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-[500px] p-8 flex flex-col justify-center">
        <p className="text-xl font-bold mb-4 text-center">Login</p>
        <Input label="Email" placeholder="Email" />
        <Gap height={18} />
        <Input label="Password" placeholder="Password" type="password" />
        <Gap height={20} />
        <Button title="Login" />
        <Gap height={100} />
        <Link title="Daftar" />
      </div>
    </div>
  );
};

export default Login;
