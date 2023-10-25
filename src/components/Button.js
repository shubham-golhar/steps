import React from "react";

const Button = ({ color, bgColor, onClick, children }) => {
  return (
    <button
      style={{ backgroundColor: bgColor, color: color }}
      onClick={onClick}
      // disabled={step === 3 ? true : false}
    >
      {children}
    </button>
  );
};

export default Button;
