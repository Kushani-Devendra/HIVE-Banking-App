import React from "react";
import { Link } from "react-router-dom";

const SecondaryButton = ({ children, navigate, className, ...props }) => {
  return (
    <button
      className={`btn-primary-outlined ${className}`}
      onClick={navigate}
      {...props}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
