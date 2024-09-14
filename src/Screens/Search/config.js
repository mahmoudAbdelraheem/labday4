import { ApiEndPoints } from "../../core/EndPoints";

export const searchMoviesByName = async (movieName) => {
  const url =
    ApiEndPoints.baseUrl +
    ApiEndPoints.searchMovies +
    "?api_key=" +
    ApiEndPoints.api_key +
    "&query=" +
    movieName;
  const response = await fetch(url);
  const moviesList = await response.json();
  return moviesList.results;
};
