

import { createSelector } from 'reselect'

const selectCartReducer = state => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
)

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems) =>  cartItems.reduce((acc, val) => {
    return acc + val.qty;
  }, 0)
)

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, val) => {
    return acc + val.qty * val.price;
  }, 0)
)
