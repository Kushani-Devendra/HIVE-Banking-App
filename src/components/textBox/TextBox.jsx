import React from "react";
import PropTypes from "prop-types";

const TextBox = ({ label, type, className, min, max, pattern, ...props }) => {
  return (
    <>
      <label className="input-label">{label}</label>
      <input
        type={type}
        className={`input-box ${className}`}
        min={min}
        max={max}
        required
        {...props}
      />
    </>
  );
};

export default TextBox;

TextBox.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
};
