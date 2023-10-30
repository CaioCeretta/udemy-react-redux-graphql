import { useContext } from "react";
import Button from "../Button";
import "./styles.scss";
import { CartContext } from "../../contexts/cart.context";

export const ProductCard = ({ product }) => {
  
  const { name, price, imageUrl } = product;

  const { addItemToCart } = useContext(CartContext);



  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
 
      <Button buttonType="inverted" onClick={() => addItemToCart(product)}>Add To Cart</Button>

    </div>
  );
};
