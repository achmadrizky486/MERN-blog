import React, { useEffect, useState } from "react";
import { BlogItem } from "../../components";
import { Button, Gap } from "../../components/atoms";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setDataBlog, setDatanya, setPage } from "../../config/redux/action";

const Home = () => {
  const [counter, setCounter] = useState(1);
  const { dataBlog } = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDataBlog(counter));
    dispatch(setPage());
    dispatch(setDatanya());
  }, [counter, dispatch]);

  const history = useNavigate();

  const previous = () => {
    setCounter(counter <= 1 ? 1 : counter - 1);
    console.log("counter", counter);
  };
  const next = () => {
    setCounter(counter === 6 ? 6 : counter + 1);
    console.log("counter", counter);
  };

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
        <Button title={"Prev"} onClick={previous} />
        <Gap width={50} />
        <p className="my-auto text-center font-semibold w-full">
          {counter} / 6
        </p>
        <Gap width={50} />
        <Button title={"Next"} onClick={next} />
      </div>
    </div>
  );
};

export default Home;
