import React, { useState } from "react";
import Filters from "./components/filters";
import { discoverSeries, searchSeries } from "./components/utils";
import DisplayCard from "./components/displayCard";
import { Grid } from "@mui/material";
const SeriesPage = () => {
  const [series, setSeries] = useState({ show: false, list: [] });

  async function handleClick(obj) {
    let searchData = null;
    if (obj.keywords !== null) {
      searchData = await searchSeries(obj);
    }
    if (searchData === null) {
      searchData = await discoverSeries(obj);
    } else {
      //sorting by popularity filter cause the API can't search and sort by popularity at the same time (different endpoints) :(
      if (obj.popularity === "popularity.desc") {
        searchData.results.sort(function (a, b) {
          return b.popularity - a.popularity;
        });
      } else {
        searchData.results.sort(function (a, b) {
          return a.popularity - b.popularity;
        });
      }
      setSeries({ ...series, show: true, list: searchData.results });
    }
  }

  return (
    <>
      <Filters handleClick={handleClick} />
      {series.show && (
        <Grid container spacing={2}>
          {series.list.map(function (serie, i) {
            //2 possible images in object, getting the one that is not undefined
            let img = serie.backdrop_path;
            if (!img) {
              if (!serie.poster_path) {
                img = null;
              } else img = serie.poster_path;
            }
            return (
              <DisplayCard
                key={i}
                card={{
                  title: serie.name,
                  overview: serie.overview,
                  card: "landscape",
                  img: img,
                }}
              />
            );
          })}
        </Grid>
      )}
    </>
  );
};

export default SeriesPage;
