import React from "react";
import { Link } from "react-router-dom";
import HeroImg from "../../images/hero-img.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <small>Save up to 70% off</small>
        <h1>New Collection For All</h1>
        <p>Discover all the new arrivals of ready-to-wear collection</p>
        <Link className="btn" to="shop">
          Shop Now
        </Link>
      </div>
      <div className="hero-img">
        <img src={HeroImg} alt="heroimage" />
      </div>
    </div>
  );
};

export default Home;
