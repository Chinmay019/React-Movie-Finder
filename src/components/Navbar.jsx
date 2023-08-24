import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SiThemoviedatabase } from "react-icons/si";
import MovieContext from "../context/MovieContext";

function Navbar() {
  const { dispatch } = useContext(MovieContext);

  return (
    // <div className="header">
    //   <SiThemoviedatabase size={25} />
    //   <span>Movie Search</span>
    //   <div className="nav-link">
    //     <Link to="/" className="">
    //       <button className="btn">Home</button>
    //     </Link>
    //     <Link to="/about" className="">
    //       <button className="btn">About</button>
    //     </Link>
    //   </div>
    // </div>

    <div className="navbar bg-base-100">
      <div className="flex-1">
        <SiThemoviedatabase
          size={40}
          className="fill-current text-white-700 m-3.5"
        />
        <Link to="/">
          <button
            className="btn btn-ghost normal-case text-xl"
            onClick={() => dispatch({ type: "GO_TO_HOME" })}
          >
            Movie Finder
          </button>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
