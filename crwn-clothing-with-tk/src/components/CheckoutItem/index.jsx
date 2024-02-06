import "./styles.scss";

import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.action';
import { selectCartItems } from "../../store/cart/cart.selector";


export const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, qty } = cartItem;

  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems)


  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <button onClick={removeItemHandler} className="arrow">
          &#10094;
        </button>
        <span className="value">{qty}</span>
        <button onClick={addItemHandler} className="arrow">
          &#10095;
        </button>

      </span>
      <span className="price">{price}</span>
      <div className="remove=button">
        <span onClick={clearItemHandler}>&#10005; </span>
      </div>
    </div>
  );
};
