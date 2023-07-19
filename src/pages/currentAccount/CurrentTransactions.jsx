import React from "react";
import Navbar from "../../components/navbar/Navbar";
import TransactionTable from "../../components/transactionTable/TransactionTable";
import Title from "../../components/title/Title";

const CurrentTransactions = () => {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <Title title="Current Account Transactions" />
        <TransactionTable />
      </div>
    </>
  );
};

export default CurrentTransactions;
