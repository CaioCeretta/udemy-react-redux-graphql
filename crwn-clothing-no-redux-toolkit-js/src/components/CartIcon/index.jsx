import { useDispatch, useSelector } from 'react-redux'

import { ReactComponent as ShoppingCartIcon } from '../../assets/shopping-bag.svg'
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector'

import { setIsCartOpen } from '../../store/cart/cart.action'
import './styles.scss'

export const CartIcon = () => {
  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount)
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <div onClick={toggleIsCartOpen} className='cart-icon-container'>
      <ShoppingCartIcon className='shopping-icon'/>
      <span className='item-count'>{cartCount}</span>
    </div>
  )


}