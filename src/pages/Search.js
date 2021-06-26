import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import "./Search.css";
import { Button } from "@material-ui/core";

const Search = () => {
  const [input, setInput] = useState("");

  const search = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search">
      <div class="search_input">
        <SearchIcon className="search_inputIcon" />
        <input />
        <MicIcon />
      </div>
      <div class="search_buttons">
        <Button onClick={search} variant="outlined">
          Google search
        </Button>
        <Button variant="outlined">I'm feeling lucky</Button>
      </div>
    </div>
  );
};

export default Search;
