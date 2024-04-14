import React from "react";
import { IconButton, Paper } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  return (
    <>
    
      <Paper        
        component="form"
        onSubmit={() => {}}        
        sx={{
          borderRadius: 20,
          border: "1px solid #e3e3e3",
          pl: 2,
          boxShadow: "none",
          display: "flex",
          mr: { sm: 5 },
        }}
      >
        <input
          className="search-bar"
          placeholder="Search..."
          value=""
          onChange={() => {}}
          style={{
            border: "none",
            outline: "none",
            flex: 1,
            padding: "10px",
          }}

        />
        <IconButton type="submit"
        sx={{p:'10px', color:'red'}}>
          <Search />
        </IconButton>
      </Paper>
 
      
    </>
  );
};

export default SearchBar;
