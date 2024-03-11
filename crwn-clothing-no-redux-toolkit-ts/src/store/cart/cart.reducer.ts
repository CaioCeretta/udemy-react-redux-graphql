import { AnyAction } from "redux";

import { CategoryItem } from "../categories/category.types";
import { setCartItems, setIsCartOpen } from "./cart.action";

import { CartItem } from "./cart.types";

export type CART_STATE = {
  readonly cartItems: CartItem[],
  readonly isCartOpen: boolean;
}

const CART_INITIAL_STATE: CART_STATE = {
  cartItems: [],
  isCartOpen: false,
};


export const cartReducer = (state = CART_INITIAL_STATE, action: AnyAction): CART_STATE => {

    if(setIsCartOpen.match(action)) {
      return {
        ...state,
        isCartOpen: action.payload
      }
    }

    if(setCartItems.match(action)) {
      return {
        ...state,
        cartItems: action.payload
      }
    }

    return state;

};