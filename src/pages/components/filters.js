import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

function Filters({ handleClick }) {
  const [filters, setFilters] = useState({
    keywords: null,
    popularity: "popularity.desc",
    adult: false,
  });

  return (
    <div className="filters">
      <TextField
        onChange={(e) => {
          setFilters({
            ...filters,
            keywords: e.target.value,
          });
        }}
        label="Keywords"
      ></TextField>
      <FormControl className="filter">
        <InputLabel>Popularity</InputLabel>
        <Select
          value={filters.popularity}
          label="Popularity"
          onChange={(e) => {
            setFilters({ ...filters, popularity: e.target.value });
          }}
        >
          <MenuItem value="popularity.desc">Descending</MenuItem>
          <MenuItem value="popularity.asc">Ascending</MenuItem>
        </Select>
      </FormControl>

      <FormControl className="filter">
        <InputLabel>Adult</InputLabel>
        <Select
          value={filters.adult}
          label="Adult"
          onChange={(e) => {
            setFilters({ ...filters, adult: e.target.value === "true" });
          }}
        >
          <MenuItem value="false">Don't include</MenuItem>
          <MenuItem value="true">Include</MenuItem>
        </Select>
      </FormControl>
      <Button
        onClick={() => handleClick(filters)}
        className="filter"
        variant="contained"
      >
        Search
      </Button>
    </div>
  );
}

export default Filters;
