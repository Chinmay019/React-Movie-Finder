import React, { useContext } from "react";
import MovieContext from "../context/MovieContext";
import { Link } from "react-router-dom";
import constants from "../assets/constants";
import Details from "../pages/Details";
import defaultPoster from "../assets/default_poster.jpg";

function Item({ item: { title, poster_path, id } }) {
  // const { getMovieDetails } = useContext(MovieContext);
  return (
    <div className="card lg:card-side shadow-xl bg-base-100">
      <div className="flex item-center space-x-4 ">
        <div className="avatar box-border">
          <figure className="rounded-half w-[185px] shadow h-[278px]">
            {poster_path ? (
              <img
                src={`${constants.TMDB_POSTER_URL}/${poster_path}`}
                alt={`Poster of ${title}`}
              />
            ) : (
              <div>
                <img src={defaultPoster} alt="Poster Not Available"></img>
              </div>
            )}
          </figure>
        </div>

        <div className="flex-col w-100">
          <h2 className="card-title">{title}</h2>
          <div className="-inset-y-px">
            <Link to={`movie/${id}`} className="text-center">
              <button className="btn btn-sm btn-primary">Get more info</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    // <div className="card lg:card-side bg-base-100 shadow-xl">
    //   <div className="flex item-center">
    //     <div className="avatar bg-contain">
    //       <div className="rounded-half shadow h-40 w-40 bg-auto">
    //         <figure>
    //           <img
    //             src={`${constants.TMDB_POSTER_URL}/${poster_path}`}
    //             alt="Poster"
    //           />
    //         </figure>
    //       </div>
    //     </div>
    //     <div className="card-body p-3">
    //       <h2 className="card-title items-center text-center leading-tight">
    //         {title}
    //       </h2>
    //       <div className="card-actions justify-end object-right-bottom">
    //         <Link to={`movie/${id}`}>
    //           <button className="btn btn-sm btn-primary">Get More Info</button>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Item;
