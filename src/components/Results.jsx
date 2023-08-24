import React, { useContext } from "react";
import Item from "./Item";
import Spinner from "./Spinner";
import MovieContext from "../context/MovieContext";

function Results() {
  const { results, loading } = useContext(MovieContext);
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="m-7">
        <h2 className="text-xl pb-5">Movies:</h2>
        <div className="grid gap-7 grig-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {results.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default Results;
