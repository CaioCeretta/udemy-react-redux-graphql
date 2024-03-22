

import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/tests/test.utils';

import CartIcon from '../cart-icon.component';

describe('Cart Icon tests', () => {
  test('Uses the preloaded state to render', () => {
    const initialCartItems = [
      { id: 1, name: 'Item A', imageUrl: 'test', price: 10, quantity: 1 },
      { id: 2, name: 'Item B', imageUrl: 'test', price: 10, quantity: 1 },
      { id: 3, name: 'Item C', imageUrl: 'test', price: 10, quantity: 1 },
    ]

    renderWithProviders(
      <CartIcon />,
      {
        preloadedState: {
          cart: {
            cartItems: initialCartItems,
          }
        }
      }
    )

    const cartIconElement = screen.getByText('3')
    expect(cartIconElement).toBeInTheDocument()

  })

})