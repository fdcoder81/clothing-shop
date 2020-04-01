import { createSelector } from "reselect";

const selectCart = state => state.cart.cartItems;

/* export const selectCartItems = createSelector(
  selectCart,
  cart => cart.cartItems
); */

export const selectCartItemsCount = createSelector([selectCart], cartItems =>
  cartItems.reduce(
    (accummulatedQuantity, cartItem) =>
      accummulatedQuantity + cartItem.quantity,
    0
  )
);
