import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron text-center">
      <h1>Search for movies!</h1>
      <a target="_blank" rel="noopener noreferrer" href="http://www.recipepuppy.com/about/api/">
        Powered by React
      </a>
    </div>
  );
}

export default Jumbotron;
