import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Title from "../../components/title/Title";
import TransactionTable from "../../components/transactionTable/TransactionTable";

const FixedTransactions = () => {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <Title title="Fixed Account Transactions" />
        <TransactionTable accountType="Fixed" />
      </div>
    </>
  );
};

export default FixedTransactions;
