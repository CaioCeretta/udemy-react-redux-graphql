import { useContext } from "react";
import Button from "../Button";
import { CartItem } from "../CartItem";
import "./styles.scss";
import { CartContext } from "../../contexts/cart.context";

import { useNavigate } from 'react-router-dom'

export const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate()

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {(cartItems && cartItems.length) ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span className="empty-message">Your cart is empty!</span>
        )}
      </div>
      <Button onClick={() => navigate('checkout')}>GO TO CHECKOUT</Button>
    </div>
  );
};
