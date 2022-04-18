import React from "react";

const TextArea = ({ value, onChange, label, errorMessage, ...rest }) => {
  return (
    <div className="input-container">
      <textarea
        type="text"
        id="email"
        className="input input-rose-800 h-20 text-black input-blue-focus"
        autoComplete="off"
        placeholder=" "
        value={value}
        onChange={onChange}
        {...rest}
      />
      <label for="email" className="input-label text-grey-700 bg-white">
        {label}
      </label>

      <small className="error text-red-500 text-sm">{errorMessage}</small>
    </div>
  );
};

export default TextArea;
