import React from "react";

const PrimaryButton = ({ children, className, ...props }) => {
  return (
    <button className={`btn-primary ${className}`} {...props}>
      {children}
    </button>
  );
};

export default PrimaryButton;
