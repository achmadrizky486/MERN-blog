import React from "react";
import { RegisterBg } from "../../../assets";
import { Link } from "../../atoms";
import { useNavigate } from "react-router-dom";

const BlogItem = (props) => {
  const { image, title, name, date, body } = props;
  const history = useNavigate();
  return (
    <div>
      <div className="w-full rounded-lg overflow-hidden shadow-lg shadow-black/40 hover:cursor-pointer">
        <img src={image} alt="" className="w-full h-48 object-cover" />
        <div className="p-4">
          <p className="text-xl font-bold text-[#313131] h-[50px]">{title}</p>
          <p className="text-xs mt-3 text-gray-500">
            {name} - {date}
          </p>
          <p className="mt-4 text-base text-[#353535] h-[50px]">{body}</p>
          <div className="text-blue-500 w-fit">
            <Link title={"Read More"} onClick={() => history("/detail-blog")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
