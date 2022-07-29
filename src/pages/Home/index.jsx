import React from "react";
import { BlogItem } from "../../components";
import { Button, Gap } from "../../components/atoms";

const Home = () => {
  return (
    <div className="mt-8">
      <div className="w-48 ml-auto mr-0 mb-8">
        <Button title={"Create Post"} />
      </div>
      <div className="grid grid-cols-2 w-full gap-10">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
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
