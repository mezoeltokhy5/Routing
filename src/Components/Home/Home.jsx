import React from "react";
import style from "./Home.module.css";
import logo from "../../assets/avataaars.svg";
export default function Home() {
  return (
    <>
      <div className="text-center flex flex-wrap flex-col items-center justify-center bg-color h-screen">
        <img src={logo} className="w-64 pb-7" alt="" />
        <div>
          <h2 className=" text-white text-4xl font-extrabold  py-5">
            START FRAMEWORK
          </h2>
          <div className="flex flex-nowrap flex-row items-center justify-center">
            <div className="line"></div>
            <i className="fa-solid fa-star text-white px-4"></i>
            <div className="line"></div>
          </div>
          <div className="text-white pt-4">
            Graphic Artist - Web Designer - Illustrator
          </div>
        </div>
      </div>
    </>
  );
}
