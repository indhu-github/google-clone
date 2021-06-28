import React from "react";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import "./SearchPage.css";
import Response from "../response";
import { Link } from "@material-ui/core";

const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();

  //LIVE API call
  //const { data } = useGoogleSearch(term);

  const data = Response;
  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage_header">
        <Link to="/">
          <img
            className="searchPage_logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRriJSAhEvgE8RJg3tOWguscF3ttV7QSDZbcsvQE--GbnUfHbsD3EAqBv5TFvB6NFg5XPY&usqp=CAU"
            alt="logo"
          />
        </Link>
      </div>

      <div className="searchPage_results"></div>
    </div>
  );
};

export default SearchPage;
