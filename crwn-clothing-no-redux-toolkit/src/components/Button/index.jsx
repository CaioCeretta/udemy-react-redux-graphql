import React from 'react'

import './styles.scss'

export const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted'
}

export default function Button({ isPayment = false, children, buttonType, ...otherProps }) {
  return (
    <button className={`${isPayment ? 'payment-button' : '' } button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>
      {children}
    </button>
  )
}
