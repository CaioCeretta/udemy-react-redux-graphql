import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/tests/test.utils";
import ProductCard from "../product-card.component";

describe('Product Card Tests',  () => {
  test('It should add the product item when Product Card button is clicked', async () => {
    const mockProduct = {
      id: 1,
      imageUrl: 'test',
      name: 'item a',
      price: 1
    }
    
    const { store } = renderWithProviders(<ProductCard product={mockProduct}/>, { 
      preloadedState: {
        cart: {
          cartItems: []
        },        
      }
    })

    const addToCartElement = screen.getByText(/add to cart/i)

    await fireEvent.click(addToCartElement) 

    expect(store.getState().cart.cartItems.length).toBe(1)

  })
})