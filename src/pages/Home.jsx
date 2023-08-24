import React, { useContext } from "react";
import Search from "../components/Search";
import Results from "../components/Results";
import MovieContext from "../context/MovieContext";

function Home() {
  const { results } = useContext(MovieContext);
  return (
    <div>
      <Search />
      {results.length ? <Results /> : null}
    </div>
  );
}

export default Home;
