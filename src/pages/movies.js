import React, { useState } from "react";
import Filters from "./components/Filters";
import { discoverMovies, searchMovies } from "./components/utils";
import DisplayCard from "./components/DisplayCard";
import { Grid } from "@mui/material";
const MoviesPage = () => {
  const [movies, setMovies] = useState({ show: false, list: [] });

  async function handleClick(obj) {
    let searchData = null;
    if (obj.keywords !== null) {
      searchData = await searchMovies(obj);
    }
    if (searchData === null) {
      searchData = await discoverMovies(obj);
    } else {
      //sorting by popularity filter cause the API can't sort if searching (different endpoints) :(
      if (searchData.results) {
        if (obj.popularity === "popularity.desc") {
          searchData.results.sort(function (a, b) {
            return b.popularity - a.popularity;
          });
        } else {
          searchData.results.sort(function (a, b) {
            return a.popularity - b.popularity;
          });
        }
        setMovies({ show: true, list: searchData.results });
      }
    }
  }

  return (
    <>
      <Filters handleClick={handleClick} />
      {movies.show ? (
        <Grid container>
          {movies.list.map(function (movie, i) {
            if (movie) {
              return (
                <DisplayCard
                  key={i}
                  card={{
                    title: movie.original_title,
                    overview: movie.overview,
                    card: "landscape",
                    img1: movie.backdrop_path,
                    img2: movie.poster_path,
                  }}
                />
              );
            }
          })}
        </Grid>
      ) : (
        <></>
      )}
    </>
  );
};

export default MoviesPage;
