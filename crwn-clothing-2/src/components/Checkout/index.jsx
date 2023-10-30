import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./styles.scss";
import { CheckoutItem } from "../CheckoutItem";

export default function Checkout() {
  const { cartItems, total } = useContext(CartContext);

  return (
    <div>
      <div className="checkout-container">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div> 
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
          {cartItems.map((item) => 
            <CheckoutItem key={item.id} cartItem={item} />  
          )}
          <span className="total">Total: $ {total}</span>
        </div>
    </div>
  );
}
