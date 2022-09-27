import React from "react";
import Logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <img src={Logo} alt="logo" />
      <div className="links">
        <a href="/order">Order</a>
        <a href="/review">Review</a>
        <a href="/inventory">Inventory</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default Header;
