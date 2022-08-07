import React, { useEffect, useState } from "react";
import { BlogItem } from "../../components";
import { Button, Gap } from "../../components/atoms";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const Home = () => {
  const [dataBlog, setDataBlog] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:4000/v1/blog/posts")
      .then((result) => {
        console.log("result = ", result.data);
        const response = result.data;
        setDataBlog(response.data);
      })
      .catch((err) => {
        console.log("error = ", err);
      });
  }, []);

  const history = useNavigate();
  return (
    <div className="mt-8">
      <div className="w-48 ml-auto mr-0 mb-8">
        <Button title={"Create Post"} onClick={() => history("/create-blog")} />
      </div>
      <div className="grid grid-cols-2 w-full gap-10">
        {dataBlog.map((blog) => {
          return (
            <BlogItem
              key={blog._id}
              image={`http://localhost:4000/${blog.image.replace(/\\/g, "/")}`}
              title={blog.title.charAt(0).toUpperCase() + blog.title.slice(1)}
              name={blog.author.name}
              date={blog.createdAt}
              body={
                blog.body.substring(0, 100).charAt(0).toUpperCase() +
                blog.body.slice(1).substring(0, 100) +
                "..."
              }
            />
          );
        })}
      </div>
      <div className="mt-8 flex w-[400px] mx-auto">
        <Button title={"Prev"} />
        <Gap width={50} />
        <Button title={"Next"} />
      </div>
    </div>
  );
};

export default Home;
