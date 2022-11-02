import React from "react";

const Input = ({ value, onChange, label, errorMessage, ...rest }) => {
  return (
    <div className="input-container">
      <input
        type="text"
        id="email"
        className="input input-rose-800 input-blue-focus text-black"
        autoComplete="off"
        placeholder=" "
        value={value}
        onChange={onChange}
        {...rest}
      />
      <label htmlFor="email" className="input-label text-grey-700 bg-white">
        {label}
      </label>

      <small className="error text-red-500 text-sm">{errorMessage}</small>
    </div>
  );
};

export default Input;
