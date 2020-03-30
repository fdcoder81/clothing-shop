import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { ReactComponent as ShoppingIcon } from "../../assets/cart-icon.svg";

import "./cartIcon.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden())
  };
};
const mapStateToProps = ({ cart: { cartItems } }) => {
  return {
    itemCount: cartItems.reduce(
      (accummulatedQuantity, cartItem) =>
        accummulatedQuantity + cartItem.quantity,
      0
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
