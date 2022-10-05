import React from "react";
import { Link } from "react-router-dom";
import gif from "../images/giphy.gif";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="container-nf">
      <h1>404</h1>
      <p>Page Not Found</p>
      <Link to="/">Return to Homepage</Link>
      <img src={gif} alt="404" />
    </div>
  );
};

export default NotFound;
