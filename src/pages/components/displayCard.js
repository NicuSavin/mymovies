import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Modal,
  Button,
} from "@mui/material";
import { useState } from "react";
const DisplayCard = ({ card }) => {
  const [popup, setPopup] = useState(false);
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
      <Modal open={popup}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "60%",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            height: "70%",
          }}
        >
          <Typography variant="h6" component="h2">
            {card.title}
          </Typography>
          <Typography sx={{ mt: 2 }}>{card.overview}</Typography>
          <Button onClick={() => setPopup(false)}>Close</Button>
        </Box>
      </Modal>
    </>
  );
};

export default DisplayCard;
