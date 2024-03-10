const redis = require("redis");

let redisClient;
const getClient = async () => {
  redisClient = await redis
    .createClient({
      url: process.env.REDIS_URL,
    })
    .on("error", (err) => {
      console.error(err);
    })
    .connect();
};
getClient();

const encodeKey = (id) => `${id}`;

const getMovie = async (id) => {
  const key = encodeKey(id);
  const value = await redisClient.get(key);
  return JSON.parse(value);
};

const setMovie = (id, movieData) => {
  const key = encodeKey(id);
  redisClient.set(key, JSON.stringify(movieData), {
    EX: 60 * 5,
  });
};

module.exports = {
  getMovie,
  setMovie,
};
