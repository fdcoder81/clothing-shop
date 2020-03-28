import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Logo from "../../assets/logo.png";
import { auth } from "../../firebase/firebase.utils";

import "./header.scss";

const Header = props => {
  const { currentUser } = props;

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

        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/login">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

const mapsStateToProps = state => {
  return { currentUser: state.user.currentUser };
};

export default connect(mapsStateToProps)(Header);
