import React from 'react'

import { useContext } from 'react'
import { ProductsContext } from '../../contexts/products.context'
import { ProductCard } from '../ProductCard'

import './styles.scss'

export const Shop = () => {

  const { products } = useContext(ProductsContext)

  return (
    <div className='products-container'>
      {products.map(product => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  )
}
