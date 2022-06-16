import "./App.scss";
import ProfileIcons from "./profileIcons";
import { Button } from "@mui/material";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="options_menu">
        <h2 className="item">N N N</h2>
        <Button href="/movies" className="item" variant="text">
          Movies
        </Button>
        <Button href="/series" className="item" variant="text">
          Series
        </Button>
        <Button href="/celebs" className="item" variant="text">
          Celebrities
        </Button>
        <Button className="item" variant="text" href="/browse">
          Browse
        </Button>
      </div>

      <ProfileIcons />
    </div>
  );
};

export default TopBar;
