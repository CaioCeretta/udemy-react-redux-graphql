import { useContext } from "react";
import Button from "../Button";
import { CartItem } from "../CartItem";
import "./styles.scss";
import { CartContext } from "../../contexts/cart.context";

export const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {(cartItems && cartItems.length) ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span className="empty-message">Your cart is empty!</span>
        )}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};
