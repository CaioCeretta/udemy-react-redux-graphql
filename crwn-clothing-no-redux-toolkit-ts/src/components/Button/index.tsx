import React, { ButtonHTMLAttributes, ReactNode } from 'react'

import './styles.scss'

export enum BUTTON_TYPE_CLASSES {
  base = 'base',
  google = 'google-sign-in',
  inverted = 'inverted'
}



interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  paymentLoading?: boolean;
  isPayment?: boolean;
  children: ReactNode;
  type: "submit" | "button";
  buttonType?: keyof typeof BUTTON_TYPE_CLASSES
}

/*
OR

interface ButtonProps {
  paymentLoading?: boolean;
  isPayment: boolean;
  children: ReactNode;
  buttonType: keyof typeof BUTTON_TYPE_CLASSES
} & ButtonHTMLAttributes<HTMLButtonElement>


*/

export default function Button({ paymentLoading, type, isPayment = false, children, buttonType = 'base', ...otherProps }: ButtonProps) {

  return (
    <button
    type={type}
    disabled={paymentLoading}
    className={`${isPayment ? 'payment-button' : '' } button-container
    ${buttonType === 'base' ? '' : buttonType}`} {...otherProps}>
      {children}
    </button>
  )
}
