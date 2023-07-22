import { CurrencyExchangeOutlined } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const TransferButton = ({ accType }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    accType === "Current"
      ? navigate("/current-transfer")
      : navigate("/savings-transfer");
  };
  return (
    <button className="icon-btn" onClick={handleNavigate}>
      <CurrencyExchangeOutlined fontSize="small" />
    </button>
  );
};

export default TransferButton;

TransferButton.propTypes = {
  accType: PropTypes.string,
};
