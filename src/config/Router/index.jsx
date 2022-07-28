import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Login, Register } from "../../pages";

const Router = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </>
  );
};

export default Router;
