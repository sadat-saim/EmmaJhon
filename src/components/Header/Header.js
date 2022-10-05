import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <div className="links">
        <Link to="/order">Order</Link>
        <Link to="/review">Review</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Header;
