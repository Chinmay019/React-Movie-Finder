import React from "react";
import spinner from "../assets/Pulse-1s-200px2.gif";
function Spinner() {
  return (
    <div>
      <img
        src={spinner}
        className="text-center mx-auto w-300 h-300"
        alt="Loading..."
      ></img>
    </div>
  );
}

export default Spinner;
