import { createContext, useEffect, useMemo, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartQty: 0,
  clearItemFromCart: () => {},
  total: 0,
});

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
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((acc, val) => {
      return acc + val.qty;
    }, 0);

    setCartCount(newCartCount)
  }, [cartCount, cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce((acc, val) => {
      return acc + val.qty * val.price;
    }, 0);

    setTotal(() => newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const clearItemFromCart = (cartItemToRemove) => {
    setCartItems(clearCartItem(cartItems, cartItemToRemove));
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
    total
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
