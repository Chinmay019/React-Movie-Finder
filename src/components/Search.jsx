import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import MovieContext from "../context/MovieContext";
import { searchMovie } from "../context/MovieAction";

function Search() {
  const [text, setText] = useState("");
  const [timeoutId, setTimeoutId] = useState();
  const { dispatch, results } = useContext(MovieContext);

  const handleChange = (e) => {
    clearTimeout(timeoutId);
    setText(e.target.value);
    const timeout = setTimeout(async () => {
      dispatch({ type: "SET_LOADING" });
      const resp = await searchMovie(e.target.value);
      dispatch({ type: "SEARCH_MOVIE", payload: resp });
    }, 200);
    setTimeoutId(timeout);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text !== "") {
      dispatch({ type: "SET_LOADING" });
      const resp = await searchMovie(text);
      dispatch({ type: "SEARCH_MOVIE", payload: resp });
      setText("");
    } else {
      alert("Please enter a value");
    }
  };

  return (
    <div className=" m-3 grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 mb-8 gap-8">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              defaultValue={text}
              onKeyUp={handleChange}
              className="input input-bordered bg-gray-300 text-black w-full max-w-xs m-4 mr-0 pr-40 rounded-r-none"
            />
            <button
              type="submit"
              className="top-0 right-0 btn w-36 p-2 rounded-l-none"
            >
              <FaSearch size={16} className="m-0" />
              Search
            </button>
          </div>
        </div>
      </form>
      <div className="flex justify-end mr-5 mt-3">
        {results.length ? (
          <button
            className="w-50 rounded btn btn-accent"
            onClick={() => dispatch({ type: "CLEAR_RESULTS" })}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default Search;
