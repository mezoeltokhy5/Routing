import React from "react";
import style from "./About.module.css";

export default function About() {
  return (
    <>
      <div className="text-center flex flex-wrap flex-col items-center gap-y-5 justify-center bg-color h-screen text-white">
        <h2 className="text-4xl font-semibold">ABOUT COMPONENT</h2>
        <div className="flex flex-nowrap flex-row items-center justify-center">
          <div className="line"></div>
          <i className="fa-solid fa-star text-white px-4"></i>
          <div className="line"></div>
        </div>
        <div className="flex flex-wrap flex-col md:flex-row items-center justify-center gap-10">
          <p className="px-5 md:p-0 md:w-1/3">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p className="px-5 md:p-0 md:w-1/3">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </>
  );
}
