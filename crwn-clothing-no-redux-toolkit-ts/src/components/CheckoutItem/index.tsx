import "./styles.scss";

import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.action';
import { selectCartItems } from "../../store/cart/cart.selector";
import { CartItem } from "@/src/store/cart/cart.types";

interface CheckoutItemProps {
  cartItem: CartItem
}

export const CheckoutItem = ({ cartItem }: CheckoutItemProps) => {

  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems)


  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={cartItem.imageUrl} alt={cartItem.name} />
      </div>
      <span className="name">{cartItem.name}</span>
      <span className="quantity">
        <button onClick={removeItemHandler} className="arrow">
          &#10094;
        </button>
        <span className="value">{cartItem.quantity}</span>
        <button onClick={addItemHandler} className="arrow">
          &#10095;
        </button>

      </span>
      <span className="price">{cartItem.price}</span>
      <div className="remove=button">
        <span onClick={clearItemHandler}>&#10005; </span>
      </div>
    </div>
  );
};
