import React from "react";
import { Stack, Button } from "@mui/material";
import { categories } from "../utils/constants";
import { red } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const SideBar = ({selectedCategory, setSelectedCategory}) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { xs: "auto", md: "95%" },
        flexDirection: { md: "column" },
        mt: 0.25,
      }}
    >
      {categories.map((category) => (
        <button
          style={{
            background: category.name === selectedCategory && "#FC1503",
            color: "white",
          }}
          className="category-btn"
          key={category.name}
          onClick={() => setSelectedCategory(category.name)}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "red",
              marginRight:'15px'
            }}
          >
            {" "}
            {category.icon}
          </span>
          <span style={{
            color:'ButtonText',
            opacity:category.name === selectedCategory ?'1':'0.8'
          }}> {category.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
