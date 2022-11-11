import { Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const MyList = () => {
  const [watched, setWatched] = useState([]);
  const [watchLater, setWatchLater] = useState([]);

  // useEffect(() => {
  //   setWatched(localStorage.getItem("watched"));
  //   setWatched(localStorage.getItem("watched"));
  // });

  // useEffect(() => {
  //   console.log("watched update");
  //   localStorage.setItem("watched", JSON.stringify(watched));
  // }, [watched]);

  // useEffect(() => {
  //   console.log("watchlater update");
  //   localStorage.setItem("watchLater", JSON.stringify(watchLater));
  // }, [watchLater]);

  useEffect(() => {
    setWatched(localStorage.getItem("watched"));
    setWatchLater(localStorage.getItem("watchLater"));
  }, []);

  return (
    <Grid container>
      <Grid item className="watchLaterBox" xs={5} md={5}>
        <Typography>Favourites</Typography>
        {localStorage.getItem("watchLater").map(function (movie, i) {
          return (
            <DisplayCard
              key={i}
              card={{
                id: movie.id,
                title: movie.original_title,
                overview: movie.overview,
                card: "landscape",
                img: img,
              }}
            />
          );
        })}
      </Grid>

      <Grid item className="favouriteBox" xs={5} md={5}>
        <Typography>Watch Later</Typography>
        {localStorage.getItem("").map(function (movie, i) {
          return (
            <DisplayCard
              key={i}
              card={{
                id: movie.id,
                title: movie.original_title,
                overview: movie.overview,
                card: "landscape",
                img: img,
              }}
            />
          );
        })}
      </Grid>

      <Grid item className="deleteBox" xs={2} md={2}>
        <Typography>Delete</Typography>
      </Grid>
    </Grid>
  );
};

export default MyList;
