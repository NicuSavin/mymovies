import "../../App.scss";
import { Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="options_menu">
        <h2 onClick={() => console.log("here")} className="item">
          N N N
        </h2>
        <Button href="/movies" className="item" variant="text">
          Movies
        </Button>
        <Button href="/series" className="item" variant="text">
          Series
        </Button>
        <Button href="/celebs" className="item" variant="text">
          Celebrities
        </Button>
        <Button href="/browse" className="item" variant="text">
          Browse
        </Button>
      </div>

      <div className="profile_menu">
        <Button className="item" variant="text" href="/list">
          My List
        </Button>
        <AccountCircleIcon fontSize="large" />
      </div>
    </div>
  );
};

export default TopBar;
