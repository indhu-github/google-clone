import React from "react";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import "./SearchPage.css";
import Response from "../response";

const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();
  //LIVE API call
  //const { data } = useGoogleSearch(term);
  const data = Response;
  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage_header">
        <h1>{term}</h1>
      </div>

      <div className="searchPage_results"></div>
    </div>
  );
};

export default SearchPage;
