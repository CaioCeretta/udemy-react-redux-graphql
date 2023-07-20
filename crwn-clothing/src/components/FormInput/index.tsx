import React, { InputHTMLAttributes } from 'react'

import './styles.scss'

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function FormInput({label, ...rest}: CustomInputProps) {
  return (
    <div className='group'>
            <input
        className='form-input'
        {...rest}
      />
      <label className={`${rest?.value ? 'shrink' : '' } form-input-label` }>{label}</label>

    </div>
  )
}
