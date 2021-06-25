import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>Home page</h1>
      <div className="home_header">
        <div class="home_headerLeft">
          <Link to="/about">About</Link>
          <Link to="/about">Store</Link>
        </div>
        <div class="home_headerRight">
          <Link to="/about">Gmail</Link>
          <Link to="/about">Images</Link>
        </div>
      </div>
      <div className="home_body"></div>
    </div>
  );
}

export default Home;
