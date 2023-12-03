import { useSelector } from "react-redux";
import Button from "../Button";
import { CartItem } from "../CartItem";
import "./styles.scss";

import { useNavigate } from 'react-router-dom'

import { selectCartItems } from "../../store/cart/cart.selector";

export const CartDropdown = () => {

  const navigate = useNavigate()

  const cartItems = useSelector(selectCartItems)

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
