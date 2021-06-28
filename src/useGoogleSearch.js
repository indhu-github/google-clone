import { useState, useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "1175ea6c4bb3c0fa0";

const useGoogleSearch = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}` //the endpoint that connects to the google custom serach api
      ).then((response) => response.json());
    };
  }, [term]);
};

export default useGoogleSearch;
