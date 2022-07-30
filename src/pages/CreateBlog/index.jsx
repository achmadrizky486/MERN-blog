import React from "react";
import { Button, Input, TextArea, Upload } from "../../components";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const history = useNavigate();
  return (
    <div>
      <div>
        <p className="text-xl font-bold mb-2 mt-5">Create New Blog Post</p>
      </div>
      <Input label={"Post Title"} placeholder="Title" />
      <Upload />
      <TextArea />
      <div className="flex">
        <div className="mt-4 w-[200px] mr-auto">
          <Button title={"Kembali"} onClick={() => history("/")} />
        </div>
        <div className="mt-4 w-[200px] ml-auto">
          <Button title={"Save"} />
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
