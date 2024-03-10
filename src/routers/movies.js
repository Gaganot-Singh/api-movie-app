const { Router } = require("express");
const movieController = require("../controllers/movies");

const movieRouter = Router();

movieRouter.get("/popularity", movieController.getMoviesSortedByPopularity);
movieRouter.get("/release-date", movieController.getMoviesSortedByReleaseDate);
movieRouter.get("/vote", movieController.getMoviesSortedByVotes);
movieRouter.get("/id/:id", movieController.getMovieById);
movieRouter.get("/meta", movieController.getMetaData);

module.exports = movieRouter;
