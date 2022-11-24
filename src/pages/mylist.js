import { Grid, Typography } from "@mui/material";
import DisplayCard from "./components/displayCard";

const MyList = () => {
  const watched = JSON.parse(localStorage.getItem("watched"));
  const watchLater = JSON.parse(localStorage.getItem("watchLater"));

  return (
    <div>
      <Grid container>
        <Typography>Watch later Movies</Typography>
        {watchLater.movies.map(function (movie, i) {
          return (
            <DisplayCard
              key={i}
              card={{
                id: movie.id,
                title: movie.original_title,
                overview: movie.overview,
                type: movie.type,
                img: movie.img,
              }}
            />
          );
        })}
      </Grid>
      <Grid container>
        <Typography>Watch later Series</Typography>
        {watchLater.series.map(function (serie, i) {
          return (
            <DisplayCard
              key={i}
              card={{
                id: serie.id,
                title: serie.original_title,
                overview: serie.overview,
                type: serie.type,
                img: serie.img,
              }}
            />
          );
        })}
      </Grid>
    </div>
  );
};

export default MyList;
