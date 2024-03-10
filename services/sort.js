const compareByPopularity = (a, b) => {
  if (a.popularity < b.popularity) {
    return 1;
  }
  if (a.popularity > b.popularity) {
    return -1;
  }
  return 0;
};

const compareByReleaseDate = (a, b) => {
  if (a.release_date < b.release_date) {
    return 1;
  }
  if (a.release_date > b.release_date) {
    return -1;
  }
  return 0;
};

const compareByVotes = (a, b) => {
  if (a.vote_count < b.vote_count) {
    return 1;
  }
  if (a.vote_count > b.vote_count) {
    return -1;
  }
  return 0;
};

module.exports = {
  compareByPopularity,
  compareByReleaseDate,
  compareByVotes,
};
