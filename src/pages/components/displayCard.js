import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
  Grid,
} from "@mui/material";

const DisplayCard = ({ card }) => {
  let url = card.img1;
  if (!url) {
    url = card.img2;
  }

  return (
    <>
      <Grid item xs={6} sm={6} md={4} lg={3} xl={2} margin={3} minWidth={20}>
        <Card
          onClick={() => setPopup(!popup)}
          className={
            card.card === "landscape" ? "landscape-card" : "portrait-card"
          }
        >
          <img
            src={
              url
                ? "https://image.tmdb.org/t/p/original" + url
                : "http://www.wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg"
            }
          ></img>
          <CardContent>
            <Typography className="title" gutterBottom variant="h6">
              {card.title}
            </Typography>
          </CardContent>

          <CardContent className="info">
            <Typography style={{ textOverflow: "ellipsis" }} variant="body2">
              {card.overview}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default DisplayCard;
