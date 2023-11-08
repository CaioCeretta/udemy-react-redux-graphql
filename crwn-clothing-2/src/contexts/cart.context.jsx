//Reducers may be a good option when you need to update more than one state in an action, like we were doing on total, count, items, on each useEffect

import { createContext, useEffect, useReducer, useState } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartQty: 0,
  clearItemFromCart: () => {},
  total: 0,
});

const INITIAL_STATE = {
  cartCount: 0,
  cartTotal: 0,
  cartItems: [],
  isCartOpen: false,
};



const CART_ACTION_TYPES = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN'
}

/* One best practice is that our reducer should not receive business logic methods, meaning that inside our reducer, if
we were to receive some  items, some of us might be thinking something of creating a function like

const AddToCartAction = (itemToAdd) => {
  dispatchEvent{type: 'ADD_TO_CART', payload: itemToAdd}
}

there is no problem on us dispatching an event like this

But the reason why we don't want to do this is that now inside our reducer, in order to appropriately respond this, it
would have to be something like:

switch(type) {
  case: 'ADD_TO_CART':
    return {
      ...state,
      cartItems: addCartItem(state.cartItems, payload)
    }
  ...  
}

this logic may work but i makes our reducer a lot harder to read, so what we should do instead, is that our payload be
be whatever we need to update, because if we think about it, inside the addToCart, we also need to update the total and
the cart count 

we will need to add a , for example, 
...
case: 'ADD_TO_CART':
const newCartItems = addCartItem(state.cartItems, payload);
const newCartTotal = newCartItems.reduce((acc, item) => {
  return acc + item.price
}, 0)
return {
  ..state,
  cartItems: addCartItem(state.cartItems, payload),
  cartTotal: newCartTotal,
  
  and so on
  
  This is what we should do 

  We must keep our functions as light and tight as possible, the only thing reducer should care about is really updating
  the state, it shouldn't worry about anything regarding on HOW to update that state, don't need to know anything about
  the logic or business logic that the values must end up with, only about the values, like: Hey, i got this payload and i should update the state with
  the appropriate values, so what we need to do is to split up some of this logic, so we need to dispatch and action that
  already include all of the values that this needs, like this \/
}
*/
const reducer = (state, action) => {
  const { type, payload } = action;

  /* The payload will contain the shape that we want to set */

  switch (type) {
    /*First we need to define what type of values that we want to set
    
    What we were already doing is that, we already got the values from the useState function, values like
    cartItem, cartCount, cartTotal, and we were responding whenever the cartItems updated, and we set these values

    in this case, with reducers, what we will do instead, is to update all these values inside of one action, because
    these functions are generic enough, except for the action states, like add, remove, clear which are actually unique

    so in this case, what we can do is that we can actually create a generic action, that says: 'hey, whenever cart
    items is set then what i want you to do is that we want to update the state with the payload

    */
    case "SET_IS_CART_OPEN":
      return {
        ...state,
        isCartOpen: payload
      }

    case "SET_CART_ITEMS":
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`Unhandled type: ${type}`);
  }
};

const addCartItem = (cartItems, productToAdd) => {
  /* Find if cart items contains the productToAdd */

  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  /* If found, increment quantity */
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, qty: cartItem.qty + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, qty: 1 }];
};


const removeCartItem = (cartItems, itemToRemove) => {
  // Find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === itemToRemove.id
  );

  // Check if quantity is equal to 1, if it is remove that item fromt he cart
  if (existingCartItem.qty === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
  }
  // If it isn't, return back cart items with matching cart item with reduced quantity
  return cartItems.map((item) =>
    item.id === itemToRemove.id ? { ...item, qty: item.qty - 1 } : item
  );
};

const clearCartItem = (cartItems, itemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== itemToClear.id);
};

export const CartProvider = ({ children }) => {
  const [{ cartItems, isCartOpen, cartCount, cartTotal }, dispatch] =
    useReducer(reducer, INITIAL_STATE);
 
  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce((acc, val) => {
      return acc + val.qty;
    }, 0);

    const newCartTotal = newCartItems.reduce((acc, val) => {
      return acc + val.qty * val.price;
    }, 0);

    dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
      cartItems: newCartItems,
      cartTotal: newCartTotal,
      cartCount: newCartCount,
    }))

  };

  const setIsCartOpen = (bool) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool))
  }  

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const removeItemFromCart = (cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    updateCartItemsReducer(newCartItems);
  };

  const clearItemFromCart = (cartItemToRemove) => {
    const newCartItems = clearCartItem(cartItems, cartItemToRemove);
    updateCartItemsReducer(newCartItems);
  };

  // const removeCartItem = (productToRemove) => {
  //   const cartItemsTemp = cartItems.filter(item => item.id === productToRemove.id);

  //   setCartItems(cartItemsTemp)
  // }

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    cartItems,
    cartCount,
    clearItemFromCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
