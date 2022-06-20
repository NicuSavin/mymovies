import { TextField } from "@mui/material";

const MainPage = () => {
  return (
    <TextField
      style={{
        width: "50%",
        bottom: "50%",
        left: "25%",
        position: "absolute",
      }}
      label="Search"
      variant="outlined"
    />
  );
};

export default MainPage;
