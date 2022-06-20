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
    popularity: "Don't apply",
    revenue: "Don't apply",
    adult: false,
  });

  const popularityFilter = (e) => {
    setFilters({ ...filters, popularity: e.target.value });
  };

  const revenueFilter = (e) => {
    setFilters({ ...filters, revenue: e.target.value });
  };

  const adultFilter = (e) => {
    setFilters({ ...filters, adult: e.target.value });
  };

  const handleChange = (e) => {
    setFilters({
      ...filters,
      keywords: e.target.value,
    });
  };

  return (
    <div className="filters">
      <TextField onChange={handleChange} label="Movie keywords"></TextField>
      <FormControl className="filter">
        <InputLabel>Popularity</InputLabel>
        <Select
          value={filters.popularity}
          label="Popularity"
          onChange={popularityFilter}
        >
          <MenuItem value="Don't apply">Don't apply</MenuItem>
          <MenuItem value="popularity.asc">Ascending</MenuItem>
          <MenuItem value="popularity.desc">Descending</MenuItem>
        </Select>
      </FormControl>

      <FormControl className="filter">
        <InputLabel>Revenue</InputLabel>
        <Select
          value={filters.revenue}
          label="Revenue"
          onChange={revenueFilter}
        >
          <MenuItem value="Don't apply">Don't apply</MenuItem>
          <MenuItem value="revenue.asc">Ascending</MenuItem>
          <MenuItem value="revenue.desc">Descending</MenuItem>
        </Select>
      </FormControl>

      <FormControl className="filter">
        <InputLabel>Adult</InputLabel>
        <Select value={filters.adult} label="Revenue" onChange={adultFilter}>
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
