import { CartItem as TCartItem } from "@/src/store/cart/cart.types";
import "./styles.scss";

type CartItemProps = {
  cartItem: TCartItem
}

export const CartItem = ({ cartItem }: CartItemProps) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />

      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};
