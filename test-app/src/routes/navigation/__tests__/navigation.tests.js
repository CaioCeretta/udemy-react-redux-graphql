import { screen, fireEvent } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/tests/test.utils";


import * as reactRedux from 'react-redux'
import Navigation from "../navigation.component";
import { signOutStart } from "../../../store/user/user.action";

describe('Navigation Tests', () => {

  test('it render a SignIn link and not a Sign Up', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: null
        }
      }
    })

    const signInLink = screen.getByText(/sign in/i);
    expect(signInLink).toBeInTheDocument()

    const signOutLink = screen.queryByText(/sign out/i);
    expect(signOutLink).toBeNull()

  })

  test('It should render sign out and not sign in if there is a currentUser', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {}
        }
      }
    })

    const signOutLink = screen.getByText(/sign out/i);
    expect(signOutLink).toBeInTheDocument()

    const signInLink = screen.queryByText(/sign in/i);
    expect(signInLink).toBeNull()

  })

  test('It should not render a cart dropdown if isCartOpen is false', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: false,
          cartItems: []
        }
      }
    })

    const dropdownTextElement = screen.queryByText(/Your cart is empty/i)

    expect(dropdownTextElement).toBeNull()
  })

  test('It should render a cart dropdown if isCa rtOpen is true', () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: true,
          cartItems: []
        }
      }
    })

    const dropdownTextElement = screen.getByText(/Your cart is empty/i)

    expect(dropdownTextElement).toBeInTheDocument()


  })

  test('it should dispatch signOutStart action when clicking on the Sign Out link', async () => {

    const mockDispatch = jest.fn()

    jest.spyOn(
      reactRedux, 'useDispatch'
    ).mockReturnValue(mockDispatch)

    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {}
        }
      }
    })

    const signOuElement = screen.getByText(/Sign out/i)

    expect(signOuElement).toBeInTheDocument()


    await fireEvent.click(signOuElement);
    expect(mockDispatch).toHaveBeenCalled();

    const signOutAction = signOutStart()
    expect(mockDispatch).toHaveBeenCalledWith(signOutAction)

    mockDispatch.mockClear()


  })



})
