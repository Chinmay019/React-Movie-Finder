import constants from "../assets/constants";

// Search Movies
export const searchMovie = async (text) => {
    const param = new URLSearchParams({
        query: text,
    });
    const response = await fetch(
        `${constants.TMDB_URL}/search/movie?${param}`,
        {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: "Bearer " + import.meta.env.VITE_TMDB_READTOKEN,
            },
        }
    );
    const { results } = await response.json();

    return results;
};

// get movie details
export const getMovieDetails = async (movie_id) => {
    const response = await fetch(`${constants.TMDB_URL}/movie/${movie_id}`, {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: "Bearer " + import.meta.env.VITE_TMDB_READTOKEN,
        },
    });
    const data = await response.json();

    return data;
};