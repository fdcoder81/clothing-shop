import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Logo from "../../assets/logo.png";
import { auth } from "../../firebase/firebase.utils";

import "./header.scss";
import CartIcon from "../cart-icon/CartIcon";
import CartDropDown from "../cart-dropdown/CartDropDown";

const Header = (props) => {
  const { currentUser, hidden } = props;

  return (
    <div className="header">
      <Link to="/">
        <div className="logo-container">
          <img src={Logo} alt="logo" />
        </div>
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
        <CartIcon />
        {hidden ? null : <CartDropDown />}
      </div>
    </div>
  );
};

const mapsStateToProps = (state) => {
  return { currentUser: state.user.currentUser, hidden: state.cart.hidden };
};

export default connect(mapsStateToProps)(Header);
