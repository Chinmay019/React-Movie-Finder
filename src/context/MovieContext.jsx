import { createContext, useReducer } from "react";
import MovieReducer from "./MovieReducer";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const initialState = {
    searchQuery: "",
    results: [],
    movie: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(MovieReducer, initialState);

  return (
    <MovieContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
