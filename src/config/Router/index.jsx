import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login, MainApp, Register, NotFound } from "../../pages";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<MainApp />}></Route>
        {/* <Route path="/main/*" element={<MainApp />}></Route> Kalau ada 2 yang nested */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
};

export default Router;
