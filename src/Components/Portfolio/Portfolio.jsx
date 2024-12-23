import React from "react";
import style from "./Portfolio.module.css";
import img1 from "../../assets/poert1.png";
import img2 from "../../assets/port2.png";
import img3 from "../../assets/port3.png";

export default function Portfolio() {
  return (
    <>
      <div className="container pfcolor text-center h-full pt-10 md:pt-40">
        <h2 className="text-4xl font-extrabold">PORTFOLIO COMPONENT</h2>
        <div className="flex flex-nowrap flex-row items-center justify-center py-4">
          <div className="line2"></div>
          <i className="fa-solid fa-star px-4"></i>
          <div className="line2"></div>
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-10 pb-10">
          <div className="rounded-lg overflow-hidden relative md:w-1/3">
            <img src={img1} alt="" />
            <div className="layer absolute top-0 flex justify-center items-center hover:opacity-100">
              <i class="fa-solid fa-plus text-8xl text-white"></i>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden relative md:w-1/3">
            <img src={img2} alt="" />
            <div className="layer absolute top-0 flex justify-center items-center hover:opacity-100">
              <i class="fa-solid fa-plus text-8xl text-white"></i>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden relative md:w-1/3">
            <img src={img3} alt="" />
            <div className="layer absolute top-0 flex justify-center items-center hover:opacity-100">
              <i class="fa-solid fa-plus text-8xl text-white"></i>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-10 pb-10">
          <div className="rounded-lg overflow-hidden relative md:w-1/3">
            <img src={img1} alt="" />
            <div className="layer absolute top-0 flex justify-center items-center hover:opacity-100">
              <i class="fa-solid fa-plus text-8xl text-white"></i>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden relative md:w-1/3">
            <img src={img2} alt="" />
            <div className="layer absolute top-0 flex justify-center items-center hover:opacity-100">
              <i class="fa-solid fa-plus text-8xl text-white"></i>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden relative md:w-1/3">
            <img src={img3} alt="" />
            <div className="layer absolute top-0 flex justify-center items-center hover:opacity-100">
              <i class="fa-solid fa-plus text-8xl text-white"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
