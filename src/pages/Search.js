import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import "./Search.css";

const Search = () => {
  return (
    <div className="search">
      <div class="search_input">
        <SearchIcon className="search_inputIcon" />
        <input />
        <MicIcon />
      </div>
    </div>
  );
};

export default Search;
