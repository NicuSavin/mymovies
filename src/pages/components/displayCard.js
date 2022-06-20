import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
} from "@mui/material";

const DisplayCard = ({ card }) => {
  let url = card.img1;
  if (url === null) {
    url = card.img2;
  }

  return (
    <Grid item maxWidth={375}>
      <Card>
        <CardMedia
          component="img"
          height="150"
          image={
            url
              ? "https://image.tmdb.org/t/p/original" + url
              : "http://www.wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg"
          }
          alt="image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {card.title}
          </Typography>
        </CardContent>

        <CardContent style={{ height: "100px", overflowY: "auto" }}>
          <Typography variant="body2">{card.overview}</Typography>
        </CardContent>

        {card.button ? (
          <CardActions>
            <Button size="small">Add to list</Button>
          </CardActions>
        ) : (
          <></>
        )}
      </Card>
    </Grid>
  );
};

export default DisplayCard;
