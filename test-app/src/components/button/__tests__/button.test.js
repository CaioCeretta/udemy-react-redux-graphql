import { render, screen } from '@testing-library/react'
import Button, { BUTTON_TYPE_CLASSES } from '../button.component'

describe('button tests', () => {

  test('should render the base button when nothing is passed', () => {
    render(<Button>Test</Button>)

    // const buttonElement = screen.getByText(/test/i);

    // Here we are testing with best accessibility patterns that helps people with disability to understand our website
    const buttonElement = screen.getByRole('button')


    expect(buttonElement).toHaveStyle('background-color: black')
  })

  test('should render google button when passed google button type', () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.google}>Google</Button>)

    const googleButtonElement = screen.getByRole('button')

    expect(googleButtonElement).toHaveStyle('background-color: #4285f4')
  })


})

test('should render inverted button when passed inverted button type', () => {
  render(<Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Google</Button>)

  const invertedButtonElement = screen.getByRole('button')

  expect(invertedButtonElement).toHaveStyle('background-color: white')
})

test('should test if the button is disabled when isLoading is true', () => {
  render(<Button isLoading={true}>Disabled</Button>)

  const disabledButtonElement = screen.getByRole('button')

  expect(disabledButtonElement).toBeDisabled()
})

