import React, { useState } from "react";
import Filters from "./components/filters";
import { discoverCelebs, searchCelebs } from "./components/utils";
import DisplayCard from "./components/displayCard";
import { Grid } from "@mui/material";
const CelebsPage = () => {
  const [celebs, setCelebs] = useState({ show: false, list: [] });

  async function handleClick(obj) {
    let searchData = null;
    if (obj.keywords !== null) {
      searchData = await searchCelebs(obj);
    }
    if (searchData === null) {
      searchData = await discoverCelebs();
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
      setCelebs({ ...celebs, show: true, list: searchData.results });
    }
  }

  return (
    <>
      <Filters handleClick={handleClick} />
      {celebs.show && (
        <Grid container spacing={2}>
          {celebs.list.map(function (celeb, i) {
            return (
              <DisplayCard
                key={i}
                card={{
                  title: celeb.name,
                  overview: "Here here",
                  button: false,
                  img1: celeb.profile_path,
                }}
              />
            );
          })}
        </Grid>
      )}
    </>
  );
};

export default CelebsPage;
