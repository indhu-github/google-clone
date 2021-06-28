import React from "react";
import { useStateValue } from "../StateProvider";
import "./SearchPage.css";

const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();

  
  return (
    <div className="searchPage">
      <div className="searchPage_header">
        <h1>{term}</h1>
      </div>

      <div class="searchPage_results"></div>
    </div>
  );
};

export default SearchPage;
