import React from "react";
import { connect } from "react-redux";

import "./checkOut.scss";
import CheckOutItem from "../checkout-item/CheckOutItem";

const CheckOutPage = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => {
        return <CheckOutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <div className="total">
        <span>TOTAL: £{total}</span>
      </div>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => {
  return {
    cartItems,
    total: cartItems.reduce(
      (accummulatedQuantity, cartItem) =>
        accummulatedQuantity + cartItem.quantity * cartItem.price,
      0
    )
  };
};

export default connect(mapStateToProps)(CheckOutPage);
