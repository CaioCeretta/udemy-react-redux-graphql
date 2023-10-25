import { CartContext } from "../../contexts/cart.context";
import "./styles.scss";

import React, { useContext } from "react";

export const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, qty } = cartItem;

  const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <button onClick={() => removeItemFromCart(cartItem)}className="arrow">
          &#10094;
        </button>
        <span className="value">{qty}</span>
        <button onClick={() => addItemToCart(cartItem)} className="arrow">
          &#10095;
        </button>

      </span>
      <span className="price">{price}</span>
      <div className="remove=button">
        <span onClick={() => clearItemFromCart(cartItem)}>&#10005; </span>
      </div>
    </div>
  );
};
