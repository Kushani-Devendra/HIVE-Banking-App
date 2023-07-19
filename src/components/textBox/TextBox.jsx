import React from "react";

const TextBox = ({ label, className, ...props }) => {
  return (
    <>
      <label className="input-label">{label}</label>
      <input className={`input-box ${className}`} {...props} />
    </>
  );
};

export default TextBox;
