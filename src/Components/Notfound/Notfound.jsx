import React from "react";
import style from "./Notfound.module.css";

export default function Notfound() {
  return (
    <>
      <div className="h-screen bg-color flex justify-center items-center">
        <div className="container text-7xl text-white font-light">
          <h1>Oops,</h1>
          <h1>
            <span className="pfcolor">nothing </span> here...
          </h1>
        </div>
      </div>
    </>
  );
}
