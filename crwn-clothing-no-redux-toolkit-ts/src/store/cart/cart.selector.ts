

import { createSelector } from 'reselect'

import { CART_STATE } from './cart.reducer';

import { RootState } from "../store";


const selectCartReducer = (state: RootState):CART_STATE => state.cart;

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
    return acc + val.quantity;
  }, 0)
)

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, val) => {
    return acc + val.quantity * val.price;
  }, 0)
)
