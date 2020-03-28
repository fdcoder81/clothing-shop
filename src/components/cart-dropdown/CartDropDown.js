import React from "react";

import "./cartDropdown.scss";
import CustomButton from "../custom-button/CustomButton";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropDown;
