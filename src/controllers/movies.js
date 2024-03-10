const movieService = require("../services/movies.js");

const errorHandler = (error) => {
  const [statusCode, message] = error.message?.split("|");
  const status = parseInt(statusCode);
  if (isNaN(status)) {
    console.log(error);
    return { status: 500, message: "Something went wrong" };
  }
  return { message, status };
};

const getMoviesSortedByPopularity = async (req, res) => {
  try {
    const { keyword } = req.query;
    const movies = await movieService.getMoviesSortedByPopularity(keyword);
    res.json({
      data: movies,
    });
  } catch (err) {
    const { message, status } = errorHandler(err);
    res.status(status).json({
      error: { message },
    });
  }
};

const getMoviesSortedByReleaseDate = async (req, res) => {
  try {
    const { keyword } = req.query;
    const movies = await movieService.getMoviesSortedByReleaseDate(keyword);
    res.json({
      data: movies,
    });
  } catch (err) {
    const { message, status } = errorHandler(err);
    res.status(status).json({
      error: { message },
    });
  }
};

const getMoviesSortedByVotes = async (req, res) => {
  try {
    const { keyword } = req.query;
    const movies = await movieService.getMoviesSortedByVotes(keyword);
    res.json({
      data: movies,
    });
  } catch (err) {
    const { message, status } = errorHandler(err);
    res.status(status).json({
      error: { message },
    });
  }
};

const getMovieById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const movie = await movieService.getMovieById(id);
    res.json({
      data: movie,
    });
  } catch (err) {
    const { message, status } = errorHandler(err);
    res.status(status).json({
      error: { message },
    });
  }
};

const getMetaData = async (req, res) => {
  try {
    const metaData = await movieService.getMetaData();
    res.json({
      meta: metaData,
    });
  } catch (err) {
    const { message, status } = errorHandler(err);
    res.status(status).json({
      error: { message },
    });
  }
};

module.exports = {
  getMoviesSortedByPopularity,
  getMoviesSortedByReleaseDate,
  getMoviesSortedByVotes,
  getMovieById,
  getMetaData,
};
