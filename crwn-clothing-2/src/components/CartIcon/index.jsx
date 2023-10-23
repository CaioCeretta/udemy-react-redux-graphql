import { useContext } from 'react'
import { ReactComponent as ShoppingCartIcon } from '../../assets/shopping-bag.svg'

import './styles.scss'
import { CartContext } from '../../contexts/cart.context'

export const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext)


  return (
    <div  onClick={() => setIsCartOpen(!isCartOpen)} className='cart-icon-container'>
      <ShoppingCartIcon className='shopping-icon'/>
      <span className='item-count'>0</span>
    </div>
  )


}