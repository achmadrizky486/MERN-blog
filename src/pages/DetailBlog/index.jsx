import React from "react";
import { RegisterBg } from "../../assets";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components";

const DetailBlog = () => {
  const history = useNavigate();
  return (
    <div>
      <img
        className="w-full h-[300px] object-cover"
        src={RegisterBg}
        alt="img-thumb"
      />
      <p className="text-3xl font-bold mt-5 text-[#2d2d2d]">Title</p>
      <p className="text-gray-500 text-sm">Author Date</p>
      <p className="leading-9">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
        laborum error alias distinctio ipsa? Consequuntur minima dolore quos
        earum eos eligendi nihil mollitia, officia architecto aut consequatur
        odio, beatae corrupti.
      </p>
      <div className="mt-4 w-[200px] mr-auto">
        <Button title={"Kembali"} onClick={() => history("/")} />
      </div>
    </div>
  );
};

export default DetailBlog;
