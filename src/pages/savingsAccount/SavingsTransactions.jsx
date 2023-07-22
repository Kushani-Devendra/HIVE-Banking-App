import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Title from "../../components/title/Title";
import TransactionTable from "../../components/transactionTable/TransactionTable";

const SavingsTransactions = () => {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <Title title="Savings Account Transactions" />
        <TransactionTable accountType="Savings" />
      </div>
    </>
  );
};

export default SavingsTransactions;
