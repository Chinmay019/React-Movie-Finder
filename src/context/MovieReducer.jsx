const movieReducer = (state, action) => {
  switch (action.type) {
    case "GET_MOVIE":
      return {
        ...state,
        results: action.payload.results,
        loading: false,
      };
    case "SEARCH_MOVIE":
      return {
        ...state,
        results: action.payload,
        loading: false,
      };
    case "GET_MOVIE_DETAILS":
      return {
        ...state,
        movie: action.payload,
        loading: false,
      };
    case "CLEAR_RESULTS":
      return {
        ...state,
        results: [],
      };
    case "GO_TO_HOME":
      return {
        ...state,
        results: [],
        movie: {},
        loading: true,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default movieReducer;
