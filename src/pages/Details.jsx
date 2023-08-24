import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieContext from "../context/MovieContext";
import Spinner from "../components/Spinner";
import constants from "../assets/constants";
import { getMovieDetails } from "../context/MovieAction";
import defaultPoster from "../assets/default_poster.jpg";

function Details({ movieId }) {
  const { movie, loading, dispatch } = useContext(MovieContext);

  const params = useParams();

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    const getDetails = async () => {
      const data = await getMovieDetails(params.movie_id);
      dispatch({ type: "GET_MOVIE_DETAILS", payload: data });
    };
    getDetails();
  }, [movieId]);

  const {
    release_date,
    overview,
    id,
    imdb_id,
    title,
    vote_average,
    vote_count,
    genres,
    poster_path,
  } = movie;

  // const release_year = ;

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="flex h-screen p-5 m-5 justify-between	">
      <div>
        <h1 className="text-2xl mb-5">{title}</h1>
        <p className="text-justify pr-5 mb-5">{overview}</p>
        <p className="mb-5">
          Release Year: <span className="text-xl p-1.5">{release_date}</span>
        </p>
        <p className="mb-5">
          No of Reviews: <span className="text-xl p-1.5">{vote_count}</span>
        </p>
        <p className="mb-5">
          Rating:
          <span className="text-purple-600 text-xl p-1.5">
            {vote_average}/10
          </span>
        </p>
        <a href={`${constants.IMDB_URL}/${imdb_id}`} target="_blank">
          <button className="btn btn-accent	">Visit IMDB Page</button>
        </a>
      </div>
      <div className="avatar box-border">
        <figure className="rounded-half w-[300px] shadow h-[478px] bg-contain justify-end">
          {poster_path ? (
            <img
              src={`${constants.TMDB_POSTER_URL_DETAILS}/${poster_path}`}
              alt={`Poster of ${title}`}
            />
          ) : (
            <div>
              <img src={defaultPoster} alt="Poster Not Available"></img>
            </div>
          )}
        </figure>
      </div>
    </div>
  );
}

export default Details;
