const axios = require("axios");
const API_KEY = process.env.API_KEY;

const fetchMovies = async (keyword) => {
  try {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/search/movie",
      {
        params: {
          api_key: API_KEY,
          query: keyword,
        },
      }
    );
    return data.results;
  } catch (error) {
    throw new Error(
      `${error.response.status}|${error.response.data.status_message}`
    );
  }
};

const fetchMovieDetails = async (id) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}`,
      {
        params: {
          api_key: API_KEY,
        },
      }
    );
    return data;
  } catch (error) {
    throw new Error(
      `${error.response.status}|${error.response.data.status_message}`
    );
  }
};

const fetchMetaData = async () => {
  try {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/configuration",
      {
        params: {
          api_key: API_KEY,
        },
      }
    );
    const metaData = {
      baseUrl: data.images.base_url,
      sizes: data.images.poster_sizes,
    };
    return metaData;
  } catch (error) {
    throw new Error(
      `${error.response.status}|${error.response.data.status_message}`
    );
  }
};

const createReturnMovieObject = (moviesData) => {
  const movies = moviesData.map((movie) => {
    return {
      id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
    };
  });

  return movies;
};

module.exports = {
  fetchMovies,
  fetchMovieDetails,
  fetchMetaData,
  createReturnMovieObject,
};
