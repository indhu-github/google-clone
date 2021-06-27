import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import "./Search.css";
import { Button } from "@material-ui/core";

const Search = () => {
  const [input, setInput] = useState("");

  const search = (e) => {
    e.preventDefault();
    console.log("input handling");
  };

  return (
    <form className="search">
      <div className="search_input">
        <SearchIcon className="search_inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>
      <div className="search_buttons">
        <Button type="submit" onClick={search} variant="outlined">
          {/* type='submit' executes click function whenever we type sthg and click on enter */}
          Google search
        </Button>
        <Button variant="outlined">I'm feeling lucky</Button>
      </div>
    </form>
  );
};

export default Search;
