//Reminder: Every single reducer action needs to be dispatched
import { useDispatch, useSelector } from 'react-redux'

import { selectCartItems } from '../../store/cart/cart.selector'
import { addItemToCart } from '../../store/cart/cart.action';

import Button from "../Button";
import "./styles.scss";
import { CategoryItem } from '@/src/store/categories/category.types';

type ProductCardProps = {
  product: CategoryItem;
}

export const ProductCard = ({ product }: ProductCardProps) => {

  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);


  const addProductToCart = () => dispatch(addItemToCart(cartItems, product))


  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>

      <Button type='button' buttonType="inverted" onClick={addProductToCart}>Add To Cart</Button>

    </div>
  );
};
