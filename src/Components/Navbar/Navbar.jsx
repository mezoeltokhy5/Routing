import React from "react";
import style from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="color1 text-white py-9 font-extrabold static md:fixed top-0 inset-x-0 z-40 ">
        <div className="text-center container flex flex-wrap justify-center gap-y-4 md:justify-between items-center">
          <div className="home text-3xl">
            <Link to="">START FRAMEWORK</Link>
          </div>

          <ul className="flex flex-wrap gap-5 md:gap-0 space-x-4 justify-center ">
            <li>
              <NavLink to="about" className="rounded-md p-2">
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink to="portfolio" className="rounded-md p-2">
                PORTFOLIO
              </NavLink>
            </li>
            <li>
              <NavLink to="contact" className="rounded-md p-2">
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
