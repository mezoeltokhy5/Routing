import React from "react";
import style from "./Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="color1 text-white py-12">
        <div className="container py-10">
          <div className="flex flex-wrap flex-col md:flex-row justify-between items-center text-center space-y-14 md:space-y-0 px-7">
            <div className="flex flex-wrap flex-col justify-center items-center md:w-1/4 space-y-2">
              <h3 className="text-2xl font-semibold">LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className="flex flex-wrap flex-col justify-center items-center md:w-1/4 space-y-2">
              <h3 className="text-2xl font-semibold">AROUND THE WEB</h3>
              <ul className="flex flex-wrap justify-center items-center space-x-2 ">
                <li>
                  <Link>
                    <i className="fa-brands fa-facebook border rounded-3xl p-2 hover:bg-teal-600"></i>
                  </Link>
                </li>
                <li>
                  <Link>
                    <i className="fa-brands fa-twitter border rounded-3xl p-2 hover:bg-teal-600"></i>
                  </Link>
                </li>
                <li>
                  <Link>
                    <i className="fa-brands fa-linkedin-in border rounded-3xl p-2 hover:bg-teal-600"></i>
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <i className="fa-solid fa-globe border rounded-3xl p-2 hover:bg-teal-600 transition-all "></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap flex-col justify-center items-center md:w-1/4 space-y-2">
              <h3 className="text-2xl font-semibold">ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="flex justify-center items-center focolor static bottom-0 inset-x-0 text-white py-4">
        <p>Copyright © Your Website 2021</p>
      </div>
    </>
  );
}
