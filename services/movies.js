const sortService = require("./sort.js");
const fetchService = require("./fetch.js");
const cacheService = require("./cache.js");

const getMoviesSortedByPopularity = async (keyword) => {
  if (!keyword) throw new Error("400|Invalid input");

  const moviesData = await fetchService.fetchMovies(keyword);
  const sortedMovies = moviesData.sort(sortService.compareByPopularity);
  return fetchService.createReturnMovieObject(sortedMovies);
};

const getMoviesSortedByReleaseDate = async (keyword) => {
  if (!keyword) throw new Error("400|Invalid input");

  const moviesData = await fetchService.fetchMovies(keyword);
  const sortedMovies = moviesData.sort(sortService.compareByReleaseDate);
  return fetchService.createReturnMovieObject(sortedMovies);
};

const getMoviesSortedByVotes = async (keyword) => {
  if (!keyword) throw new Error("400|Invalid input");

  const moviesData = await fetchService.fetchMovies(keyword);
  const sortedMovies = moviesData.sort(sortService.compareByVotes);
  return fetchService.createReturnMovieObject(sortedMovies);
};

const getMovieById = async (id) => {
  const cachedMovieData = await cacheService.getMovie(id);
  if (cachedMovieData) {
    return cachedMovieData;
  }

  const movieDetails = await fetchService.fetchMovieDetails(id);
  cacheService.setMovie(id, movieDetails);

  return movieDetails;
};

const getMetaData = async () => {
  const metaData = await fetchService.fetchMetaData();
  return metaData;
};

module.exports = {
  getMoviesSortedByPopularity,
  getMoviesSortedByReleaseDate,
  getMoviesSortedByVotes,
  getMovieById,
  getMetaData,
};
