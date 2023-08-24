import React from "react";
import spinner from "../assets/Pulse-1s-200px2.gif";
function Spinner() {
  return (
    <div>
      {/* <span
        className="loading loading-bars loading-lg text-center mx-auto"
        width={200}
      ></span> */}
      <img
        src={spinner}
        className="text-center mx-auto w-300 h-300"
        alt="Loading..."
      ></img>
    </div>
  );
}

export default Spinner;
