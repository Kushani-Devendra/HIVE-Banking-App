import React from "react";
import PropTypes from "prop-types";

const SecondaryButton = ({ children, onClick, className, ...props }) => {
  return (
    <button
      className={`btn-primary-outlined ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;

SecondaryButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};
