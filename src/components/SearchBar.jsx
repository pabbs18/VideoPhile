import React, { useState } from "react";
import { IconButton, Paper } from "@mui/material";
import { Search } from "@mui/icons-material";
import {useNavigate} from 'react-router-dom';

const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const navigateTo = useNavigate();

  const handleSubmit = (event) =>{
      event.preventDefault();
      if(searchTerm){
        navigateTo(`search/${searchTerm}`);
        setSearchTerm('');
      }     
  }
 

  return (
    <>
    
      <Paper        
        component="form"
        onSubmit={handleSubmit}        
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
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
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
