import { AccountBalanceWalletOutlined } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const TransactionButton = ({ accType, accNumber }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (accType === "Current") {
      navigate("/current-transactions");
    } else if (accType === "Savings") {
      navigate("/savings-transactions");
      return accNumber;
    } else if (accType === "Fixed") {
      navigate("/fixed-transactions");
    } else {
      navigate("/recurring-transactions");
    }
  };

  return (
    <button className="icon-btn" onClick={handleNavigate}>
      <AccountBalanceWalletOutlined fontSize="small" />
    </button>
  );
};

export default TransactionButton;

TransactionButton.propTypes = {
  accType: PropTypes.string,
  accNumber: PropTypes.string,
};
