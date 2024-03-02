import { ActionWithPayload, createAction } from '../../utils/reducer/reducer.utils';
import { CategoryItem } from '../categories/category.types';
import { CartItem } from './cart.reducer';
import { CART_ACTION_TYPES } from './cart.types';

import { withMatcher } from '../../utils/reducer/reducer.utils';

const addCartItem = (cartItems: CartItem[], productToAdd: CategoryItem): CartItem[] => {
  const existingCartItem = cartItems.find(item => item.id === productToAdd.id)

  if (existingCartItem) {
    return cartItems.map(cartItem => cartItem.id === productToAdd.id
      ? { ...cartItem, qty: cartItem.qty + 1 }
      : cartItem)
  }


  return [...cartItems, { ...productToAdd, qty: 1 }]

};


const removeCartItem = (cartItems: CartItem[], cartItemToRemove: CartItem): CartItem[] => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );


  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem && existingCartItem.qty === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // return back cartitems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, qty: cartItem.qty - 1 }
      : cartItem
  );


};

export type SetIsCartOpen = ActionWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean>;

export type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>

export const setIsCartOpen = withMatcher((bool: boolean): SetIsCartOpen =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool)
)

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems))

export const addItemToCart = (cartItems: CartItem[], productToAdd: CartItem) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems)
};


const clearCartItem = (cartItems: CartItem[], cartItemToClear: CartItem) => 
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id)
  
  


export const removeItemFromCart = (cartItems: CartItem[], cartItemToRemove: CartItem) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  
  return setCartItems(newCartItems)
}

export const clearItemFromCart = (cartItems: CartItem[], cartItemToClear: CartItem) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  
  return setCartItems(newCartItems)

}


