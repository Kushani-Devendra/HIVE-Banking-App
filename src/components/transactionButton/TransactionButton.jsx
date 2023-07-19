import { AccountBalanceWalletOutlined } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";

const TransactionButton = ({ accType }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (accType === "Current") {
      navigate("/current-transactions");
    } else if (accType === "Savings") {
      navigate("/savings-transactions");
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
// navigate={
//   account.accType === "Current"
//     ? navigate("/current-transactions")
//     : navigate("/current-savings")
// }
