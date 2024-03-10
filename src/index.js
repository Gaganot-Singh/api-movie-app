"use strict";
require("dotenv").config();
const express = require("express");
const movieRouter = require("./routers/movies");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", movieRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
