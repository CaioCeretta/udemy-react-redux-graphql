import { screen } from "@testing-library/react";

import Category from "../category.component";
import { renderWithProviders } from "../../../utils/tests/test.utils";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    category: 'mens'
  })
    
}))

describe('Category Component Tests', () => {
  it('Should render a spinner if is loading is true', () => {
    renderWithProviders(<Category />, {
      preloadedState: {
        categories: {
          isLoading: true,
          categories: []
        }
      }
    })

    const spinnerElement = screen.getByTestId('spinner')

    expect(spinnerElement).toBeInTheDocument()


  })

  it('Should render not render the spinner if is loading is false', () => {
    renderWithProviders(<Category />, {
      preloadedState: {
        categories: {
          isLoading: false,
          categories: []
        }
      }
    })

    const spinnerElement = screen.queryByTestId('spinner')

    expect(spinnerElement).toBeNull()

  })

   it('Should render products if isLoading is false and there are items present', () => {
    renderWithProviders(<Category />, {
      preloadedState: {
        categories: {
          isLoading: false,
          categories: [{
            title: 'Mens',
            items: [
              {id: 1, name: 'product 1'},
              {id: 2, name: 'product 2'},
            ]
            }
          ]
        }
      }
    })

    const product1Element = screen.getByText(/product 1/i)

    expect(product1Element).toBeInTheDocument()

  })
})