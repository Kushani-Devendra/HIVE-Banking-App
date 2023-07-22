import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Title from "../../components/title/Title";
import TransactionSummaryTable from "../../components/transactionSummaryTable/TransactionSummaryTable";
import PrimaryButton from "../../components/primaryButton/PrimaryButton";
import { useNavigate } from "react-router-dom";
import Link from "../../components/link/Link";

const SavingsTransactionSummary = () => {
  const navigate = useNavigate();

  const navigateToTransfer = () => {
    navigate("/savings-transfer");
  };

  return (
    <>
      <Navbar />
      <div className="main-container">
        <Title title="Transaction Summary" />
        <div className="transaction-summary-card mt-2 ">
          <TransactionSummaryTable accountType="Savings" />
          <div className="fs-15">
            <p className="mt-2">
              Click "Go Back" to return to the Funds Transfer screen.
            </p>
            <p className="mt--5">
              You can also check your transaction history by clicking the
              appropriate link.
            </p>
            <PrimaryButton className="mt-2 mb-1" onClick={navigateToTransfer}>
              Go Back
            </PrimaryButton>
            <br />
            <Link navigate="/savings-transactions">
              View Transaction History
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SavingsTransactionSummary;
