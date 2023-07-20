import React, {ReactNode, ButtonHTMLAttributes} from 'react'

import './styles.scss'

/* types of button

default, inverted, google signIn 

*/

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode,
  buttonType: 'google' | 'inverted'
}

export default function Button({children, buttonType, ...rest}: ButtonProps) {
  return (
    <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...rest}>
      {children}
    </button>
  )
}
