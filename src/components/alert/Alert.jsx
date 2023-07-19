import React from "react";

const Alert = ({ message, bgColor, textColor, handleCloseAlert }) => {
  return (
    <div>
      <div className={`alert-container ${bgColor}`}>
        <p className={`alert-message ${textColor}`}>{message}</p>
        <p className={`alert-redirect ${textColor}`}>
          Redirecting to home page...
        </p>
      </div>
    </div>
  );
};

export default Alert;
