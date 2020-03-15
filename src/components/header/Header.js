import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={Logo} className="logo-container" alt="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
