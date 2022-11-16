import "../../App.scss";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="options_menu">
        <h2 onClick={() => console.log("here")} className="item">
          N N N
        </h2>
        <Link to="/movies" className="item">
          Movies
        </Link>
        <Link to="/series" className="item">
          Series
        </Link>
        <Link to="/celebs" className="item">
          Celebrities
        </Link>
        <Link to="/mylist" className="item">
          My List
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
