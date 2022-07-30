import React from "react";
import { Button } from "../../components";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const history = useNavigate();
  return (
    <>
      <div className="h-screen w-screen bg-blue-300 absolute top-0 left-0">
        NotFound
        <div className="mt-4 w-[200px] mr-auto">
          <Button title={"Kembali"} onClick={() => history("/")} />
        </div>
      </div>
    </>
  );
};

export default NotFound;
