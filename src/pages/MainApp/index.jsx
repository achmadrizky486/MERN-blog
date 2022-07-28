import React from "react";
import { Routes, Route } from "react-router-dom";
import { Footer, Header } from "../../components";
import CreateBlog from "../CreateBlog";
import DetailBlog from "../DetailBlog";
import Home from "../Home";
import NotFound from "../NotFound";

const MainApp = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div>
          <Header />
        </div>
        <div className="flex-1 justify-between px-10">
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="create-blog" element={<CreateBlog />}></Route>
            <Route path="detail-blog" element={<DetailBlog />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MainApp;
