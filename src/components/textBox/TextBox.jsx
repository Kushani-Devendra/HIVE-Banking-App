import React from "react";
import PropTypes from "prop-types";

const TextBox = ({
  label,
  type,
  className,
  minLength,
  min,
  pattern,
  ...props
}) => {
  return (
    <>
      <label className="input-label">{label}</label>
      <input
        type={type}
        className={`input-box ${className}`}
        minLength={minLength}
        min={min}
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
  // minLength: PropTypes.string,
  // maxLength: PropTypes.string,
};
