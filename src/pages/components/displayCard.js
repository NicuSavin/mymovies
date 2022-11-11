import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Modal,
  CardActionArea,
  Button,
  useScrollTrigger,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import "../../App.scss";
import { getMovieTrailer } from "../components/utils";
import FavoriteIcon from "@mui/icons-material/Favorite";

const DisplayCard = ({ card }) => {
  const [popup, setPopup] = useState(false);
  const [loadingTrailer, setLoadingTrailer] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState(null);

  return (
    <>
      <Grid item xs={4} sm={4} md={3} lg={3} xl={2} margin={2} minWidth={200}>
        <Card
          onClick={() => {
            setLoadingTrailer(true);
            getMovieTrailer(card.id)
              .then((url) => setTrailerUrl(url))
              .finally(() => setLoadingTrailer(false));
            setPopup(true);
          }}
          className={
            card.card === "landscape" ? "landscape-card" : "portrait-card"
          }
          sx={{ maxWidth: 300 }}
        >
          <CardActionArea style={{ height: "100%" }}>
            <img
              src={
                card.img
                  ? "https://image.tmdb.org/t/p/original" + card.img
                  : "http://www.wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg"
              }
            ></img>
            <CardContent>
              <Typography gutterBottom variant="h6">
                {card.title}
              </Typography>
            </CardContent>

            <CardContent className="info">
              <Typography variant="body2">{card.overview}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Modal open={popup}>
        <Box className="popup-box">
          <div className="options">
            <FavoriteIcon fontSize="large" />
            <Button variant="outlined">Watch Later</Button>
            <CloseIcon
              className="closebtn"
              variant="outlined"
              onClick={() => setPopup(false)}
            >
              Close
            </CloseIcon>
          </div>
          {loadingTrailer && <h3>Loading...</h3>}
          {!loadingTrailer &&
            (trailerUrl ? (
              <iframe
                className="video-player"
                src={trailerUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="no-video">
                <img src="no-video-available.jpeg"></img>
              </div>
            ))}
        </Box>
      </Modal>
    </>
  );
};

export default DisplayCard;
