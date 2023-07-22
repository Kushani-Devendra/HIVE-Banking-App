import React from "react";
import PropTypes from "prop-types";

const PrimaryButton = ({ children, className, onClick, ...props }) => {
  return (
    <button className={`btn-primary ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default PrimaryButton;

PrimaryButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  onClick: PropTypes.func,
};
