import React from "react";
import errorSVG from "../assets/alert-error.svg";
function NotFound() {
  return (
    <div>
      <div className="flex flex wrap justify-center items-center">
        <svg
          width="200px"
          height="200px"
          viewBox="0 0 24 24"
          color="red"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.20164 18.4695L10.1643 4.00506C10.9021 2.66498 13.0979 2.66498 13.8357 4.00506L21.7984 18.4695C22.4443 19.6428 21.4598 21 19.9627 21H4.0373C2.54022 21 1.55571 19.6428 2.20164 18.4695Z"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 9V13"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 17.0195V17"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="pl-4 text-5xl text-red-600 font-bold">
          Page not found
        </span>
      </div>
    </div>
  );
}

export default NotFound;
