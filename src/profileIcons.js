import { Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const ProfileIcons = () => {
  return (
    <div className="profile_menu">
      <Button className="item" variant="text" href="/list">
        My List
      </Button>
      <AccountCircleIcon fontSize="large" />
    </div>
  );
};

export default ProfileIcons;
