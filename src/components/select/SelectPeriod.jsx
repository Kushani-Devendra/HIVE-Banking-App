import React from "react";
import PropTypes from "prop-types";

const SelectPeriod = ({ label, className, setPeriod, ...props }) => {
  return (
    <>
      <label className="input-label">{label}</label>
      <select
        className={`input-box ${className}`}
        onChange={setPeriod}
        defaultValue={"default"}
        required
        {...props}
      >
        <option value="default" disabled>
          Select Period
        </option>
        <option value="3">3</option>
        <option value="6">6</option>
        <option value="9"> 9</option>
      </select>
    </>
  );
};

export default SelectPeriod;

SelectPeriod.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  setPeriod: PropTypes.func,
};
