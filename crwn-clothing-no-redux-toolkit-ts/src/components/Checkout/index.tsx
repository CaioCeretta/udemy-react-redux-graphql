import React from "react";

import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';



import { useSelector } from "react-redux";
import { CheckoutItem } from "../CheckoutItem";
import "./styles.scss";
import PaymentForm from "../payment-form";

export function Checkout() {

  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

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
          <PaymentForm />

        </div>
    </div>
  );
}
