import React from "react";
import { Button, Input, TextArea, Upload } from "../../components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const onSubmit = () => {
    console.log(title), console.log(body), console.log(image);
    const data = new FormData();
    data.append("title", title);
    data.append("body", body);
    data.append("image", image);

    Axios.post("http://localhost:4000/v1/blog/post", data, {
      headers: {
        "content-type": "multipart/form-data",
      },
    })
      .then((res) => {
        console.log("success ", res);
      })
      .catch((err) => {
        console.log("error ", err);
      });
  };

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };
  const history = useNavigate();
  return (
    <div>
      <div>
        <p className="text-xl font-bold mb-2 mt-5">Create New Blog Post</p>
      </div>
      <Input
        label={"Post Title"}
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Upload onChange={(e) => onImageUpload(e)} img={imagePreview} />
      <TextArea value={body} onChange={(e) => setBody(e.target.value)} />
      <div className="flex">
        <div className="mt-4 w-[200px] mr-auto">
          <Button title={"Kembali"} onClick={() => history("/")} />
        </div>
        <div className="mt-4 w-[200px] ml-auto">
          <Button title={"Save"} onClick={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
