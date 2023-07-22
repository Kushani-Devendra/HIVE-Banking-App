import React from "react";
import PropTypes from "prop-types";

const Alert = ({ message, redirectMsg, bgColor, textColor }) => {
  return (
    <div className={`alert-container ${bgColor}`}>
      <p className={`alert-message ${textColor}`}>{message}</p>
      <p className={`alert-redirect ${textColor}`}>{redirectMsg}</p>
    </div>
  );
};

export default Alert;

Alert.propTypes = {
  message: PropTypes.string,
  redirectMsg: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};
