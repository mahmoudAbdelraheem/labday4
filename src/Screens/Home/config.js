import { ApiEndPoints } from "../../core/EndPoints";

export const getTopRatedMovies = async () => {
  try {
    const movies = await _getMovies(ApiEndPoints.topRatedMovies);
    return movies;
  } catch (e) {
    console.log("error in getPopularMovies", e);
  }
};

export const getNowPlayingMovies = async () => {
  try {
    const movies = await _getMovies(ApiEndPoints.playingMovies);
    return movies;
  } catch (e) {
    console.log("error in getPopularMovies", e);
  }
};

export const getPopularMovies = async () => {
  try {
    const movies = await _getMovies(ApiEndPoints.popularMovies);
    return movies;
  } catch (e) {
    console.log("error in getPopularMovies", e);
  }
};
const _getMovies = async (link) => {
  try {
    const response = await fetch(
      ApiEndPoints.baseUrl + link + "?api_key=" + ApiEndPoints.api_key
    );

    const moviesList = await response.json();
    return moviesList.results;
  } catch (error) {
    console.log("error in getMovies", error);
  }
};
