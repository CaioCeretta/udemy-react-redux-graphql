

import { ChangeEvent, InputHTMLAttributes } from "react";

import './styles.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  inputObject: {
    type: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    name: string;
    value: string,
    required: boolean,
  }

}

export default function Input({ label, inputObject, ...otherProps }: InputProps) {
  // If inputObject is provided, use its properties; otherwise, use otherProps
  const inputProps = inputObject || otherProps;

  return (
    <div className="group">
      <input className="form-input" {...inputProps} />

      {label && (
        <label
          className={`${inputProps.value ? "shrink" : ""
            } form-input-label`}
          htmlFor=""
        >
          {label}
        </label>
      )}
    </div>
  );
}