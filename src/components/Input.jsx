import React from "react";

const Input = ({ type, placeholder, name, value, onChange, styling }) => {
  return (
    <div className={` ${styling ? styling : ""}`}>
      <input
        className="w-full px-4 py-2 rounded text-blue-800 outline-none"
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default Input;
