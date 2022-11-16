//input your TMDB API token from https://www.themoviedb.org/
const apiToken = "39cb7cca10449e5b28bc89020b4d3cf8";
const searchMovieUrl = new URL(
  "https://api.themoviedb.org/3/search/movie?api_key=" + apiToken
);
const discoverMovieUrl = new URL(
  "https://api.themoviedb.org/3/discover/movie?api_key=" + apiToken
);
const searchSeriesUrl = new URL(
  "https://api.themoviedb.org/3/search/tv?api_key=" + apiToken
);
const discoverSeriesUrl = new URL(
  "https://api.themoviedb.org/3/discover/tv?api_key=" + apiToken
);
const searchCelebUrl = new URL(
  "https://api.themoviedb.org/3/search/person?api_key=" + apiToken
);
const discoverCelebUrl = new URL(
  "https://api.themoviedb.org/3/person/popular?api_key=" + apiToken
);
const movieTrailerUrl =
  "https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=";

const seriesTrailerUrl =
  "https://api.themoviedb.org/3/tv/{tv_id}/videos?api_key=";

const youtubeEmbedUrl = "https://www.youtube.com/embed/";
const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=utf-8",
  },
};

async function discoverMovies(obj) {
  let tempUrl = discoverMovieUrl;
  tempUrl.searchParams.append("sort_by", obj.popularity);
  tempUrl.searchParams.append("include_adult", obj.adult);

  let response = await fetch(tempUrl, options);
  return await response.json();
}

async function searchMovies(obj) {
  let tempUrl = searchMovieUrl;
  tempUrl.searchParams.append("query", encodeURI(obj.keywords));
  tempUrl.searchParams.append("include_adult", obj.adult);

  let response = await fetch(tempUrl, options);
  return await response.json();
}

async function discoverSeries(obj) {
  let tempUrl = discoverSeriesUrl;
  tempUrl.searchParams.append("sort_by", obj.popularity);
  tempUrl.searchParams.append("include_adult", obj.adult);

  let response = await fetch(tempUrl, options);
  return await response.json();
}

async function searchSeries(obj) {
  let tempUrl = searchSeriesUrl;
  tempUrl.searchParams.append("query", encodeURI(obj.keywords));
  tempUrl.searchParams.append("include_adult", obj.adult);

  let response = await fetch(tempUrl, options);
  return await response.json();
}

async function discoverCelebs() {
  let tempUrl = discoverCelebUrl;
  let response = await fetch(tempUrl, options);
  return await response.json();
}

async function searchCelebs(obj) {
  let tempUrl = searchCelebUrl;
  tempUrl.searchParams.append("query", encodeURI(obj.keywords));
  tempUrl.searchParams.append("include_adult", obj.adult);

  let response = await fetch(tempUrl, options);
  return await response.json();
}

async function getMovieTrailer(id) {
  let tempUrl = new URL(movieTrailerUrl.replace("{movie_id}", id) + apiToken);
  let response = await fetch(tempUrl, options);

  let videoList = await response.json();
  let trailerObj = videoList.results.find((obj) => {
    return obj.type === "Trailer" && obj.site === "YouTube";
  });

  if (typeof trailerObj === "undefined") return undefined;
  return youtubeEmbedUrl + trailerObj.key;
}

async function getSerieTrailer(id) {
  let tempUrl = new URL(seriesTrailerUrl.replace("{tv_id}", id) + apiToken);

  let response = await fetch(tempUrl, options);

  let videoList = await response.json();
  let trailerObj = videoList.results.find((obj) => {
    return obj.type === "Trailer" && obj.site === "YouTube";
  });

  if (typeof trailerObj === "undefined") return undefined;
  return youtubeEmbedUrl + trailerObj.key;
}

function addWatchLater(card) {
  let temp = JSON.parse(localStorage.getItem("watchLater"));
  if (
    temp.movies.some((e) => e.id === card.id) ||
    temp.series.some((e) => e.id === card.id)
  ) {
    return;
  }
  if (card.type === "movie") {
    temp.movies.push(card);
  } else {
    temp.series.push(card);
  }
  localStorage.setItem("watchLater", JSON.stringify(temp));
}

export {
  discoverMovies,
  searchMovies,
  discoverSeries,
  searchSeries,
  discoverCelebs,
  searchCelebs,
  getMovieTrailer,
  getSerieTrailer,
  addWatchLater,
};
