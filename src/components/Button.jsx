import React from "react";

const Button = ({ text, bg }) => {
  return (
    <button
      className={`rounded px-6 py-2 ${
        bg ? bg : "bg-blue-600"
      } my-3 text-white text-[20px] `}
    >
      {text}
    </button>
  );
};

export default Button;
