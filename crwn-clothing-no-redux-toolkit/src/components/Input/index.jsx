

import React from "react";

import './styles.scss'

export default function Input({ label, inputObject, ...otherProps }) {
  // If inputObject is provided, use its properties; otherwise, use otherProps
  const inputProps = inputObject || otherProps;

  return (
    <div className="group">
      <input className="form-input" {...inputProps} />

      {label && (
        <label
          className={`${
            inputProps.value ? "shrink" : ""
          } form-input-label`}
          htmlFor=""
        >
          {label}
        </label>
      )}
    </div>
  );
}